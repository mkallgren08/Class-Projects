CREATE DATABASE IF NOT EXISTS top_songsDB;
 
Use top_songsDB;

CREATE TABLE if not exists top5000(
    -- needs ID, Artist, Song Name, Release Year, and popularity --
    -- by world -> USA -> UK -> Eur -> rest of world -- 
    primary key (id),
    id integer(11) auto_increment not null,
    Artist varchar(60) not null ,
    Song_Name varchar(60) not null,
    Release_Year integer(11) not null,
    Popularity_Global decimal(5,3) not null,
    Popularity_USA decimal (5,3) not null,
    Popularity_UK decimal (5,3) not null,
    Popularity_Europe decimal (5,3) not null,
    Popularity_RestofWorld decimal (5,3) not null

);

SELECT * FROM top5000 LIMIT 0,5000;