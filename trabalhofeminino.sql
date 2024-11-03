CREATE DATABASE IF NOT EXISTS trabalhofeminino;


USE trabalhofeminino;


CREATE TABLE pesquisadores (
   id INT AUTO_INCREMENT PRIMARY KEY,      
   nome VARCHAR(50) NOT NULL,              
   sobrenome VARCHAR(100) NOT NULL,        
   email VARCHAR(50) NOT NULL UNIQUE,      
   paragrafo TEXT NOT NULL                 
);

