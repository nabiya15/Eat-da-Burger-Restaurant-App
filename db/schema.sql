CREATE DATABASE burger_db;

USE burger_db;

CREATE TABLE burgers(
id INT auto_increment not null,
burger_name varchar(100),
devoured BOOLEAN DEFAULT false,
order_date DATETIME,
primary key(id)
);