const fs = require('fs');

function countStudents(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf-8').toString().split('\n');
    content = content.slice(1, content.length - 1);
    console.log(`Number of students: ${content.length}`);
    const fields = {};
    for (const row of content) {
      const student = row.split(',');
      if (!fields[student[3]]) {
        fields[student[3]] = [];
      }
      fields[student[3]].push(student[0]);
    }
    for (const field in fields) {
      if (field) {
        console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
      }
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
