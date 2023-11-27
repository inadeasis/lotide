const assertEqual = (actual, expected) => {
  if (actual == expected){
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
// Create a function flatten which will take in an array containing elements including nested arrays of elements, and return a "flattened" version of the array.

const flatten = (array) => {
  let flattened = array.flat();
  console.log(flattened)
  return flattened
}
flatten([1, 2, [3, 4], 5, [6]])

const words = ["hello", ["world"], "lighthouse"];
flatten(words);
assertEqual(flatten(words), ["hello", "world", "lighthouse"]);