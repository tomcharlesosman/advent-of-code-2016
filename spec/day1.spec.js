const {expect} = require('chai');
const {calcBlockDistance} = require('../days/day1');

describe('calcBlockDistance()', () => {
  it('is a function', () => {
    expect(calcBlockDistance).to.be.a('function');
  });
});