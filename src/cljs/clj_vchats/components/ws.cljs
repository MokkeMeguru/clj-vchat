(ns clj-vchats.components.ws
  (:require [taoensso.sente :as sente]
            [reagent.core :as r]
            [re-frame.core :as rf]))

;; ---------------------------
(defn message-list [messages]
  [:ul.content
   (for [{:keys [timestamp message name chan]} @messages]
     ^{:key timestamp}
     [:li
      [:time (.toLocaleString timestamp)]
      [:p message]
      [:p " - " name]
      [:p " - " chan]])])

;; (defn get-messages [messages]
;;   (GET "/messages"
;;        {:headers {"Accept" "application/transit+json"}
;;         :handler #(reset! messages (vec %))}))

;; (defn errors-component [errors id]
;;   (when-let [error (id @errors)]
;;     [:div.alert.alert-danger (clojure.string/join error)]))
;; --------------------------------------

(let [connection (sente/make-channel-socket! "/ws" {:type :auto})]
  (def ch-chsk (:ch-recv connection))
  (def send-message! (:send-fn connection)))

(defn state-handler [{:keys [?data]}]
  (.log js/console (str "state changed: " ?data)))

(defn handshake-handler [{:keys [?data]}]
  (.log js/console (str "connection edtablished: " ?data)))

(defn default-event-handler [ev-msg]
  (.log js/console (str "Unhandled event: " (:event ev-msg))))

(defn event-msg-handler [& [{:keys [message state handshake]
                             :or {state state-handler
                                  handshake handshake-handler}}]]
  (fn [ev-msg]
    (case (:id ev-msg)
      :chsk/handshake (handshake ev-msg)
      :chsk/state (state ev-msg)
      :chsk/recv (message ev-msg)
      (default-event-handler ev-msg))))

(def router (r/atom nil))

(defn stop-router! []
  (when-let [stop-f @router]
    stop-f))

(defn start-router! [message-handler]
  (stop-router!)
  (reset! router (sente/start-chsk-router!
                  ch-chsk
                  (event-msg-handler
                   {:message message-handler
                    :state handshake-handler
                    :handshake state-handler}))))

;; ---------------------------------------------
;; view

(defn message-form [fields errors]
  [:div.content
   [:div.container
    [:div.form-inline  {:style {:marginBottom "10px"}}
     [:div.form-group {:style {:marginBottom "10px"}}
      [:label.text-left.col-sm-4 "Channel:"]
      [:input.form-control.col-sm-8
       {:type :text
        :on-change #(rf/dispatch [:set-chan (-> % .-target .-value)])
        :value @(rf/subscribe [:chan])
        :placeholder "This channel"
        }]]]
    [:div.form-inline {:style {:marginBottom "15px"}}
     [:div.form-group
      [:label.col-sm-4.text-left "Name :"]
      [:input.form-control.col-sm-8
       {:type :text
        :on-change #(rf/dispatch [:set-name (-> % .-target .-value)])
        :value  @(rf/subscribe [:name])
        :placeholder "Your name"
        }]]]
    [:div  {:style {:marginBottom "10px"}}
     [:label.col-sm-4.text-left "Message:"]
     [:textarea.form-control
      {:rows 4
       :cols 50
       :value  @(rf/subscribe [:message])
       :on-change #(rf/dispatch [:set-message (-> % .-target .-value)])
       :placeholder "At least 5 words"
       }]]
    [:input.btn.btn-primary
     {:type :submit
      :on-click #(do (send-message! [:clj-vchat/add-message
                                     {:chan @(rf/subscribe [:chan])
                                      :name @(rf/subscribe [:name])
                                      :message @(rf/subscribe [:message])}] 8000)
                     (rf/dispatch [:remove-message]))
      :value "comment"}]]])

(defn response-handler [messages fields errors]
  (fn [{[_ message] :?data}]
    (if-let [response-errors (:errors message)]
      (reset! errors response-errors)
      (do
        (reset! errors nil)
        (reset! fields nil)
        (swap! messages conj message)))))

(defn home []
  (let [messages (r/atom nil)
        errors (r/atom nil)
        fields (r/atom nil)
        ]
    (fn []
      (println (ajax.core/GET "/messages" {:params {:chan "elect"}}))
      [:div.container
       [:div.row>div.col-sm-12
        [:div.span12
         ]]
       [:div.row
        [:div.span12
         (message-form fields errors)]]])))
