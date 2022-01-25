const socket = io();

socket.on('chat-message', data => {
  console.log('New user');
  console.log(data);
});