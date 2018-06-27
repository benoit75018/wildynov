DROP DATABASE IF EXISTS projectynov;
CREATE DATABASE projectynov;
CREATE USER
IF NOT EXISTS 'server'@'localhost';

GRANT ALL PRIVILEGES ON projectynov.* To 'server'@'localhost' IDENTIFIED BY 'mysql';
USE projectynov;
CREATE TABLE profile
(
        id Int
        Auto_increment  NOT NULL,
        name       Varchar
        (255) ,
        first_name Varchar
        (255)  ,
        year       Date,
        campus     Varchar
        (255) ,
        password   Varchar
        (255) ,
        email      Varchar
        (255) UNIQUE ,
        skill      Integer,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ,
	      PRIMARY KEY
        (id)
)ENGINE=InnoDB;


CREATE TABLE project(
        id_profile           Int NULL,
        id                   Int NULL ,
        title                Varchar (255) ,
        deadline_project     TIMESTAMP DEFAULT CURRENT_TIMESTAMP ,
        deadline_application TIMESTAMP DEFAULT CURRENT_TIMESTAMP ,
        description          Varchar (255) ,
        state                Bool ,
        created_at           TIMESTAMP DEFAULT CURRENT_TIMESTAMP ,
        updated              TIMESTAMP DEFAULT CURRENT_TIMESTAMP ,
        name                 Varchar (255) ,
        first_name           Varchar (255) ,
        year                 Date ,
        campus               Varchar (255) ,
        password             Varchar (255) ,
        email                Varchar (255) UNIQUE,
        skill                Integer ,
        created_at_profile   TIMESTAMP DEFAULT CURRENT_TIMESTAMP ,
        updated_at           TIMESTAMP DEFAULT CURRENT_TIMESTAMP
	      ,PRIMARY KEY (id_profile,id)
	      ,FOREIGN KEY (id_profile) REFERENCES profile(id)
)ENGINE=InnoDB;

