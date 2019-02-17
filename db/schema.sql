create database burgers_db;
use burgers_db;
create table burgers(
id              int auto_increment primary key,
burger_name     varchar(150),
devoured        boolean default false
);
CREATE TABLE users(
	id INT NOT NULL AUTO_INCREMENT,
	username  varchar(255) NOT NULL,
	email VARCHAR(255) NOT NULL UNIQUE,
	password_hash VARCHAR(255) NOT NULL,
	PRIMARY KEY (id)
);

