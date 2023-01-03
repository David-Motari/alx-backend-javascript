export default function getListStudentIds(arr) {
  if (!(Array.isArray(arr))) {
    return [];
  }
  return arr.map((items) => items.id);
}
