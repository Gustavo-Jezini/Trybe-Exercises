-- Exercício 10: Utilizando o INNER JOIN , selecione todas as informações dos filmes com avaliação maior que 8 e que estejam em cartaz.

SELECT 
	m.title,
    m.director,
    m.`year`,
    m.length_minutes
FROM Pixar.Movies AS m
INNER JOIN Pixar.BoxOffice AS b ON m.id = b.movie_id
WHERE b.rating > 8 
AND EXISTS (
	SELECT 
		*
	FROM Pixar.Theater AS t
	WHERE t.id = m.theater_id);
    