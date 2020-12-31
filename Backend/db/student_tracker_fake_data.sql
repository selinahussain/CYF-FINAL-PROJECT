drop table if exists mentor;
drop table if exists region;
drop table if exists classes;
drop table if exists classOverview;
drop table if exists student;
drop table if exists module;
drop table if exists topic;
drop table if exists grade;



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
    subject_id SERIAL PRIMARY KEY,
    name VARCHAR(50)
);

CREATE TABLE student_subject (
    student_subject_id SERIAL PRIMARY KEY,
    student_id INT REFERENCES student(id),
    subject_id INT REFERENCES subject(subject_id)
);

CREATE TABLE topic (
    topic_id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    student_subject_id INT REFERENCES student_subject(student_subject_id)
);

CREATE TABLE grade (
    grade_id SERIAL PRIMARY KEY,
    vote INT,
    topic_id INT REFERENCES topic(topic_id)
);


CREATE TABLE users (
id SERIAL PRIMARY KEY,
name  VARCHAR(100) NOT NULL ,
email VARCHAR(100)NOT NULL,
batch VARCHAR(50),
password VARCHAR(200) NOT NULL
);



INSERT INTO mentor (name, email, password) VALUES ('Mentor', 'mentor@cyf.com', '1234');
INSERT INTO mentor (name, email, password) VALUES ('Mentor two', 'mentorTwo@cyf.com', '1234');
INSERT INTO mentor (name, email, password) VALUES ('Mentor three', 'mentorThree@cyf.com', '1234');

INSERT INTO region (name, mentor_id) VALUES ('West Midlands', 1);
INSERT INTO region (name, mentor_id) VALUES ('West Midlands', 2);

INSERT INTO cohort (name, region_id) VALUES ('WM1', 1);
INSERT INTO cohort (name, region_id) VALUES ('WM2', 2);

INSERT INTO classOverview (start_date, end_date, average, cohort_id) VALUES ('03-03-2020', '03-12-2020', 25, 1);
INSERT INTO classOverview (start_date, end_date, average, cohort_id) VALUES ('03-03-2020', '03-12-2020', 25, 2);

INSERT INTO student (name, email, github, linkedin, phone, cohort_id) VALUES ('Selina', 'selinahussain@live.com', 'selina@github', 'selinahu@linkedin', '01293847539', 1);
INSERT INTO student (name, email, github, linkedin, phone, cohort_id) VALUES ('Mursel', 'mursel@email.com', 'mursel@github', 'mursel@linkedin', '01293847539', 1);

INSERT INTO subject (name) VALUES ('HTML/CSS');
INSERT INTO subject (name) VALUES ('Javascript');

INSERT INTO student_subject (student_id, subject_id) VALUES (1, 1);
INSERT INTO student_subject (student_id, subject_id) VALUES (2, 1);

INSERT INTO topic (name, student_subject_id) VALUES ('Understand what parent and child is', 1);
INSERT INTO topic (name, student_subject_id) VALUES ('Understand what parent and child is', 2);

INSERT INTO grade (vote, topic_id) VALUES (25, 1);
INSERT INTO grade (vote, topic_id) VALUES (50, 2);

INSERT INTO users (name, email,batch, password) VALUES('Selina','selina@yahoo.com','westmidland1', '$2b$10$dmm9x4XcBFPPqz5WqTGIUeu3DqzHEHRCU/MI01Ru0ihwuAvD99UGa');
INSERT INTO users (name, email,batch, password) VALUES('Mursel','mursel@yahoo.com','westmidland1', '$2b$10$hFFPVUlRVXgLwsJ0RU8Tueg/awvz.MPD270QeecW.qCtNvX/aWat2');
INSERT INTO users (name, email,batch, password) VALUES('Osman','osman@yahoo.com','westmidland1','$2b$10$RAWB8u5qVkC2V2mD5Al1jOF9nQfMWIoY7Y1WRSZ53S.N7C0H/Fcpm');