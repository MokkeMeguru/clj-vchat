(ns clj-vchats.components.ws
  (:require [taoensso.sente :as sente]))

;; ;; ---------------------------
;; (defn message-list [messages]
;;   [:ul.content
;;    (for [{:keys [timestamp message name chan]} @messages]
;;      ^{:key timestamp}
;;      [:li
;;       [:time (.toLocaleString timestamp)]
;;       [:p message]
;;       [:p " - " name]
;;       [:p " - " chan]])])

;; ;; (defn get-messages [messages]
;; ;;   (GET "/messages"
;; ;;        {:headers {"Accept" "application/transit+json"}
;; ;;         :handler #(reset! messages (vec %))}))

;; ;; (defn errors-component [errors id]
;; ;;   (when-let [error (id @errors)]
;; ;;     [:div.alert.alert-danger (clojure.string/join error)]))
;; ;; --------------------------------------

;; (let [connection (sente/make-channel-socket! "/ws" {:type :auto})]
;;   (def ch-chsk (:ch-recv connection))
;;   (def send-message! (:send-fn connection)))

;; (defn state-handler [{:keys [?data]}]
;;   (.log js/console (str "state changed: " ?data)))

;; (defn handshake-handler [{:keys [?data]}]
;;   (.log js/console (str "connection edtablished: " ?data)))

;; (defn default-event-handler [ev-msg]
;;   (.log js/console (str "Unhandled event: " (:event ev-msg))))

;; (defn event-msg-handler [& [{:keys [message state handshake]
;;                              :or {state state-handler
;;                                   handshake handshake-handler}}]]
;;   (fn [ev-msg]
;;     (case (:id ev-msg)
;;       :chsk/handshake (handshake ev-msg)
;;       :chsk/state (state ev-msg)
;;       :chsk/recv (message ev-msg)
;;       (default-event-handler ev-msg))))

;; (def router (atom nil))

;; (defn stop-router! []
;;   (when-let [stop-f @router]
;;     stop-f))

;; (defn start-router! [message-handler]
;;   (stop-router!)
;;   (reset! router (sente/start-chsk-router!
;;                   ch-chsk
;;                   (event-msg-handler
;;                    {:message messaage-handler
;;                     :state handshake-handler
;;                     :handshake state-handler}))))

;; ;; ---------------------------------------------
;; ;; view

;; (defn message-form [fields errors]
;;   [:div.content
;;    [:div.form-group
;;     [:p (str errors)]
;;     [:p (:chan @fields)
;;      [:p "this form will be removed"]
;;      [:input.form-control
;;       {:type :text
;;        :on-change #(swap! fields assoc :chan (.. % -target -value))
;;        :value (:chan @fields)}]]
;;     [:p "Name:"
;;      [:input.form-control
;;       {:type :text
;;        :on-change #(swap! fields assoc :name (.. % -target -value))
;;        :value (:name @fields)}]
;;      (if (:name @fields) [:p "X"] [:p "O"])]
;;     [:p "Message:"
;;      [:textarea.form-control
;;       {:rows 4
;;        :cols 50
;;        :value (:message @fields)
;;        :on-change @(swap! fields assoc :message (.. % -target -value))}]]
;;     [:input.btn.btn-primary
;;      {:type :submit
;;       :on-click #(send-message!! [:clj-vchat/add-message @fields] 8000)
;;       :value "comment"}]]])

;; (defn respons-handler [messages fields errors]
;;   (fn [{[_ message] :?data}]
;;     (if-let [response-errors (:errors message)]
;;       (reset! errors response-errors)
;;       (do
;;         (reset! errors nil)
;;         (reset! fields nil)
;;         (swap! messages conj message)))))

;; (defn home []
;;   (let [messages (atom nil)
;;         errors (atom nil)
;;         fields (atom nil)]
;;     [:div
;;      [:div.row
;;       [:div.span12
;;        [message-list messages]]]
;;      [:div.row
;;       [:div.span12
;;        [message-form fields errors]]]]))
