/* eslint-disable no-param-reassign */
export default function updateStudentGradeByCity(students, city, newGrades) {
  if (Array.isArray(students) === false || Array.isArray(newGrades) === false) {
    return [];
  }
  return students.filter((student) => student.location === city).map((student) => {
    student.grade = 'N/A';
    for (const grade of newGrades) {
      if (grade.studentId === student.id) {
        student.grade = grade.grade;
      }
    }
    return student;
  });
}
