(ns clj-vchats.app
  (:require [clj-vchats.core :as core]))

;;ignore println statements in prod
(set! *print-fn* (fn [& _]))

(core/init!)
