// const assertArraysEqual = require("../assertArraysEqual")
// const middle = require("../middle")

// //TEST
// assertArraysEqual(middle([1, 2]),[])
// assertArraysEqual(middle([1, 2, 3, 4, 5]),[3])
// assertArraysEqual(middle([1, 2, 3, 4, 5,6]),[3,4])

const assert = require('chai').assert;
const middle   = require('../middle');


describe("#middle", () => {
  it("returns [] for [1,2]", () => {
    assert.strictEqual(middle([1,2]), []);
  });
     it("returns [3] for [1, 2, 3, 4, 5]", () => {
    assert.strictEqual(middle([1, 2, 3, 4, 5]), [3]); 
   });
});