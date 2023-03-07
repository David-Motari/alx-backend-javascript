const expect = require('chai').expect
const calculateNumber = require('./2-calcul_chai.js');

describe('calculateNumberSUM', () => {
  it('asserts output using decimal numbers', () => {
    expect(calculateNumber('SUM', 2, 4)).to.equal(6);
    expect(calculateNumber('SUM', 2, 3.5)).to.equal(6)
    expect(calculateNumber('SUM', 3.5, 2)).to.equal(6);
    expect(calculateNumber('SUM', 3.5, 2.5)).to.equal(7);
    expect(calculateNumber('SUM', 2, 3.7)).to.equal(6);
    expect(calculateNumber('SUM', 2, 11.5)).to.equal(14);

  });
  it('assert second number rounding', () => {
    expect(calculateNumber('SUM', 1, 3.2)).to.equal(4);
  });
  it('negative numbers', () => {
    expect(calculateNumber('SUM', -2, 4)).to.equal(2);
    expect(calculateNumber('SUM', 2, -3.5)).to.equal(-1);
    expect(calculateNumber('SUM', 3.5, -2)).to.equal(2);
    expect(calculateNumber('SUM', -3.5, 2.5)).to.equal(0);
    expect(calculateNumber('SUM', -3.5, -2.5)).to.equal(-5);
  });
  it('should cast non-numbers into numbers', () => {
    expect(calculateNumber('SUM', true, '3')).to.equal(4);
    expect(calculateNumber('SUM', 1, '3.7')).to.equal(5);
    expect(calculateNumber('SUM', '1.2', 3.7)).to.equal(5);
  });
});

describe('calculateNumberSUBTRACT', () => {
  it('asserts output using decimal numbers', () => {
    expect(calculateNumber('SUBTRACT', 2, 4)).to.equal(-2);
    expect(calculateNumber('SUBTRACT', 2, 3.5)).to.equal(-2);
    expect(calculateNumber('SUBTRACT', 3.5, 2)).to.equal(2);
    expect(calculateNumber('SUBTRACT', 3.5, 2.5)).to.equal(1);
    expect(calculateNumber('SUBTRACT', 2, 3.7)).to.equal(-2);
    expect(calculateNumber('SUBTRACT', 2, 11.5)).to.equal(-10);

  });
  it('assert second number rounding', () => {
    expect(calculateNumber('SUBTRACT', 1, 3.2)).to.equal(-2);
  });
  it('negative numbers', () => {
    expect(calculateNumber('SUBTRACT', -2, 4)).to.equal(-6);
    expect(calculateNumber('SUBTRACT', 2, -3.5)).to.equal(5);
    expect(calculateNumber('SUBTRACT', 3.5, -2)).to.equal(6);
    expect(calculateNumber('SUBTRACT', -3.5, 2.5)).to.equal(-6);
    expect(calculateNumber('SUBTRACT', -3.5, -2.5)).to.equal(-1);
  });
  it('should cast non-numbers into numbers', () => {
    expect(calculateNumber('SUBTRACT', true, '3')).to.equal(-2);
    expect(calculateNumber('SUBTRACT', 1, '3.7')).to.equal(-3);
    expect(calculateNumber('SUBTRACT', '1.2', 3.7)).to.equal(-3);
  });
});

describe('calculateNumberDIVIDE', () => {
  it('asserts output using decimal numbers', () => {
    expect(calculateNumber('DIVIDE', 4, 2)).to.equal(2);
    expect(calculateNumber('DIVIDE', 3.5, 2)).to.equal(2);
    expect(calculateNumber('DIVIDE', 4.2, 2)).to.equal(2);
    expect(calculateNumber('DIVIDE', 3.5, 1.5)).to.equal(2);
    expect(calculateNumber('DIVIDE', 2, 3.7)).to.equal(0.5);
    expect(calculateNumber('DIVIDE', 11.5, 2.3)).to.equal(6);
    expect(calculateNumber('DIVIDE', 11.5, 0)).to.equal('Error');

  });
  it('assert second number rounding', () => {
    expect(calculateNumber('DIVIDE', 6, 3.2)).to.equal(2);
  });
  it('negative numbers', () => {
    expect(calculateNumber('DIVIDE', -2, -4)).to.equal(0.5);
    expect(calculateNumber('DIVIDE', 2, -4.3)).to.equal(-0.5);
    expect(calculateNumber('DIVIDE', 3.5, -2)).to.equal(-2);
    expect(calculateNumber('DIVIDE', -3.5, 2.3)).to.equal(-1.5);
    expect(calculateNumber('DIVIDE', -3.5, -2.5)).to.equal(1.5);
  });
  it('should cast non-numbers into numbers', () => {
    expect(calculateNumber('DIVIDE', true, '2')).to.equal(0.5);
    expect(calculateNumber('DIVIDE', 1, '3.7')).to.equal(0.25);
    expect(calculateNumber('DIVIDE', '1.2', 3.7)).to.equal(0.25);
  });
});