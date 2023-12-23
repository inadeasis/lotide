const eqArrays = require('./eqArrays')

// A function which takes in two arrays and console.log an appropriate message to the console.

const assertArraysEqual = (actual, expected) =>{
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }else{
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};
assertArraysEqual(null,[])

module.exports = assertArraysEqual;