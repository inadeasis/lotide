const assertEqual = require("./assertEqual")
const eqObjects = require("./eqObjects")

// Implement assertObjectsEqual which will take in two objects and console.log an appropriate message to the console.

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }

};

const pets = { 
  dog: "Arya",
  cat: "Luna",
  hamster: "Gigi"
}

const petObj = {
  color: "white",
  size: "small",
  age: 1
}

eqObjects(pets , petObj); // => true
assertEqual(eqObjects(pets , petObj), false);
assertObjectsEqual(assertEqual(eqObjects(pets , petObj), false), false)
