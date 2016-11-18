var socket = io();

socket.on('connect', () => {
  console.log('Connected to server');

  socket.emit('createMessage', {
    from: 'me',
    text: 'hey 2',
  });

})

socket.on('disconnect', () => {
  console.log('Disconnected from server');
})

socket.on('newMessage', (message) => {
  console.log('new message', message);
});