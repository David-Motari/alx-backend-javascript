const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

const err = new TypeError('Parameters must be numbers');

describe('calculateNumberSUM', () => {
  it('asserts output using decimal numbers', () => {
    assert.strictEqual(calculateNumber('SUM', 2, 4), 6);
    assert.strictEqual(calculateNumber('SUM', 2, 3.5), 6);
    assert.strictEqual(calculateNumber('SUM', 3.5, 2), 6);
    assert.strictEqual(calculateNumber('SUM', 3.5, 2.5), 7);
    assert.strictEqual(calculateNumber('SUM', 2, 3.7), 6);
    assert.strictEqual(calculateNumber('SUM', 2, 11.5), 14);

  });
  it('assert second number rounding', () => {
    assert.strictEqual(calculateNumber('SUM', 1, 3.2), 4);
  });
  it('negative numbers', () => {
    assert.strictEqual(calculateNumber('SUM', -2, 4), 2);
    assert.strictEqual(calculateNumber('SUM', 2, -3.5), -1);
    assert.strictEqual(calculateNumber('SUM', 3.5, -2), 2);
    assert.strictEqual(calculateNumber('SUM', -3.5, 2.5), 0);
    assert.strictEqual(calculateNumber('SUM', -3.5, -2.5), -5);
  });
  it('should cast non-numbers into numbers', () => {
    assert.strictEqual(calculateNumber('SUM', true, '3'), 4);
    assert.strictEqual(calculateNumber('SUM', 1, '3.7'), 5);
    assert.strictEqual(calculateNumber('SUM', '1.2', 3.7), 5);
  });
});

describe('calculateNumberSUBTRACT', () => {
  it('asserts output using decimal numbers', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 2, 4), -2);
    assert.strictEqual(calculateNumber('SUBTRACT', 2, 3.5), -2);
    assert.strictEqual(calculateNumber('SUBTRACT', 3.5, 2), 2);
    assert.strictEqual(calculateNumber('SUBTRACT', 3.5, 2.5), 1);
    assert.strictEqual(calculateNumber('SUBTRACT', 2, 3.7), -2);
    assert.strictEqual(calculateNumber('SUBTRACT', 2, 11.5), -10);

  });
  it('assert second number rounding', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 1, 3.2), -2);
  });
  it('negative numbers', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', -2, 4), -6);
    assert.strictEqual(calculateNumber('SUBTRACT', 2, -3.5), 5);
    assert.strictEqual(calculateNumber('SUBTRACT', 3.5, -2), 6);
    assert.strictEqual(calculateNumber('SUBTRACT', -3.5, 2.5), -6);
    assert.strictEqual(calculateNumber('SUBTRACT', -3.5, -2.5), -1);
  });
  it('should cast non-numbers into numbers', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', true, '3'), -2);
    assert.strictEqual(calculateNumber('SUBTRACT', 1, '3.7'), -3);
    assert.strictEqual(calculateNumber('SUBTRACT', '1.2', 3.7), -3);
  });
});

describe('calculateNumberDIVIDE', () => {
  it('asserts output using decimal numbers', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 4, 2), 2);
    assert.strictEqual(calculateNumber('DIVIDE', 3.5, 2), 2);
    assert.strictEqual(calculateNumber('DIVIDE', 4.2, 2), 2);
    assert.strictEqual(calculateNumber('DIVIDE', 3.5, 1.5), 2);
    assert.strictEqual(calculateNumber('DIVIDE', 2, 3.7), 0.5);
    assert.strictEqual(calculateNumber('DIVIDE', 11.5, 2.3), 6);
    assert.strictEqual(calculateNumber('DIVIDE', 11.5, 0), 'Error');

  });
  it('assert second number rounding', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 6, 3.2), 2);
  });
  it('negative numbers', () => {
    assert.strictEqual(calculateNumber('DIVIDE', -2, -4), 0.5);
    assert.strictEqual(calculateNumber('DIVIDE', 2, -4.3), -0.5);
    assert.strictEqual(calculateNumber('DIVIDE', 3.5, -2), -2);
    assert.strictEqual(calculateNumber('DIVIDE', -3.5, 2.3), -1.5);
    assert.strictEqual(calculateNumber('DIVIDE', -3.5, -2.5), 1.5);
  });
  it('should cast non-numbers into numbers', () => {
    assert.strictEqual(calculateNumber('DIVIDE', true, '2'), 0.5);
    assert.strictEqual(calculateNumber('DIVIDE', 1, '3.7'), 0.25);
    assert.strictEqual(calculateNumber('DIVIDE', '1.2', 3.7), 0.25);
  });
});