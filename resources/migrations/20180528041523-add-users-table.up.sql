CREATE TABLE users
(id VARCHAR(20) PRIMARY KEY,
 first_name VARCHAR(30),
 last_name VARCHAR(30),
 email VARCHAR(30),
 admin BOOLEAN,
 last_login TIMESTAMP,
 is_active BOOLEAN,
 pass VARCHAR(300));


CREATE TABLE messages
(id SERIAL PRIMARY KEY,
 chan VARCHAR(30),
 name VARCHAR(30),
 message VARCHAR(200),
 timestamp TIMESTAMP);
