const express = require('express');
const bodyParser = require('body-parser');
const cepControllers = require('./controllers/cepControllers');
const erroMiddleware = require('./middleware/error');

const app = express();

app.use(bodyParser.json());

const PORT = 3000;

app.get('/ping', (_req, res) => {

  res.status(200).json({ message: "pong!" });
});

app.get('/cep/:cep', cepControllers.findAddressByCep);
app.post('/cep', cepControllers.create)

app.use(erroMiddleware)

app.listen(PORT, () => console.log('Ouvindo na porta 3000'));