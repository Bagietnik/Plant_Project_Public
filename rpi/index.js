const aedes = require('aedes')();
const server = require('net').createServer(aedes.handle);
const port = 1883;

// Handle client connections
aedes.on('client', function(client) {
  console.log('Client connected:', client.id);
});

// Handle client disconnections
aedes.on('clientDisconnect', function(client) {
  console.log('Client disconnected:', client.id);
});

// Handle incoming messages
aedes.on('publish', function(packet, client) {
  console.log('Received message:', packet.payload.toString(), 'on topic:', packet.topic);
});

// Start the server and listen for incoming connections
server.listen(port, function() {
  console.log('MQTT broker started and listening on port', port);
});
