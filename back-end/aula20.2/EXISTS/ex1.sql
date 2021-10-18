-- Usando o EXISTS na tabela books_lent e books , exiba o id e título dos livros que ainda não foram emprestados.

SELECT Id, Title FROM hotel.Books AS B
WHERE NOT EXISTS (
	SELECT book_id FROM hotel.Books_Lent
    WHERE B.Id = book_id
);
