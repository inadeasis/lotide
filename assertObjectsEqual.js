const assertEqual = (actual, expected) => {
  if (actual === expected){
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`)
  } else {
    console.log(`🔴🔴🔴Assertion Failed: ${actual} !== ${expected}`)
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

// Implement the definition for function eqObjects which will take in two objects and returns true or false, based on a perfect match.

const eqObjects = (obj1, obj2) =>{
  let arr1  = [];
  let arr2 = [];
  for (i in obj1){
    arr1.push(Object.keys(obj1[i]))
  }
  for (j in obj2){
    arr2.push(Object.keys(obj2[j]))
  }
  if (arr1.length === arr2.length){
    return true
  }
return false
}

// Implement assertObjectsEqual which will take in two objects and console.log an appropriate message to the console.

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  console.log(`Example label: ${inspect(actual)}`);

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
assertEqual(eqObjects(pets , petObj), true);
assertObjectsEqual(assertEqual(eqObjects(pets , petObj), false), false)
