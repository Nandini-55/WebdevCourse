 -- create database
 CREATE DATABASE college;
 CREATE DATABASE IF NOT EXISTS college; -- safe option , throughs warning if database exists ,no error
-- delete database
DROP DATABASE college;
DROP DATABASE IF EXISTS college ;-- safe option , throughs warning if database not exists ,no error
-- define which database you want ot perform actions on (creating tables etc.)
USE college;
-- creating table - Defines schema /columns
CREATE TABLE student(
roll_no  INT, 
name  VARCHAR(30),
age INT
);
-- insert data
INSERT INTO student VALUES (101 , "adam ",12),(102, "bob ", 14);
-- print data
SELECT * FROM student;
-- list of databases
SHOW DATABASES;
-- list of tables
USE college;
SHOW TABLES;