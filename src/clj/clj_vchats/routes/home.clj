(ns clj-vchats.routes.home
  (:require [clj-vchats.layout :as layout]
            [clj-vchats.db.core :as db]
            [clojure.java.io :as io]
            [clj-vchats.middleware :as middleware]
            [ring.util.http-response :as response]
            [clj-vchats.routes.ws :as ws]))

(defn home-page [_]
  (layout/render "home.html"))

(defn home-routes []
  [["/" {:get {:handler    home-page
               :middleware [middleware/wrap-csrf
                            middleware/wrap-formats]}}]
   ["/docs" {:get {:handler (fn [_]
                              (-> (response/ok (-> "docs/docs.md" io/resource slurp))
                                  (response/header "Content-Type" "text/plain; charset=utf-8")))}}]
   ["/ws" {:get {:handler (fn [req]
                            (ws/ring-ajax-get-or-ws-handshake req))}
           :post {:handler (fn [req]
                             (ws/ring-ajax-post req))}}]])

