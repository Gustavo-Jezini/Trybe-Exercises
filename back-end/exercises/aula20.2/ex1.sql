-- Exercício 1: Utilizando o INNER JOIN , encontre as vendas nacionais ( domestic_sales ) e internacionais ( international_sales ) de cada filme.

SELECT 
  movies.title,
  box.domestic_sales,
  box.international_sales
FROM Pixar.BoxOffice AS box
INNER JOIN Pixar.Movies AS movies
WHERE box.movie_id = movies.id; 