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

// Implement assertArraysEqual which will take in two arrays and console.log an appropriate message to the console.

const assertArraysEqual = (actual, expected) =>{
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${(actual)} === ${(expected)}`);
  }else{
    console.log(`🔴🔴🔴 Assertion Failed: ${(actual)} !== ${(expected)}`);
  }
};

// TEST CODE
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [3, 2, 1]);
assertArraysEqual([5, 6, 3], [4, 2, 1]);
assertArraysEqual([6, 3], [4, 2, 1]);
assertArraysEqual([5,4,6],[5,4,6]);


// Implement without which will return a subset of a given array, removing unwanted elements. This function should take in a source array and a itemsToRemove array. It should return a new array with only those elements from source that are not present in the itemsToRemove array.

const without = (source, itemsToRemove) =>{
  let newArr = [];
  for (let i = 0; i<source.length; i++){
    newArr = source.filter(number => number !== itemsToRemove[i])
    } 
    console.log(newArr)
    return newArr
  }
  
without([1, 2, 3], [1])
without(["1", "2", "3"], [1, 2, "3"])

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);


