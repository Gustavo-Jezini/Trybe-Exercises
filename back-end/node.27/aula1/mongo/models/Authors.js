const connection = require('./connection')


const addBook = async (title, authorId) => {
  const query = 'INSERT INTO model_example.books (title, author_id) VALUES (?, ?)';
  connection.execute(query, [title, authorId]);
};

module.exports = {
  addBook
}