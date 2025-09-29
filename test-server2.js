const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Node.js server is working!\n');
});

// Listen on all interfaces
server.listen(8080, '0.0.0.0', () => {
  console.log('Server running at http://0.0.0.0:8080/');
  console.log('Try: http://localhost:8080/');
});

server.on('error', (err) => {
  console.error('Server error:', err);
});