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

// Implement middle which will take in an array and return the middle-most element(s) of the given array.
const middle = (array) => {
  let middle = []

  if ((array.length === 1) || (array.length === 2)){
    middle = middle  
    
  } else if (array.length %2 === 0) {
    let value = Math.floor(array.length / 2)
    let secondVal = array[value]
    let firstVal = array[value - 1]
    middle.push(firstVal) 
    middle.push(secondVal)

  } else {
    
    let value = Math.floor(array.length / 2)
    value = array[value]
    middle.push(value) 
    
  }
  return middle
  
}


//TEST
middle([1]) // => []
middle([1, 2]) // => []
middle([1, 2, 3]) // => [2]
middle([1, 2, 3, 4, 5]) // => [3]
middle([1, 2, 3, 4]) // => [2, 3]
middle([1, 2, 3, 4, 5, 6]) // => [3, 4]

assertArraysEqual(middle([1, 2]),[])
assertArraysEqual(middle([1, 2, 3, 4, 5]),[3])
assertArraysEqual(middle([1, 2, 3, 4, 5,6]),[3,4])