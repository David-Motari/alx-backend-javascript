export default function cleanSet(set, startString) {
  const cSet = [];
  if (typeof startString !== 'string' || startString === '') {
    return '';
  }
  for (const item of set) {
    if (typeof item === 'string' && item.startsWith(startString)) {
      cSet.push(item.slice(startString.length));
    }
  }
  return cSet.join('-');
}
