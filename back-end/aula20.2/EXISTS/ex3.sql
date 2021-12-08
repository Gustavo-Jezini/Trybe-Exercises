-- Usando a tabela carsales e customers , exiba apenas o nome dos clientes que ainda não compraram um carro.

SELECT `Name` FROM hotel.Customers AS Cust
WHERE NOT EXISTS (
	SELECT CustomerID FROM hotel.CarSales 
    WHERE Cust.CustomerID = CustomerID
)