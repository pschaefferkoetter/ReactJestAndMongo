const sum = require("../sum");

describe("test sum function", () => {
  it("should sum to the expected value", () => {
    const a = 2;
    const b = 3;
    expect(sum(3, 2)).toEqual(a + b);
  });
});
