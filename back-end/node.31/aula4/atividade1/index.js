const express = require('express');
const app = express();
const http = require('http').createServer(app);

const io = require('socket.io')(http, {
  cors: {
    methods: ['GET', 'POST'],
    origin: 'http://localhost:3000'
  }
});

app.use(express.static(__dirname + '/public'));

require('./sockets/leilao')(io);

app.get('/', (_req, res) => {
  res.sendFile(__dirname + '/index.html')
});

http.listen(3000, () => {
  console.log('Pai ta on na 3000');
});