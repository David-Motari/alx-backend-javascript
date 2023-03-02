const express = require('express');
const countStudents = require('./3-read_file_async');

const args = process.argv.slice(2);

const app = express();
const port = 1245;

const DATABASE = args[0];

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  const msg = 'This is the list of our students\n';
  try {
    const info = await countStudents(DATABASE);
    res.send(`${msg}${info.join('\n')}`); // return list of students
  } catch (error) {
    res.send(`${msg}${error.message}`); // handle error
  }
});
app.listen(port, '127.0.0.1');

module.exports = app;
