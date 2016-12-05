const {expect} = require('chai');
const {calcBlockDistance} = require('../days/day1');

describe('calcBlockDistance()', () => {
  it('is a function', () => {
    expect(calcBlockDistance).to.be.a('function');
  });
  it('should return a number', () => {
    expect(calcBlockDistance()).to.be.a('number');
  });
  it('should take one arguement', () => {
    expect(calcBlockDistance.length).to.equal(1);
  });
});
