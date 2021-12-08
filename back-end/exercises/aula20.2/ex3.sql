-- Utilizando o INNER JOIN , faça uma busca que retorne os filmes e sua avaliação ( rating ) em ordem decrescente.

SELECT movie.title, box.rating
FROM Pixar.BoxOffice AS box
INNER JOIN Pixar.Movies AS movie
WHERE box.movie_id = movie.id
ORDER BY box.rating DESC;