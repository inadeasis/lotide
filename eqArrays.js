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

// TEST CODE
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true);
assertEqual(eqArrays([5, 6, 3], [4, 2, 1]),false);
assertEqual(eqArrays([6, 3], [4, 2, 1]),false);
assertEqual(eqArrays([5,4,6],[5,4,6]),false);