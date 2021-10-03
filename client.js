const net = require('net');

const readFile = function(localFile) {
  
  const conn = net.createConnection({
    host: 'localhost',
    port: 3000
  });

  conn.on('connect', () => {
    console.log('Connected!');
    conn.write(localFile);
  });
  
  conn.on('data', (data) => {
    console.log(data);
    conn.end();
  });
  
  conn.setEncoding('utf8');
};

const localFile = process.argv[2];
readFile(localFile);