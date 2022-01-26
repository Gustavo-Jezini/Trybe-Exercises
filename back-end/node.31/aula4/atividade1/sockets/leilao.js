module.exports = (io) => io.on('connection', (socket) => {
  socket.on('darLance', currentValue => {
    const value = parseFloat(currentValue);
    if (value + 5 > 100) {
      io.emit('disableButton');
    }
    const newValue = value + 5;
    io.emit('novoLance', newValue);
  })
})