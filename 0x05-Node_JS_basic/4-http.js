const http = require('http');

// create a server object:
const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain'); // set content type in header
  res.write('Hello Holberton School!'); // write a response to the client
  res.end(); // end the response
}).listen(1245, '127.0.0.1'); // the server object listens on port 1245

module.exports = app;
