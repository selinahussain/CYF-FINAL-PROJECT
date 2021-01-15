drop table if exists region;
drop table if exists classes;
drop table if exists topic;
drop table if exists grade;
drop table if exists subject;
drop table if exists users;


 
CREATE TABLE region (
    region_id SERIAl PRIMARY KEY,
    name VARCHAR(50)
);

CREATE TABLE cohort (
    cohort_id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    region_id INT REFERENCES region(region_id)
);



CREATE TABLE subject (
   name  VARCHAR(50) PRIMARY KEY
);


CREATE TABLE topic (
    topic_id SERIAL PRIMARY KEY,
    name VARCHAR(200),
    subject_name VARCHAR REFERENCES subject(name)
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


INSERT INTO region (name) VALUES ('Cape Town');
INSERT INTO region (name) VALUES ('London');
INSERT INTO region (name) VALUES ('North West');
INSERT INTO region (name) VALUES ('Roma');
INSERT INTO region (name) VALUES ('Scotland');
INSERT INTO region (name) VALUES ('West Midlands');


INSERT INTO cohort (name, region_id) VALUES ('West Midlands Class 1', 1);
INSERT INTO cohort (name, region_id) VALUES ('West Midlands Class 2', 1);


INSERT INTO subject (name) VALUES ('HTML_CSS');
INSERT INTO subject (name) VALUES ('Javascript');
INSERT INTO subject (name) VALUES ('Git_GitHub');
INSERT INTO subject (name) VALUES ('REACTJS');
INSERT INTO subject (name) VALUES ('NodeJS');
INSERT INTO subject (name) VALUES ('PostgreSQL');



INSERT INTO topic (name, subject_name) VALUES ('Understand what parent and child is','HTML_CSS');
INSERT INTO topic (name, subject_name) VALUES ('Can create and link a stylesheet','HTML_CSS');
INSERT INTO topic (name, subject_name) VALUES ('Understand what semantic tags are and how to use them','HTML_CSS');
INSERT INTO topic (name, subject_name) VALUES ('Be able to include a form in a web page','HTML_CSS');
INSERT INTO topic (name, subject_name) VALUES ('Be able to create a button','HTML_CSS');
INSERT INTO topic (name, subject_name) VALUES ('Understand what a selector is in CSS','HTML_CSS');
INSERT INTO topic (name, subject_name) VALUES ('Understand the difference between a tag, class and ID','HTML_CSS');
INSERT INTO topic (name, subject_name) VALUES ('Understand what prefixes are','HTML_CSS');
INSERT INTO topic (name, subject_name) VALUES ('Understand what pseudo classes are','HTML_CSS');
INSERT INTO topic (name, subject_name) VALUES ('Be able to create a comment in HTML and CSS','HTML_CSS');


INSERT INTO topic (name, subject_name) VALUES ('Be able to link a Javascript file in your project','Javascript');
INSERT INTO topic (name, subject_name) VALUES ('Be able to do a console.log()','Javascript');
INSERT INTO topic (name, subject_name) VALUES ('Understand what a console.log is used for','Javascript');
INSERT INTO topic (name, subject_name) VALUES ('Be able to assign a variable with const and let','Javascript');
INSERT INTO topic (name, subject_name) VALUES ('Understand the difference between const and let','Javascript');
INSERT INTO topic (name, subject_name) VALUES ('Be able to write a function','Javascript');
INSERT INTO topic (name, subject_name) VALUES ('Be able to use concatentation','Javascript');
INSERT INTO topic (name, subject_name) VALUES ('Understand what a return statement does','Javascript');
INSERT INTO topic (name, subject_name) VALUES ('Be able to use a callback function','Javascript');
INSERT INTO topic (name, subject_name) VALUES ('Understand what a conditional is','Javascript');


INSERT INTO topic (name, subject_name) VALUES ('Can initialize a repo for a new project','Git_GitHub');
INSERT INTO topic (name, subject_name) VALUES ('Can use a .gitignore file','Git_GitHub');
INSERT INTO topic (name, subject_name) VALUES ('Can make a pull request on GitHub','Git_GitHub');
INSERT INTO topic (name, subject_name) VALUES ('Know how to handle a merge conflict','Git_GitHub');
INSERT INTO topic (name, subject_name) VALUES ('Can use the command git add correctly','Git_GitHub');
INSERT INTO topic (name, subject_name) VALUES ('Can use the command git commitcorrectly','Git_GitHub');
INSERT INTO topic (name, subject_name) VALUES ('Can use the command  git push correctly','Git_GitHub');


INSERT INTO topic (name, subject_name) VALUES ('Be able to create a basic express server','NodeJS');
INSERT INTO topic (name, subject_name) VALUES ('Understand what NPM is and how to use it','NodeJS');
INSERT INTO topic (name, subject_name) VALUES ('Be able to install third party libraries with NPM','NodeJS');
INSERT INTO topic (name, subject_name) VALUES ('Be able to use express to create a basic API','NodeJS');
INSERT INTO topic (name, subject_name) VALUES ('Understand what a CRUD application does','NodeJS');
INSERT INTO topic (name, subject_name) VALUES ('Be able to implement a GET request','NodeJS');
INSERT INTO topic (name, subject_name) VALUES ('Be able to implement a POST request','NodeJS');
INSERT INTO topic (name, subject_name) VALUES ('Be able to implement a DELETE request','NodeJS');


INSERT INTO topic (name, subject_name) VALUES ('Understand what SQL is and what it is used for','PostgreSQL');
INSERT INTO topic (name, subject_name) VALUES ('Understand what table, rows and columns refer to','PostgreSQL');
INSERT INTO topic (name, subject_name) VALUES ('Be able to create a database','PostgreSQL');
INSERT INTO topic (name, subject_name) VALUES ('Be able to create a table','PostgreSQL');
INSERT INTO topic (name, subject_name) VALUES ('Be able to insert data into a table','PostgreSQL');
INSERT INTO topic (name, subject_name) VALUES ('Be able to retrieve data from a table','PostgreSQL');
INSERT INTO topic (name, subject_name) VALUES ('Understand the different types of data','PostgreSQL');
INSERT INTO topic (name, subject_name) VALUES ('Be able to use conditionals in SQL statements','PostgreSQL');
INSERT INTO topic (name, subject_name) VALUES ('Be able to drop/delete tables','PostgreSQL');
INSERT INTO topic (name, subject_name) VALUES ('Be able to update data in a table','PostgreSQL');


INSERT INTO topic (name, subject_name) VALUES ('Understand the difference between class and functional components','REACTJS');
INSERT INTO topic (name, subject_name) VALUES ('Be able to create a React application with create-react-app','REACTJS');
INSERT INTO topic (name, subject_name) VALUES ('Understand what JSX is and how its different to HTML and Javascript','REACTJS');
INSERT INTO topic (name, subject_name) VALUES ('"Be able to apply a class in JSX','REACTJS');
INSERT INTO topic (name, subject_name) VALUES ('Be able to pass props','REACTJS');
INSERT INTO topic (name, subject_name) VALUES ('Be able to handle events in React','REACTJS');
INSERT INTO topic (name, subject_name) VALUES ('Be able to use ternary operators in React','REACTJS');
INSERT INTO topic (name, subject_name) VALUES ('Be able to use conditional rendering','REACTJS');
INSERT INTO topic (name, subject_name) VALUES ('Understand what state is and how to use it','REACTJS');
INSERT INTO topic (name, subject_name) VALUES ('Be able to update state','REACTJS');
INSERT INTO topic (name, subject_name) VALUES ('Understand what hooks are','REACTJS');


INSERT INTO users (name, email, password) VALUES('Mentor','mentor@gmail.com', '$2b$10$h5h0vlMiM.sdQQ43V2NB4.cEJVGu9zptzOQjfRn24MX3iXZMbyrd.');
