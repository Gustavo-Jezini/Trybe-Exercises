SELECT
AVG(SALARY) AS 'media_salarial',
COUNT(*) AS 'number_of_employees'
FROM hr.employees
GROUP BY DEPARTMENT_ID
HAVING number_of_employees > 10;