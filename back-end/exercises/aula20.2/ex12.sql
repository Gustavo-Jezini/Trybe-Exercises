-- Exercício 12: Faça duas buscas, uma utilizando SUBQUERY e outra utilizando INNER JOIN , que retornem o título dos filmes que arrecadaram 500 milhões ou mais, e que possuem duração maior que 110 minutos.

SELECT 
	title
FROM Pixar.Movies
WHERE 
id IN (
	SELECT movie_id
    FROM Pixar.BoxOffice
    WHERE domestic_sales + international_sales > 500000000)
AND length_minutes > 110;