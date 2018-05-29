(ns clj-vchats.core
  (:require [reagent.core :as r]
            [re-frame.core :as rf]
            [secretary.core :as secretary]
            [goog.events :as events]
            [goog.history.EventType :as HistoryEventType]
            [markdown.core :refer [md->html]]
            [ajax.core :refer [GET POST]]
            [clj-vchats.ajax :refer [load-interceptors!]]
            [clj-vchats.events]

            [clj-vchats.components.pixi-art :as pixi-art]
            [clj-vchats.components.ws :as ws]
            )
  (:import goog.History))

(defn nav-link [uri title page]
  [:li.nav-item
   {:class (when (= page @(rf/subscribe [:page])) "active")}
   [:a.nav-link {:href uri} title]])

(defn navbar []
  [:nav.navbar.navbar-dark.bg-primary.navbar-expand-md
   {:role "navigation"}
   [:button.navbar-toggler.hidden-sm-up
    {:type "button"
     :data-toggle "collapse"
     :data-target "#collapsing-navbar"}
    [:span.navbar-toggler-icon]]
   [:a.navbar-brand {:href "#/"} "clj-vchats"]
   [:div#collapsing-navbar.collapse.navbar-collapse
    [:ul.nav.navbar-nav.mr-auto
     [nav-link "#/" "Home" :home]
     [nav-link "#/about" "About" :about]
     [nav-link "#/vchat" "Vchat" :vchat]
     [nav-link "#/testpage" "Testpage" :testpage]]]])

;; (defn test-page []
;;   (let [messages (r/atom nil)]
;;     (fn []
;;       [:div.container
;;        [:div.row
;;         [:div
;;          [:p "message:"
;;           [:input.form-control
;;            {:type :text
;;             :field :text
;;             :on-change #(reset! messages (-> % .-target .-value))
;;             :value @messages}]]]]])))

(defn about-page []
  (println "About Page!")
  [:div.container
   [:div.row
    [:div.col-md-12
     [:img {:src "/img/warning_clojure.png"}]]]])


(defn home-page []
  [:div.container
   [:div.row>div.col-sm-12
    [:h2.alert.alert-info "Tip: try pressing CTRL+H to open re-frame tracing menu"]]
   (when-let [docs @(rf/subscribe [:docs])]
     [:div.row>div.col-sm-12
      [:div {:dangerouslySetInnerHTML
             {:__html (md->html docs)}}]])])

(defn vchat-page []
  (r/create-class
   {:component-will-mount
    (fn [] (println "mounted!")
      (pixi-art/load-resources!))
    :display-name "viewing"
    :reagent-render
    (fn []
      [:div.container
       [:div.alert.alert-info "Sorry, This page doesn't have any contents..."]
       [:canvas#viewing]
       [ws/home]
       ])}))

(def pages
  {:home #'home-page
   :about #'about-page
   :vchat #'vchat-page
   :testpage #'about-page})

(defn page []
  (let [_ (if (= :vchat @(rf/subscribe [:page]))
            (do
              (ws/start-router! (ws/response-handler (atom nil) (atom nil) (atom nil)))
              (println "Connecting!!")
              (rf/clear-subscription-cache!))
            (println "disconnect!"))]
   [:div
    [navbar]
    [(pages @(rf/subscribe [:page]))]]))

;; -------------------------
;; Routes
(secretary/set-config! :prefix "#")

(secretary/defroute "/" []
  (rf/dispatch [:set-active-page :home]))

(secretary/defroute "/about" []
  (rf/dispatch [:set-active-page :about]))

(secretary/defroute "/vchat" []
  (rf/dispatch [:set-active-page :vchat]))

(secretary/defroute "/testpage" []
  (rf/dispatch [:set-active-page :testpage]))
;; -------------------------
;; History
;; must be called after routes have been defined
(defn hook-browser-navigation! []
  (doto (History.)
    (events/listen
      HistoryEventType/NAVIGATE
      (fn [event]
        (secretary/dispatch! (.-token event))))
    (.setEnabled true)))

;; -------------------------
;; Initialize app
(defn fetch-docs! []
  (GET "/docs" {:handler #(rf/dispatch [:set-docs %])}))
 [:div.alert.alert-info "Sorry, This page doesn't have any contents..."]
(defn mount-components []
  (println "render")
  (rf/clear-subscription-cache!)
  (r/render [#'page] (.getElementById js/document "app")))

(defn init! []
  (rf/dispatch-sync [:initialize-db])
  (load-interceptors!)
  (fetch-docs!)
  (hook-browser-navigation!)
  (mount-components))
