USE sakila;
DELIMITER //

CREATE PROCEDURE ShowMoviesFromCategory(IN categoria VARCHAR(50))
BEGIN
	SELECT 
		f.title,
        f.film_id,
        fc.category_id,
        c.`name`
	FROM film AS f
    INNER JOIN film_category AS fc ON f.film_id = fc.film_id
    INNER JOIN category AS c ON c.category_id = fc.category_id
    WHERE c.`name` = categoria;
END //

DELIMITER ;

CALL ShowMoviesFromCategory('action');