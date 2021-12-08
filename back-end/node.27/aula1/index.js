const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

const Author = require('./models/Author');
const Books = require('./models/Books');

app.use(bodyParser.json())

app.get('/books/:id', async (req, res) => {
  const { id } = req.params;

  const book = await Books.getBookById(id);

  if(!book) return res.status(404).json({ message: 'Not found!'});

  res.status(200).json(book);
})

app.get('/books', async (_req, res) => {
  const books = await Books.getAllBooks();

  res.status(200).json(books);
})

app.post('/books', async (req, res) => {
  const { title, authorId } = req.body;

  if (!Books.validation(title, authorId)) {
    return res.status(400).json({ message: 'Dados inválidos' });
}

  await Books.addBook(title, authorId);

  res.status(201).json({ message: 'Livro adicionado com sucesso'})
})



app.get('/authors', async (_req, res) => {
  const authors = await Author.getAll();

  res.status(200).json(authors);
});

app.get('/authors/:id', async (req, res) => {
  const { id } = req.params;

  const author = await Author.findById(id);

  if (!author) return res.status(404).json({ message: 'Not found' });

  res.status(200).json(author);
});

app.listen(port, () => console.log('Exemplo didatico'))
