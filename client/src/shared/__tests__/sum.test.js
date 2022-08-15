const sum = require('../sum');

describe('test sum function', () => {
  it('should sum to the expected value', () => {
    let a = 2;
    let b = 3;
    expect(sum(3,2)).toEqual(a + b);
  })
})