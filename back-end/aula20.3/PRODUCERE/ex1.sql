USE sakila;
DELIMITER //

CREATE PROCEDURE MostrarAtoresMaisPopulares()
BEGIN
	SELECT actor_id, COUNT(*) AS 'Quantidade_de_filmes'
    FROM film_actor
    GROUP BY actor_id
    ORDER BY Quantidade_de_filmes DESC
    LIMIT 10;
END //

DELIMITER ;

CALL MostrarAtoresMaisPopulares();