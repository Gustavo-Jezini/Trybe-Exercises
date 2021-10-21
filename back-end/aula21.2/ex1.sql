CREATE TABLE funcionario(
  Funcinario_id INT PRIMARY KEY AUTO_INCREMENT,
  Nome VARCHAR(25),
  Sobrenome VARCHAR(25),
  info_id INT NOT NULL,
  contato_id INT NOT NULL,
  FOREIGN KEY (contato_id) REFERENCES Contato(contato_id),
  FOREIGN KEY (info_id) REFERENCES Informacoes(info_id)
);

CREATE TABLE Contato(
  contato_id INT PRIMARY KEY AUTO_INCREMENT,
  email VARCHAR(100) NOT NULL,
  telefone VARCHAR(20)
);

CREATE TABLE Informacoes(
  info_id INT PRIMARY KEY AUTO_INCREMENT,
  dataCadastro DATE,
  setor_1 VARCHAR(20),
  setor_2 VARCHAR(20)
);

INSERT INTO Informacoes(dataCadastro, setor_1, setor_2)
VALUES
  ('2020-05-05 08:50:25', 'Administração', 'Vendas'),
  ('2020-02-05', 'Operacional', ''),
  ('2020-05-05 10:55:35', 'Estratégico', 'Vendas'),
  ('2020-05-05 11:45:40', 'Marketing', '');

INSERT INTO Contato(email, telefone)
VALUES
  ('jo@gmail.com', '(35)998552-1445'),
  ('andre1990@gmail.com', '(47)99522-4996'),
  ('cindy@outlook.com', '(33)99855-4669'),
  ('fernandamendes@yahoo.com', '(33)99200-1556');

INSERT INTO funcionario(info_id, contato_id,Nome, Sobrenome)
VALUES
  (1, 1, 'Joseph', 'Rodrigues'),
  (2, 2, 'André', 'Freeman'),
  (3, 3, 'Cíntia', 'Duval'),
  (4, 4, 'Fernanda', 'Mendes');