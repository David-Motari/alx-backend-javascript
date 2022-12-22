export default function guardrail(mathFunction) {
  const arry = [];
  let outcome;
  try {
    outcome = mathFunction();
  } catch (e) {
    outcome = e.toString();
  }
  arry.push(outcome);
  arry.push('Guardrail was processed');

  return arry;
}
