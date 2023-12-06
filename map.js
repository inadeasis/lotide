const assertArraysEqual = (actual, expected) =>{
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${(actual)} === ${(expected)}`);
  }else{
    console.log(`🔴🔴🔴 Assertion Failed: ${(actual)} !== ${(expected)}`);
  }
};

const eqArrays = (actual, expected) =>{
    if (actual.length != expected.length) {
        return false;
    }
        for (let i = 0; i < actual.length; i++) {
            if (actual[i] !== expected[i]) {
                return false;
            } 
        }
        return true;
    }


const pets = ["Arya", "Luna", "Kiyoshi", "Jasper", "Rocky"];

const map = (array, callback) =>{
  const results = [];
  // for (let item of array) {
  //   console.log('item BEFORE: ', item);
  //   console.log('item AFTER: ', callback(item));
  //   console.log('---');
  // }
  // return results;
    for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const results1 = map(pets, pet => pet[0]);
console.log(results1)