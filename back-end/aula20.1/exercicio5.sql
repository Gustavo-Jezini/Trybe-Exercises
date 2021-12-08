SELECT
ROUND(MAX(SALARY), 2) AS 'Maior salario',
ROUND(MIN(SALARY), 2) AS 'Menor salario',
ROUND(SUM(SALARY), 2) AS 'Soma dos salarios',
ROUND(AVG(SALARY), 2) AS 'Media salarial'
FROM hr.employees;