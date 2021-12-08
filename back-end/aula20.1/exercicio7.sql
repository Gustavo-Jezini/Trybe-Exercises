SELECT SUM(SALARY) AS 'Media salarial por profissao'
FROM hr.employees
GROUP BY JOB_ID;