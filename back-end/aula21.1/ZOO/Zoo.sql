CREATE SCHEMA ZOO;

CREATE TABLE gerente(
  gerenteID INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(25),
  sobrenome VARCHAR(25)
);

CREATE TABLE cuidador(
  cuidadorID INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(25),
  sobrenome VARCHAR(25),
  gerenteID INT, 
  FOREIGN KEY (gerenteID) REFERENCES gerente(gerenteID)
);

CREATE TABLE animal(
  animalID INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(25),
  especie VARCHAR(25),
  sexo VARCHAR(25),
  idade INT,
  localizacao VARCHAR(100)
);

CREATE TABLE animal_cuidador (
  animalID INT,
  cuidadorID INT,
  CONSTRAINT PRIMARY KEY(animalID, cuidadorID),
  FOREIGN KEY (animalID) REFERENCES animal(animalID),
  FOREIGN KEY (cuidadorID) REFERENCES cuidador(cuidadorID)
);