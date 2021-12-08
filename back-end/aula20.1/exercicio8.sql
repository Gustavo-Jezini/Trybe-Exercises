SELECT SUM(SALARY) AS ' salario a pagar por profissao'
FROM hr.employees
GROUP BY JOB_ID
HAVING JOB_ID = 'IT_PROG';