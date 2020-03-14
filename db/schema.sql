DROP DATABASE IF EXISTS eat_da_burger_db;
CREATE DATABASE eat_da_burger_db;

USE eat_da_burger_db;

CREATE TABLE burgers
(
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(255) NOT NULL,
    devoured BOOLEAN DEFAULT FALSE,
    PRIMARY KEY (id)
)
