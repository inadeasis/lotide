const assertArraysEqual = require("./assertArraysEqual")

// Implement without which will return a subset of a given array, removing unwanted elements. This function should take in a source array and a itemsToRemove array. It should return a new array with only those elements from source that are not present in the itemsToRemove array.

const without = (source, itemsToRemove) =>{
  let newArr = [];
  for (let i = 0; i<source.length; i++){
      if(!itemsToRemove.includes(source[i])){
        newArr.push(source[i])
      }
    }
    return newArr;
  }
  
without([1, 2, 3], [1])
without(["1", "2", "3"], [1, 2, "3"])

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
assertArraysEqual(without(words, ["hello"]), [ "world", "lighthouse"])


