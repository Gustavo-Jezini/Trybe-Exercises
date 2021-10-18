SELECT FA.actor_id, A.first_name, FA.film_id, F.title
FROM 
	sakila.film F
INNER JOIN 
	sakila.film_actor FA ON F.film_id = FA.film_id
INNER JOIN 
	sakila.actor A ON FA.actor_id = A.actor_id
;
