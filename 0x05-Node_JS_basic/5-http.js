const http = require('http');
const countStudents = require('./3-read_file_async');

const args = process.argv.slice(2);
const DATABASE = args[0];

// create a server object:
const app = http.createServer(async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain'); // set content type in header
  if (req.url === '/') {
    res.write('Hello Holberton School!'); // write a response to the client
  }
  if (req.url === '/students') {
    res.write('This is the list of our students\n');
    try {
      const info = await countStudents(DATABASE);
      res.end(`${info.join('\n')}`); // return list of students
    } catch (error) {
      res.end(error.message); // handle error
    }
  }
  res.end(); // end the response
}).listen(1245, '127.0.0.1'); // the server object listens on port 1245

module.exports = app;
