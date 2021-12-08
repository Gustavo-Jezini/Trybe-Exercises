SELECT
	C.first_name, COUNT(A.address) as 'quantidade'
FROM 
		sakila.customer C
		INNER JOIN sakila.address A
	ON C.address_id = A.address_id
WHERE C.`active` = 1
group by C.first_name
ORDER BY first_name DESC;