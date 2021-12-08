-- Crie um TRIGGER que, a cada atualização feita na tabela carros , defina o valor da coluna data_atualizacao para o momento do ocorrido e a acao para 'ATUALIZAÇÃO' .

USE betrybe_automoveis;
SELECT * FROM carros;

DELIMITER //

CREATE TRIGGER tr_UP_carro
	BEFORE UPDATE ON carros
    FOR EACH ROW
BEGIN 
	SET 
     NEW.data_atualizacao = NOW();
END //

DELIMITER ;

UPDATE betrybe_automoveis.carros
SET preco = 1000
WHERE id_carro = 1;
