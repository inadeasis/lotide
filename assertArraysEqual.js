const eqArrays = require('./eqArrays')
// Implement assertArraysEqual which will take in two arrays and console.log an appropriate message to the console.

const assertArraysEqual = (actual, expected) =>{
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${(actual)} === ${(expected)}`);
  }else{
    console.log(`🔴🔴🔴 Assertion Failed: ${(actual)} !== ${(expected)}`);
  }
};

module.exports = assertArraysEqual;