export default function getStudentIdsSum(students) {
  return students.reduce((initValue, addingValue) => initValue + addingValue.id, 0);
}
