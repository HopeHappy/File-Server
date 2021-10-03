const net = require('net');
const fs = require('fs');

const server = net.createServer();

server.on('connection', (client) => {
  console.log('New client connected!');

  client.setEncoding('utf8');

  client.on('data', (data) => {
    const file = `./${data}`;
    fs.readFile(file, 'utf8', (error, data) => {
      if (error) {
        console.log('Failed to read file');
        return;
      }

      client.write(data);
    });
  });

  client.on('close', () => {
    console.log('Client disconnected!');
    process.exit();
  });
});

server.listen(3000, () => {
  console.log('Server listening on port 3000!');
});