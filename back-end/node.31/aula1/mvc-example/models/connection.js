const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'jezTrybe',
  password: 'jezTrybe',
  database: 'mvc_example'});

module.exports = connection;