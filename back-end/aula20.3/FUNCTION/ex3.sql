USE sakila;
DELIMITER //

CREATE FUNCTION CountFilmsByCategory(categoria VARCHAR(100))
RETURNS INT READS SQL DATA
	BEGIN 
		DECLARE film_quantity INT;
			SELECT count(*)
			FROM sakila.film f
			INNER JOIN sakila.film_category fc ON f.film_id = fc.film_id
			INNER JOIN sakila.category c ON c.category_id = fc.category_id
			WHERE c.`name` = categoria INTO film_quantity;
        RETURN film_quantity;
END //
DELIMITER ;

SELECT CountFilmsByCategory('Horror');