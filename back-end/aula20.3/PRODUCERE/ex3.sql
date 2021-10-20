USE sakila;
DELIMITER //

CREATE PROCEDURE VerifyCustomerActivit(
	IN emailCustomer VARCHAR(200),
    OUT response BOOL
)
BEGIN
	SET response = (
		SELECT `active`
        FROM sakila.customer
        WHERE email = emailCustomer);
END //

DELIMITER ;

SELECT @ActiveStatus;
CALL VerifyCustomerActivit('MARY.SMITH@sakilacustomer.org', @ActiveStatus);
SELECT @ActiveStatus;