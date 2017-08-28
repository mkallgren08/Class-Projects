CREATE DATABASE IF NOT EXISTS greatbayDB;

USE greatbayDB;

CREATE TABLE items_to_bid(
    -- make a table with item name, description, current highest bid, --
    -- 'buy now' price, and a sold/not sold column --
    primary key(id),
    id integer(10) not null auto_increment,
    itemName varchar(50) not null,
    description varchar(150),
    currentBid decimal (8,2),
    buyNow decimal (8,2),
    sold boolean default false
);