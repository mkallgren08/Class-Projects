 CREATE DATABASE IF NOT EXISTS animals_db;

use animals_db;

CREATE TABLE IF NOT EXISTS people (
	id INTEGER (11) AUTO_INCREMENT NOT NULL,
    name VARCHAR(30) not null,
    has_pet boolean not null,
    pet_name varchar(30),
    pet_age integer(10),
    primary key (id)
)