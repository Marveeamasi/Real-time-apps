// Server-side (Node.js with Socket.IO)
const io = require("socket.io")(3000);

io.on('connection', (socket) => {
  console.log('User connected: ', socket.id);

  // Handle user joining a room
  socket.on('join-room', (roomId) => {
    socket.join(roomId);
    io.to(roomId).emit('notification', 'A new user has joined the room!');
  });

  // Send real-time messages
  socket.emit('message', 'Welcome to the chat!');
});

// Client-side (HTML/JS)
const socket = io('http://localhost:3000');

// Listen for a message
socket.on('message', (data) => {
  console.log(data); // "Welcome to the chat!"
});

// Join a specific room
socket.emit('join-room', 'room-123');
