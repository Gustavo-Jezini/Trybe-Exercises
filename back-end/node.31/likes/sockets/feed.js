module.exports = (io) => io.on('connection', (socket) => {
  let count = 0;
  let currentStars= 0;

  socket.on('likePost', (data) => {
    count += 1;


    io.emit('updateLikes', count);
  });

  socket.on('starPost', () => {
    currentStars += 1;

    socket.broadcast.emit('updateStars', currentStars)
  })
})