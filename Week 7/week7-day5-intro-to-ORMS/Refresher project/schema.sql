CREATE DATABASE if not exists movieplannerDB;
Use movieplannerDB;

create table if not exists movies
(
    id INT (11) not null auto_increment,
    movie varchar(255) not null,
    primary key (id)
);

Select*from movies 