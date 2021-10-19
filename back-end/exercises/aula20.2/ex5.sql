-- Utilizando o RIGHT JOIN , faça uma busca que retorne todos os dados dos filmes, mesmo os que não estão em cartaz e, adicionalmente, os dados dos cinemas que possuem estes filmes em cartaz. Retorne os nomes dos cinemas em ordem alfabética.

SELECT 
	m.title,
	m.director,
    m.`year`,
    m.length_minutes,
    t.`name`,
    t.location
FROM Pixar.Theater t
RIGHT JOIN Pixar.Movies  m ON m.theater_id = t.id 
ORDER BY t.`name`;