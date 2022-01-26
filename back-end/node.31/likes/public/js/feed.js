const socket = window.io();

const button = document.getElementById('likeIcon');
const likes = document.querySelector('#currentLikes');

button.addEventListener('click', (e) => {
  e.preventDefault();

  socket.emit('likePost');
})

socket.on('updateLikes', (count) => {
  likes.innerHTML = count;
});

const startButton = document.querySelector('#starIcon');
const starts = document.querySelector('#currentStars');
let counting = 0;

startButton.addEventListener('click', (e) => {
  e.preventDefault();

  counting += 1;
  starts.innerHTML = counting;

  socket.emit('starPost');
})

socket.on('updateStars', (countStars) => {
  document.querySelector('#currentStars').innerHTML = countStars;
});