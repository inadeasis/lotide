const assert = require('chai').assert;
const tail   = require('../tail');

const words = ["Yo Yo", "Lighthouse", "Labs"];

describe("#tail", () => {
  it("returns 2 for ['Lighthouse', 'Labs']", () => {
    assert.strictEqual(tail(words).length, 2);
  });
     it("returns Lighthouse", () => {
    assert.strictEqual(tail(words)[0], 'Lighthouse'); 
   });
   it("returns undefined", () => { 
    assert.strictEqual(tail(undefined)[0], undefined); 
  }); 
    it("returns undefined", () => { 
      assert.strictEqual(tail(null)[0], undefined); 
  });
});