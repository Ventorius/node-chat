const path = require('path');
const express = require('express');
const socketIO = require('socket.io');
const http = require('http');

const publicPath = path.join(__dirname, '../public');

const port = process.env.PORT || 3000;

var app = express();

var server = http.createServer(app);
var io = socketIO(server);


app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New user connected');

socket.emit('newMessage',{
  from: 'S.Basznianin',
  text: 'hey',
  createdAt: '24.12'
});

socket.on('createMessage', (newMessage) => {
  console.log('new message', newMessage);
})

  socket.on('disconnect', () => {
    console.log('User was disconnected');
  })
})

server.listen(port, () => {
  console.log(`Server started on ${port}`);
})
