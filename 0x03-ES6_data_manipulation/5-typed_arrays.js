export default function createInt8TypedArray(length, position, value) {
  if (position >= length || position < 0) {
    throw new Error('Position outside range');
  }
  const buff = new ArrayBuffer(length);
  const intView = new Int8Array(buff, 0, length);
  intView.set([value], position);
  return new DataView(buff);
}
