-- Usando o EXISTS na tabela books_lent e books , exiba o id e título dos livros estão atualmente emprestados e que contêm a palavra "lost" no título.


SELECT Id, Title FROM hotel.Books AS B
WHERE EXISTS (
	SELECT book_id FROM hotel.Books_Lent
    WHERE B.Id = book_id AND B.Title LIKE '%lost%'
);