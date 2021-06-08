DROP DATABASE IF EXISTS bestpaws_db;
CREATE DATABASE bestpaws_db;

CREATE TABLE user (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(100) NOT NULL,
    middle_name VARCHAR(100) NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,

    PRIMARY KEY (id)
);

CREATE TABLE topic (
    id INT NOT NULL AUTO_INCREMENT,
    
);

CREATE TABLE post ();

CREATE TABLE comment ();