(ns clj-vchats.routes.ws
  (:require [compojure.core :refer [GET defroutes]]
            [clojure.tools.logging :as log]
            [immutant.web.async :as async]
            [cognitect.transit :as transit]
            [clj-vchats.db.core :as db]))

(defonce channels (atom #{}))

(defn connect! [channel]
  (log/info "channel open")
  (swap! channels conj channel))

(defn disconnect! [channel {:keys [code reason]}]
  (log/info "close code:" code "reason:" reason)
  (swap! channels #(remove #{channel} %)))

(defn encode-transit [message]
  (let [out (java.io.ByteArrayOutputStream. 4096)
        writer (transit/writer out :json)]
    (transit/write writer message)
    (.toString out)))

(defn decode-transit [message]
  (let [in (java.io.ByteArrayInputStream. (.getBytes message))
        reader (transit/reader in :json)]
    (transit/read reader)))

(defn validate-message [params]
  (let [chan (:chan params)
        name (:name params)
        message (:message params)]
    (if (or (nil? chan)
            (nil? name)
            (nil? message))
      "Invalid Message" nil)))

(defn save-message! [message]
  (if-let [error (validate-message message)]
    {:errors error}
    (do
      (db/save-message! message)
      message)))

(defn handle-message! [channel message]
  (let [response (-> message
                     decode-transit
                     (assoc :timestamp (java.util.Date.))
                     save-message!)]
    (if (:errors response)
      (async/send! channel (encode-transit response))
      (doseq [channel @channels]
        (async/send! channel (encode-transit response))))))

(defn ws-handler [request]
  (async/as-channel
   request
   {:on-open connect!
    :on-close disconnect!
    :on-message handle-message!}))
