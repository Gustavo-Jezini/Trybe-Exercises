SELECT
FIRST_NAME,
LAST_NAME,
DATEDIFF(NOW(), HIRE_DATE) AS 'Time working in days'
FROM hr.employees;