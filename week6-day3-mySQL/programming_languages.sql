-- create database programming_db --

use programming_db;

create table if not exists programming_languages(
	id integer(11) auto_increment not null,
    language varchar(20),
    rating integer(11),
    mastered boolean default true,
    primary key (id)
);

Insert into programming_languages (language, rating)
values ("HTML", 95);

select*from programming_languages;