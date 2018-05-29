(ns clj-vchats.routes.ws
  (:require [compojure.core :refer [GET defroutes]]
            [clojure.tools.logging :as log]
            [clj-vchats.db.core :as db]
            [mount.core :refer [defstate]]
            [taoensso.sente :as sente]
            [bouncer.core :as b]
            [bouncer.validators :as v]
            [taoensso.sente.server-adapters.immutant
             :refer [sente-web-server-adapter]]))


(let [connection (sente/make-channel-socket!
                  sente-web-server-adapter
                  {:user-id-fn
                   (fn [ring-req]
                     (get-in ring-req [:params :client-id]))})]
  (def ring-ajax-post (:ajax-post-fn connection))
  (def ring-ajax-get-or-ws-handshake (:ajax-get-or-ws-handshake-fn connection))
  (def ch-chsk (:ch-recv connection))
  (def chsk-send! (:send-fn connection))
  (def connected-uids (:connected-uids connection)))

(defn validate-message [params]
  (first
   (b/validate
    params
    :chan v/required
    :name v/required
    :message [v/required [v/min-count 10]])))

(defn save-message! [message]
  (if-let [errors (validate-message message)]
    {:errors errors}
    (do
      (db/save-message! message)
      message)))

;; I want to check connected-uids == client-id
;; and has a map {client-id [chan1 chan2 ...]}.
;; So, I want to send message to the client which is belong to the channel(ex. chan1)

(defn handle-message! [{:keys [id client-id ?data]}]
  (println "\n\n+++++++++++ GOT MESSAGE:" id (keys ?data))
  (println (= id :clj-vchat/add-message))
  (when (= id :clj-vchat/add-message)
    (let [response (-> ?data
                       (assoc :timestamp (java.sql.Timestamp.
                                          (System/currentTimeMillis)))
                       save-message!)]
      (println response)
      (if (:errors response)
        (chsk-send! client-id [:clj-vchats/error response])
        (doseq [uid (:any @connected-uids)]
          (chsk-send! uid [:clj-vchats/add-message response]))))))

(defn stop-router! [stop-fn]
  (when stop-fn
    (do
      (println "\n\n++++++++++++++++++ STOP ROUTER! ++++++++++++++\n\n")
      (stop-fn))))

(defn start-router! []
  (println "\n\n+++++++++++++ STARTING ROUTER! +++++++++++++++++\n\n")
  (sente/start-chsk-router! ch-chsk handle-message!))

(defstate router
  :start (start-router!)
  :stop (stop-router! router))
