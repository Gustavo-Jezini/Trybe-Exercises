const socket = window.io();

document.querySelector('#botaoLance')
  .addEventListener('click', (e) => {
    e.preventDefault();
    const valorAtual = document.querySelector('#productPrice').innerHTML;

    socket.emit('darLance', valorAtual);
});

socket.on('disableButton', () => {
  document.querySelector('#productPrice').disbable = true;
})

socket.on('novoLance', novoValor => {
  document.querySelector('#productPrice').innerHTML = novoValor;
})