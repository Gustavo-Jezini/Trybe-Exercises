USE sakila;
DELIMITER //

CREATE FUNCTION GetTotalPayments(customer_id_PARAM INT)
RETURNS INT READS SQL DATA
	BEGIN
		DECLARE payment_total INT;
		SELECT COUNT(*)
		FROM sakila.payment
        WHERE customer_id = customer_id_PARAM INTO payment_total;
        RETURN payment_total;
END //

DELIMITER ;

SELECT GetTotalPayments(2);