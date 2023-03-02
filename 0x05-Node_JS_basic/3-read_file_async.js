const fs = require('fs');

function countStudents(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(Error('Cannot load the database'));
        return;
      }
      let msg;
      const respos = [];
      const content = data.toString().split('\n');
      let students = content.filter((item) => item);
      students = students.map((item) => item.split(','));
      const numbStudents = students.length ? students.length - 1 : 0;
      msg = `Number of students: ${numbStudents}`;
      console.log(msg);
      respos.push(msg);

      const fields = {};
      for (const student in students) {
        if (student !== 0) {
          if (!fields[students[student][3]]) {
            fields[students[student][3]] = [];
          }
          fields[students[student][3]].push(students[student][0]);
        }
      }
      delete fields.field;

      for (const key of Object.keys(fields)) {
        msg = `Number of students in ${key}: ${
          fields[key].length
        }. List: ${fields[key].join(', ')}`;
        console.log(msg);
        respos.push(msg);
      }
      resolve(respos);
    });
  });
}

module.exports = countStudents;
