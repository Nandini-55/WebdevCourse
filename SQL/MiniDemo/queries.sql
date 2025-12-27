-- contains queries to create the database 
-- command to run file in terminal -o connect to sql - mysql -u root -p
-- run the file - source queries.sql;
-- CREATE DATABASE shri_app;

USE shri_app;

-- CREATE TABLE temp (
-- id int primary key 
-- );

CREATE TABLE user (
    id VARCHAR(50) PRIMARY KEY,
    username VARCHAR(50) UNIQUE,
    email VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(50) NOT NULL
);