(ns clj-vchats.events
  (:require [clj-vchats.db :as db]
            [re-frame.core :refer [dispatch reg-event-db reg-sub]]))

;;dispatchers

(reg-event-db
  :initialize-db
  (fn [_ _]
    db/default-db))

(reg-event-db
  :set-active-page
  (fn [db [_ page]]
    (assoc db :page page)))

(reg-event-db
  :set-docs
  (fn [db [_ docs]]
    (assoc db :docs docs)))

(reg-event-db
 :set-message
 (fn [db [_ message]]
   (assoc db :message message)))

(reg-event-db
 :set-name
 (fn [db [_ message]]
   (assoc db :name message)))

(reg-event-db
 :set-chan
 (fn [db [_ message]]
   (assoc db :chan message)))

;;subscriptions

(reg-sub
  :page
  (fn [db _]
    (:page db)))

(reg-sub
  :docs
  (fn [db _]
    (:docs db)))

(reg-sub
 :message
 (fn [db _]
   (:message db)))

(reg-sub
 :name
 (fn [db _]
   (:name db)))

(reg-sub
 :chan
 (fn [db _]
   (:chan db)))

;; ----
;; for pixi
(reg-sub
 :container
 (fn [db _]
   (:container db)))
