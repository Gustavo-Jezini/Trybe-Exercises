const connection = require('./connection')

const getAllBooks = async () => {
  return connection()
    .then((db) => db.collection('books').find().toArray())
    .then((books) => books.map((book) => book))

};;

const getBookById = async (id) => {
  const [bookData] = await connection.execute(
    'SELECT title FROM model_example.books WHERE id=?',
    [id]
  )

  if ( bookData.lenght === 0 ) return null;

  return bookData[0];
}

const validation = (title, authorId) => {
  if (!title || typeof title !== 'string') return false;
  if (!authorId || typeof authorId !== 'number' || ![1,2,3].includes(authorId)) return false;
  return true;
}

const addBook = async (title, authorId) => {
  connection()
    .then((db) => db.collection('books').insertOne({ title, authorId }))
}

module.exports = {
  getAllBooks,
  getBookById,
  validation,
  addBook
}