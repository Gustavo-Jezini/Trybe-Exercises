USE sakila;
DELIMITER //

CREATE FUNCTION FindFilmNameByInventory(id INT)
RETURNS VARCHAR(500) READS SQL DATA
	BEGIN
		DECLARE film_name VARCHAR(100);
        SELECT f.title 
        FROM sakila.inventory AS i
        INNER JOIN sakila.film AS f ON f.film_id = i.film_id
		WHERE i.inventory_id = id INTO film_name;
        RETURN film_name;
END //
DELIMITER ;

SELECT FindFilmNameByInventory(2);