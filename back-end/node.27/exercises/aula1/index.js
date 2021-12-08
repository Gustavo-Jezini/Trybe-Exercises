const express = require('express');
const { addUser, showUser, isValid } = require('./models/user');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

app.post('/user', async (req, res) => {
  const { firstName, lastName, email, password } = req.body;


  // if (!isValid({ firstName, lastName, email, password })) {
  //   return res.status(400).json({ message: 'Dados inválidos' });
  // }

  await addUser({ firstName, lastName, email, password });

  res.status(201).json({ message : 'Usuario cadastrado com sucesso' })
});

app.get('/users', async (_req, res) => {
  const users =  await showUser();

  res.status(200).json(users);
})

app.listen(3001, () => console.log('Ouvindo na porta 3001'));