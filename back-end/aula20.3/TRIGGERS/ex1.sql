-- Crie um TRIGGER que, a cada nova inserção feita na tabela carros , defina o valor da coluna data_atualizacao para o momento do ocorrido, a acao para 'INSERÇÃO' e a coluna disponivel_em_estoque para 1 .

USE betrybe_automoveis;
SELECT * FROM carros;

DELIMITER //

CREATE TRIGGER tr_ins_carro 
	BEFORE INSERT ON carros
    FOR EACH ROW
BEGIN 
	SET 
     NEW.data_atualizacao = NOW(),
     NEW.acao = 'INSERÇÃO',
     NEW.disponivel_em_estoque = 1;
END //

DELIMITER ;
    
INSERT INTO carros(preco)
VALUES (999.99);