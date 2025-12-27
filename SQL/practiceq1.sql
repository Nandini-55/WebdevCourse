CREATE DATABASE if not exists college;
use college;
create table teacher (
    id int primary key,
    name varchar(50),
    subject varchar(50),
    salary int
);

insert into teacher  (id ,name , subject , salary ) values (23,"ajay","math",50000),
(47,"bharat","english",60000),
(18,"chetan","chemistry",45000),
(9,"divya","physics",75000);

select * from teacher;
-- q:
-- Select teachers whose salary is more than 55K
select name , salary from teacher where salary>55000;
-- Rename the salary column of teacher table to ctc
alter table teacher change column salary ctc int ;
alter table teacher change column  ctc salary int ;
-- Update salary of all teachers by giving them an increment of 25%
set sql_safe_updates=0;
Update teacher set salary = salary+(salary*0.25);
-- Add a new column for teachers called city. The default city should be "Gurgaon"
Alter table teacher add column city varchar(50) default "gurgaon";
-- Delete the salary column for teacher table
alter table teacher drop column salary;

-- creating student table 
create table student  (
roll_no int primary key ,
name varchar(50),
city varchar(50),
marks int 
);

Insert into student (roll_no ,name , city , marks)  values (110,"adam","Delhi",76),(108,"bob","Mumbai",65),(124,"casey","Pune",94),(112,"duke","Pune",80);

-- Select all students who scored 75+
Select name , marks from student where marks>75;
-- Find names of all cities where students are from
Select distinct city from student;
-- Find the maximum marks of students from each city
select city,max(marks) from student group by city;
-- Find the average of the class
select avg(marks) from student;
-- Add a new column grade, assign grade such that :
-- marks > 80, grade = O
-- marks 70-80, grade = A
-- marks 60-70, grade = B
Alter table student add column grade varchar(2);
set sql_safe_updates=0;
update student set grade ="O" where marks>=80 ;
update student set grade ="A" where marks>=70 and marks<80 ;
update student set grade ="B" where marks>=60 and marks<70 ;
select * from student;
