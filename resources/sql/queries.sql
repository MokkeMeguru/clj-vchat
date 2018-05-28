-- :name create-user! :! :n
-- :doc creates a new user record
INSERT INTO users
(id, first_name, last_name, email, pass)
VALUES (:id, :first_name, :last_name, :email, :pass)

-- :name update-user! :! :n
-- :doc updates an existing user record
UPDATE users
SET first_name = :first_name, last_name = :last_name, email = :email
WHERE id = :id

-- :name get-user :? :1
-- :doc retrieves a user record given the id
SELECT * FROM users
WHERE id = :id

-- :name delete-user! :! :n
-- :doc deletes a user record given the id
DELETE FROM users
WHERE id = :id

-- :name save-message! :! :n
-- :doc save message
INSERT INTO messages
(chan, name, message, timestamp)
VALUES (:chan, :name, :message, :timestamp)

-- :name get-messages :? :*
-- :doc select message by chan
SELECT name, message, timestamp
FROM messages
WHERE chan = :chan
ORDER BY timestamp

-- :name delete-channel :! :n
-- :doc delete message
DELETE FROM messages
WHERE chan = :chan


-- :name get-all-messages :? :*
SELECT *
FROM messages
