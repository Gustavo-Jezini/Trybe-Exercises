const express = require('express');
const { Books } = require('./models');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  Books.findAll()
    .then(dados => {
      res.status(200).json(dados)
    })
    .catch((e) => {
      console.log(e.message);
      res.status(500).json({ message: 'Algo deu errado!!!' });
    })
})

app.get('/:id', (req, res) => {
  const { id } = req.params;
  Books.findByPk(id)
    .then(dados => {
      res.status(200).json(dados)
    })
    .catch((e) => {
      console.log(e.message);
      res.status(500).json({ message: 'Algo deu errado!!!' });
    })
});

app.post('/', async (req, res) => {
  try {
    const { title, author, pageQuantity = 0 } = req.body;

    const book = await Books.create({
      title,
      author,
      pageQuantity,
    })

    res.status(201);
    res.json(book);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado!!' })
  }
})

app.post('/:id', async (req, res) => {
  
  try {
    const { id } = req.params;
    const { title, author, pageQuantity = 0 } = req.body;

    const book = await Books.update({
      title,
      author,
      pageQuantity,
    },
    {
      where: { id }
    })

    res.status(200);
    res.json(book);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado!!' })
  }
})

app.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const bookToDelete = await Book.findByPk(id);
    await bookToDelete.destroy();

    res.status(200);
    res.json(bookToDelete);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
})

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`O pai ta on na porta ${PORT}`);
})