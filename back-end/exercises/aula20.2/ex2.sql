-- Exercício 2: Utilizando o INNER JOIN , faça uma busca que retorne o número de vendas para cada filme que possui um número maior de vendas internacionais ( international_sales ) do que vendas nacionais ( domestic_sales ).

SELECT 
	movies.title,
	box.domestic_sales + box.international_sales AS 'numero_vendas'
FROM Pixar.BoxOffice AS box
INNER JOIN Pixar.Movies AS movies
WHERE box.movie_id = movies.id
AND box.domestic_sales < box.international_sales;