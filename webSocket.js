// WebSocket Client-side
const socket = new WebSocket('ws://example.com/socket');

// Listen for messages from the server
socket.onmessage = function(event) {
  console.log('New notification: ', event.data);
};

// Send data to the server
socket.send(JSON.stringify({ message: "Hello Server" }));
