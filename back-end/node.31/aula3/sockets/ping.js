module.exports = (io) => {
  io.on('connection', (socket) => {

    socket.emit('ola', 'Funcionou?');

    socket.on('ping', () => {
      console.log(`${socket.id} emitiu um ping!`);
      io.emit('pong', `${socket.id} enviou um ping!`); // essa linha envia um aviso para o cliente que o ping chegou.
    });
  });
};