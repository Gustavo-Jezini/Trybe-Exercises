-- Utilizando o EXISTS , selecione o nome e localização dos cinemas que não possuem filmes em cartaz.

SELECT
	t.`name`, t.location
FROM 
	Pixar.Theater AS t
WHERE 
	NOT EXISTS (
	SELECT
		*
	FROM Pixar.Movies AS m
    WHERE m.theater_id = t.id
)