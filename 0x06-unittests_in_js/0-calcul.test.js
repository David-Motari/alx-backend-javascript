const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

const err = new TypeError('Parameters must be numbers');

describe('calculateNumber', () => {
  it('asserts output using decimal numbers', () => {
    assert.strictEqual(calculateNumber(2, 4), 6);
    assert.strictEqual(calculateNumber(2, 3.5), 6);
    assert.strictEqual(calculateNumber(3.5, 2), 6);
    assert.strictEqual(calculateNumber(3.5, 2.5), 7);
  });
  it('negative numbers', () => {
    assert.strictEqual(calculateNumber(-2, 4), 2);
    assert.strictEqual(calculateNumber(2, -3.5), -1);
    assert.strictEqual(calculateNumber(3.5, -2), 2);
    assert.strictEqual(calculateNumber(-3.5, 2.5), 0);
    assert.strictEqual(calculateNumber(-3.5, -2.5), -5);
  });
  it('should cast non-numbers into numbers', () => {
    assert.strictEqual(calculateNumber(true, '3'), 4);
    assert.strictEqual(calculateNumber(1, '3.7'), 5);
    assert.strictEqual(calculateNumber('1.2', 3.7), 5);
  });
});