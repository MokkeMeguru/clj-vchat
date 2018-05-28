(ns user
  (:require [clj-vchats.config :refer [env]]
            [clojure.spec.alpha :as s]
            [expound.alpha :as expound]
            [mount.core :as mount]
            [clj-vchats.figwheel :refer [start-fw stop-fw cljs]]
            [clj-vchats.core :refer [start-app]]
            [clj-vchats.db.core]
            [conman.core :as conman]
            [luminus-migrations.core :as migrations]))

(alter-var-root #'s/*explain-out* (constantly expound/printer))

(defn start []
  (mount/start-without #'clj-vchats.core/repl-server))

(defn stop []
  (mount/stop-except #'clj-vchats.core/repl-server))

(defn restart []
  (stop)
  (start))

(defn restart-db []
  (mount/stop #'clj-vchats.db.core/*db*)
  (mount/start #'clj-vchats.db.core/*db*)
  (binding [*ns* 'clj-vchats.db.core]
    (conman/bind-connection clj-vchats.db.core/*db* "sql/queries.sql")))

(defn reset-db []
  (migrations/migrate ["reset"] (select-keys env [:database-url])))

(defn migrate []
  (migrations/migrate ["migrate"] (select-keys env [:database-url])))

(defn rollback []
  (migrations/migrate ["rollback"] (select-keys env [:database-url])))

(defn create-migration [name]
  (migrations/create name (select-keys env [:database-url])))


