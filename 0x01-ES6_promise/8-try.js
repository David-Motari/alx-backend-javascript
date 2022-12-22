export default function divideFunction(numerator, denominator) {
  if (denominator === 0) {
    throw Error('cannot divide by 0');
  } else {
    const divided = numerator / denominator;
    return divided;
  }
}
