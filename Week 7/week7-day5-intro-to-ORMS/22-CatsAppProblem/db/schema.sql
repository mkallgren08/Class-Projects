### Schema

CREATE DATABASE if not exists cat_db;
USE cat_db;

CREATE TABLE if not exists cats
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	sleepy BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
