(ns ^:figwheel-no-load clj-vchats.app
  (:require [clj-vchats.core :as core]
            [cljs.spec.alpha :as s]
            [expound.alpha :as expound]
            [devtools.core :as devtools]))

(set! s/*explain-out* expound/printer)

(enable-console-print!)

(devtools/install!)

(core/init!)
