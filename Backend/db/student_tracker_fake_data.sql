drop table if exists mentor;
drop table if exists region;
drop table if exists classes;
drop table if exists classOverview;
drop table if exists student;
drop table if exists module;
drop table if exists topic;
drop table if exists grade;
drop table if exists subject;
drop table if exists users;



CREATE TABLE mentor (
   id SERIAL PRIMARY KEY,
   name VARCHAR(50) NOT NULL,
   email VARCHAR(50),
   password VARCHAR(50)
);
 
CREATE TABLE region (
    region_id SERIAl PRIMARY KEY,
    name VARCHAR(50),
    mentor_id INT REFERENCES mentor(id)
);

CREATE TABLE cohort (
    cohort_id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    region_id INT REFERENCES region(region_id)
);

CREATE TABLE classOverview (
    overview_id SERIAL PRIMARY KEY,
    start_date date,
    end_date date,
    average INT,
    cohort_id INT REFERENCES cohort(cohort_id)
);

CREATE TABLE student (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    email VARCHAR(50),
    github VARCHAR(50),
    linkedin VARCHAR(50),
    phone INT,
    cohort_id INT REFERENCES cohort(cohort_id)
);

CREATE TABLE subject (
   name  VARCHAR(50) PRIMARY KEY
);

CREATE TABLE student_subject (
    student_subject_id SERIAL PRIMARY KEY,
    student_id INT REFERENCES student(id),
    subject_name VARCHAR REFERENCES subject(name)
);

CREATE TABLE topic (
    topic_id SERIAL PRIMARY KEY,
    name VARCHAR(200),
    subject_name VARCHAR REFERENCES subject(name),
    student_subject_id INT REFERENCES student_subject(student_subject_id)
);


CREATE TABLE users (
id SERIAL PRIMARY KEY,
name  VARCHAR(100) NOT NULL ,
email VARCHAR(100)NOT NULL,
password VARCHAR(200) NOT NULL
);


CREATE TABLE grade (
    grade_id SERIAL PRIMARY KEY,
    vote INT,
    topic_id INT REFERENCES topic(topic_id),
    users_id INT REFERENCES users(id)
);





INSERT INTO mentor (name, email, password) VALUES ('Mentor', 'mentor@cyf.com', '1234');
INSERT INTO mentor (name, email, password) VALUES ('Mentor two', 'mentorTwo@cyf.com', '1234');
INSERT INTO mentor (name, email, password) VALUES ('Mentor three', 'mentorThree@cyf.com', '1234');

INSERT INTO region (name, mentor_id) VALUES ('Cape Town', 1);
INSERT INTO region (name, mentor_id) VALUES ('London', 1);
INSERT INTO region (name, mentor_id) VALUES ('Nort West', 1);
INSERT INTO region (name, mentor_id) VALUES ('Roma', 1);
INSERT INTO region (name, mentor_id) VALUES ('Scothland', 1);
INSERT INTO region (name, mentor_id) VALUES ('West Midlands', 1);


INSERT INTO cohort (name, region_id) VALUES ('West Midlands Class 1', 1);
INSERT INTO cohort (name, region_id) VALUES ('West Midlands Class 2', 1);


INSERT INTO classOverview (start_date, end_date, average, cohort_id) VALUES ('03-03-2020', '03-12-2020', 25, 1);
INSERT INTO classOverview (start_date, end_date, average, cohort_id) VALUES ('03-03-2020', '03-12-2020', 25, 2);

INSERT INTO student (name, email, github, linkedin, phone, cohort_id) VALUES ('Selina', 'selinahussain@live.com', 'selina@github', 'selinahu@linkedin', '01293847539', 1);
INSERT INTO student (name, email, github, linkedin, phone, cohort_id) VALUES ('Mursel', 'mursel@email.com', 'mursel@github', 'mursel@linkedin', '01293847539', 1);

INSERT INTO subject (name) VALUES ('HTML_CSS');
INSERT INTO subject (name) VALUES ('Javascript');
INSERT INTO subject (name) VALUES ('Git_GitHub');
INSERT INTO subject (name) VALUES ('REACTJS');
INSERT INTO subject (name) VALUES ('NodeJS');
INSERT INTO subject (name) VALUES ('PostgreSQL');


INSERT INTO student_subject (student_id, subject_name) VALUES (1, 'HTML_CSS');
INSERT INTO student_subject (student_id, subject_name) VALUES (2, 'REACTJS');


INSERT INTO topic (name, subject_name, student_subject_id) VALUES ('Understand what parent and child is','HTML_CSS', 1);
INSERT INTO topic (name, subject_name , student_subject_id) VALUES ('Can create and link a stylesheet','HTML_CSS', 2);
INSERT INTO topic (name, subject_name , student_subject_id) VALUES ('Understand what semantic tags are and how to use them','HTML_CSS', 2);
INSERT INTO topic (name, subject_name , student_subject_id) VALUES ('Be able to include a form in a web page','HTML_CSS', 2);
INSERT INTO topic (name, subject_name , student_subject_id) VALUES ('Be able to create a button','HTML_CSS', 2);
INSERT INTO topic (name, subject_name , student_subject_id) VALUES ('Understand what a selector is in CSS','HTML_CSS', 2);
INSERT INTO topic (name, subject_name , student_subject_id) VALUES ('Understand the difference between a tag, class and ID','HTML_CSS', 2);
INSERT INTO topic (name, subject_name , student_subject_id) VALUES ('Understand what prefixes are','HTML_CSS', 2);
INSERT INTO topic (name, subject_name , student_subject_id) VALUES ('Understand what pseudo classes are','HTML_CSS', 2);
INSERT INTO topic (name, subject_name , student_subject_id) VALUES ('Be able to create a comment in HTML and CSS','HTML_CSS', 2);


INSERT INTO topic (name, subject_name , student_subject_id) VALUES ('Be able to link a Javascript file in your project','Javascript', 2);
INSERT INTO topic (name, subject_name , student_subject_id) VALUES ('Be able to do a console.log()','Javascript', 2);
INSERT INTO topic (name, subject_name , student_subject_id) VALUES ('Understand what a console.log is used for','Javascript', 2);
INSERT INTO topic (name, subject_name , student_subject_id) VALUES ('Be able to assign a variable with const and let','Javascript', 2);
INSERT INTO topic (name, subject_name , student_subject_id) VALUES ('Understand the difference between const and let','Javascript', 2);
INSERT INTO topic (name, subject_name , student_subject_id) VALUES ('Be able to write a function','Javascript', 2);
INSERT INTO topic (name, subject_name , student_subject_id) VALUES ('Be able to use concatentation','Javascript', 2);
INSERT INTO topic (name, subject_name , student_subject_id) VALUES ('Understand what a return statement does','Javascript', 2);
INSERT INTO topic (name, subject_name , student_subject_id) VALUES ('Be able to use a callback function','Javascript', 2);
INSERT INTO topic (name, subject_name , student_subject_id) VALUES ('Understand what a conditional is','Javascript', 2);


INSERT INTO topic (name, subject_name , student_subject_id) VALUES ('Can initialize a repo for a new project','Git_GitHub', 2);
INSERT INTO topic (name, subject_name , student_subject_id) VALUES ('Can use a .gitignore file','Git_GitHub', 2);
INSERT INTO topic (name, subject_name , student_subject_id) VALUES ('Can make a pull request on GitHub','Git_GitHub', 2);
INSERT INTO topic (name, subject_name , student_subject_id) VALUES ('Know how to handle a merge conflict','Git_GitHub', 2);
INSERT INTO topic (name, subject_name , student_subject_id) VALUES ('Can use the command git add correctly','Git_GitHub', 2);
INSERT INTO topic (name, subject_name , student_subject_id) VALUES ('Can use the command git commitcorrectly','Git_GitHub', 2);
INSERT INTO topic (name, subject_name , student_subject_id) VALUES ('Can use the command  git push correctly','Git_GitHub', 2);


INSERT INTO topic (name, subject_name , student_subject_id) VALUES ('Be able to create a basic express server','NodeJS', 1);
INSERT INTO topic (name, subject_name , student_subject_id) VALUES ('Understand what NPM is and how to use it','NodeJS', 1);
INSERT INTO topic (name, subject_name , student_subject_id) VALUES ('Be able to install third party libraries with NPM','NodeJS', 1);
INSERT INTO topic (name, subject_name , student_subject_id) VALUES ('Be able to use express to create a basic API','NodeJS', 1);
INSERT INTO topic (name, subject_name , student_subject_id) VALUES ('Understand what a CRUD application does','NodeJS', 1);
INSERT INTO topic (name, subject_name , student_subject_id) VALUES ('Be able to implement a GET request','NodeJS', 1);
INSERT INTO topic (name, subject_name , student_subject_id) VALUES ('Be able to implement a POST request','NodeJS', 1);
INSERT INTO topic (name, subject_name , student_subject_id) VALUES ('Be able to implement a DELETE request','NodeJS', 1);


INSERT INTO topic (name, subject_name , student_subject_id) VALUES ('Understand what SQL is and what it is used for','PostgreSQL', 1);
INSERT INTO topic (name, subject_name , student_subject_id) VALUES ('Understand what table, rows and columns refer to','PostgreSQL', 1);
INSERT INTO topic (name, subject_name , student_subject_id) VALUES ('Be able to create a database','PostgreSQL', 1);
INSERT INTO topic (name, subject_name , student_subject_id) VALUES ('Be able to create a table','PostgreSQL', 1);
INSERT INTO topic (name, subject_name , student_subject_id) VALUES ('Be able to insert data into a table','PostgreSQL', 1);
INSERT INTO topic (name, subject_name , student_subject_id) VALUES ('Be able to retrieve data from a table','PostgreSQL', 1);
INSERT INTO topic (name, subject_name , student_subject_id) VALUES ('Understand the different types of data','PostgreSQL', 1);
INSERT INTO topic (name, subject_name , student_subject_id) VALUES ('Be able to use conditionals in SQL statements','PostgreSQL', 1);
INSERT INTO topic (name, subject_name , student_subject_id) VALUES ('Be able to drop/delete tables','PostgreSQL', 1);
INSERT INTO topic (name, subject_name , student_subject_id) VALUES ('Be able to update data in a table','PostgreSQL', 1);


INSERT INTO topic (name, subject_name , student_subject_id) VALUES ('Understand the difference between class and functional components','REACTJS', 1);
INSERT INTO topic (name, subject_name , student_subject_id) VALUES ('Be able to create a React application with create-react-app','REACTJS', 1);
INSERT INTO topic (name, subject_name , student_subject_id) VALUES ('Understand what JSX is and how its different to HTML and Javascript','REACTJS', 1);
INSERT INTO topic (name, subject_name , student_subject_id) VALUES ('"Be able to apply a class in JSX','REACTJS', 1);
INSERT INTO topic (name, subject_name , student_subject_id) VALUES ('Be able to pass props','REACTJS', 1);
INSERT INTO topic (name, subject_name , student_subject_id) VALUES ('Be able to handle events in React','REACTJS', 1);
INSERT INTO topic (name, subject_name , student_subject_id) VALUES ('Be able to use ternary operators in React','REACTJS', 1);
INSERT INTO topic (name, subject_name , student_subject_id) VALUES ('Be able to use conditional rendering','REACTJS', 1);
INSERT INTO topic (name, subject_name , student_subject_id) VALUES ('Understand what state is and how to use it','REACTJS', 1);
INSERT INTO topic (name, subject_name , student_subject_id) VALUES ('Be able to update state','REACTJS', 1);
INSERT INTO topic (name, subject_name , student_subject_id) VALUES ('Understand what hooks are','REACTJS', 1);


INSERT INTO users (name, email, password) VALUES('Selina','selina@yahoo.com', '$2b$10$dmm9x4XcBFPPqz5WqTGIUeu3DqzHEHRCU/MI01Ru0ihwuAvD99UGa');
INSERT INTO users (name, email,password) VALUES('Mursel','mursel@yahoo.com','$2b$10$hFFPVUlRVXgLwsJ0RU8Tueg/awvz.MPD270QeecW.qCtNvX/aWat2');
INSERT INTO users (name, email,password) VALUES('Osman','osman@yahoo.com','$2b$10$RAWB8u5qVkC2V2mD5Al1jOF9nQfMWIoY7Y1WRSZ53S.N7C0H/Fcpm');



