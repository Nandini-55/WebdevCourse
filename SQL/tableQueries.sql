CREATE DATABASE IF NOT EXISTS instagram;
-- CREATE , INSERT , UPDATE , ALTER , TRUNCATE , DELETE
-- CREATE : CREATE TABLE table_name ( col_1 datatype constraints , col2 datatype constraint);
-- Datatyes - char(fixed size) , varchar(variable size) , int , tinyint (-128 to 127), folat , double , boolean , date , year 
-- Constrains(RULES FOR DATA IN TABLE) - NOT NULL , UNIQUE , DEFAULT , CHECK
-- Key Contraints - PRIMARY KEY(uniquely identifies each row -- only one and not null) , FOREIGN KEY (set of coulmns that refers to primary key of another table)(can be duplicate and null and mulitple foreign keys)(HELPS TO LINK TWO TABLES)
USE instagram ; 
CREATE TABLE users(
id INT PRIMARY KEY ,
age INT ,
name varchar(50)  NOT NULL, 
email varchar(70) UNIQUE,
followers int DEFAULT 0, 
following int,
CONSTRAINT age_check CHECK (age>=13)
);

CREATE TABLE post(
    id INT PRIMARY KEY,
    content VARCHAR(100),
    user_id int ,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Insert data 
INSERT INTO users 
(id , age , name , email , followers , following ) 
VALUES 
(1,14,"adam","adam@yahoo.in",123,145),
(2,15,"bob","bob123@yahoo.in",200,200),
(3,16,"casey","casey@gmail.com",300,306),
(4,17,"donald","donald@yahoo.in",200,105);


-- Select command = select and show data from the db
SELECT id,name ,email from users;
SELECT * from users; -- select all

INSERT INTO post 
(id , content , user_id) 
VALUES 
(101,"Hello World",3),
(102,"Bye Bye ",1),
(103,"Hello vinu ",3);

SELECT * FROM post ;


-- Aggregate functions -perform calculation on a set of values and return single value [COUNT ,MAX ,MIN , AVG , SUM]

SELECT MAX(following) FROM users;
SELECT MIN(age) FROM users;
SELECT COUNT(age) FROM users WHERE age=14;
SELECT AVG(age) FROM users ;
SELECT SUM(followers) FROM users;

-- CLAUSES - SQL clauses are fundamental components of SQL statements that specify how data should be retrieved, filtered, grouped, and ordered from a database.
-- 1.) WHERE CLAUSE = To define some condition  
Select * FROM users WHERE followers>=200;
--  operators in where - o arithmetic operators(+,-,/,*,%) | o comparision operator(=,!=,<=,>=,<,>) | o logical operator (AND , OR , NOT , IN[match value in list ] , BETWEEN[range] , NOT[to negate the given condition ] , LIKE , ANY ) | o bitwise operator (&,|)
SELECT * FROM users WHERE age>15 AND followers>200;
SELECT * FROM users WHERE age>15 OR followers>200;
SELECT * FROM users WHERE age BETWEEN 15 AND 17;
SELECT * FROM users WHERE email IN ("bob123@yahoo.in","abc@gmail.com","casey@gmail.com");
INSERT INTO users 
(id , age , name , email , followers , following ) 
VALUES 
(5,14,"eve","eve@yahoo.in",1023,125),
(6,16,"ben","ben@gmail.com",300,200);
SELECT * FROM users WHERE age IN (14,16);
SELECT * FROM users WHERE age NOT IN (14,16);

-- 2.)LIMIT CLAUSE = set a upper limit on the no. of tuples(rows) returned
SELECT * FROM users WHERE age>15 LIMIT 3;

-- 3.)ORDER BY CLAUSE = sort in ascending or descending order - default ASC - DESC
SELECT name , age , email ,followers FROM users ORDER BY followers DESC;
SELECT name , age , email ,followers FROM users ORDER BY followers DESC LIMIT 1; -- top 1

-- 4.)GROUP BY CLAUSE = group the rows having same values into summary values - generally used with aggregation functions to perform some function over groups
SELECT age FROM users GROUP BY age; 
SELECT age,COUNT(id) FROM users GROUP BY age;
-- SELECT name, age ,max(followers) FROM users GROUP BY age; -- throws error as you can't print that attribute that isn't used while grouping or aggregate (e.g.- name)
SELECT age ,max(followers) FROM users GROUP BY age; -- return maximum followers in each age group

-- 5.)HAVING CALUSE = used after grouping to apply condition on rows 
SELECT age ,max(followers) FROM users GROUP BY age HAVING MAX(followers)>200;

-- GENERAL ORDER OF QUERY :- SELECT column(s)->FROM table ->WHERE condition ->GROUP BY column(s)->HAVING condition-> ORDER BY column(s)(ASC/DESC)

-----------------------------------------------------------------------------------------------
--  UPDATE COMMANDS - updating existing rows 

SET SQL_SAFE_UPDATES =0;-- LET SQL PERFORM UPDATES
UPDATE users SET followers=600 WHERE age=16;
DROP TABLE post ; -- required as post table was using foreign key which restricts the deletion 
DELETE FROM users WHERE age=14; -- where clause should be used while using delete else whole table's data will be deleted
Select * from users;
 
 -- Alter table Query - used to change schema(outline or structure)-e.g- any column's datatype , rename column or table , add column , delete column or add constraint to any column
 use instagram;
 ALTER TABLE users 
 ADD COLUMN city VARCHAR(25) DEFAULT "Delhi";
 
 ALTER TABLE users DROP COLUMN age;
 ALTER TABLE users RENAME TO user;
 
 ALTER TABLE users CHANGE COLUMN followers subs INT DEFAULT 0; -- if you rename a column you have to redefine all the settings like datatype and constraints
 
 ALTER TABLE users MODIFY subs INT DEFAULT 5;

-- TRUNCATE TABLE - used to delete the whole data of a table but not the schema-irreversible query - data definition language command (drop table command - deletes the whole table with schema , it is reversible and can also be used where clause to delete specific rows - data manipulation language command) 

TRUNCATE TABLE users;