const assert = require('chai').assert;
const assertEqual = require("../assertEqual")
const eqArrays = require("../eqArrays")

// TEST CODE
describe("#eqArrays", () => {
  it("it returns true === true", () => {
    assert.strictEqual(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true));
  });
  it("it returns false === false", () => {
    assert.strictEqual(assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false));
  });
  it("it returns false === false", () => {
    assert.strictEqual(assertEqual(eqArrays([5, 6, 3], [4, 2, 1]),false));
  });
    it("it returns false === false", () => {
    assert.strictEqual(assertEqual(eqArrays([6, 3], [4, 2, 1]),false));
  });
    it("it returns true === true", () => {
    assert.strictEqual(assertEqual(eqArrays([5,4,6],[5,4,6]),true));
  });
});