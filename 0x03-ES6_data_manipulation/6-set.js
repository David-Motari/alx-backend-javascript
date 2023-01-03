export default function setFromArray(arr) {
  if (!(Array.isArray(arr))) {
    return [];
  }
  const set1 = new Set();
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < arr.length; i++) {
    set1.add(arr[i]);
  }
  return set1;
}
