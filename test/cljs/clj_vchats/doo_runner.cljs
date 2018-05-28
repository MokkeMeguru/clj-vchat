(ns clj-vchats.doo-runner
  (:require [doo.runner :refer-macros [doo-tests]]
            [clj-vchats.core-test]))

(doo-tests 'clj-vchats.core-test)

