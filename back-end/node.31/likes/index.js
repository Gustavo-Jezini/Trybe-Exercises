const express = require('express');
const app = express();
const http = require('http').createServer(app);

const io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:3000', // url aceita pelo cors
    methods: ['GET', 'POST'], // Métodos aceitos pela url
  }});


app.use(express.static(__dirname + '/public'));

require('./sockets/feed')(io);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
})

http.listen(3000, () => console.log('O pai ta on na 3000'));
