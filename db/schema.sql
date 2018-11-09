DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;

USE burgers_db;

DROP TABLE IF EXISTS burgers;
CREATE TABLE burgers (
	id INT (11) AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR (256) NOT NULL,
    devoured BOOLEAN DEFAULT 0,
    PRIMARY KEY (id)
);