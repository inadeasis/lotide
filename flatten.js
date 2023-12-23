const assertArraysEqual = require('./assertArraysEqual')

// Create a function flatten which will take in an array containing elements including nested arrays of elements, and return a "flattened" version of the array.

const flatten = (array) => {
  const flattened = [];

  for (let element of array) {
    if (Array.isArray(element)) {
      for (let newElement of element) {
        flattened.push(newElement);
      }
    } else {
      flattened.push(element);
    }
  }

  return flattened;
}

// TEST CODE

console.log(flatten([1, 2, [3, 4], 5, [6]])); // should print [1, 2, 3, 4, 5, 6]
console.log(flatten(["hello", ["world"], "lighthouse"])); // should print ["hello", "world", "lighthouse"]

const words = ["hello", ["world"], "lighthouse"];
flatten(words);
assertArraysEqual(flatten(words), ["hello", "world", "lighthouse"]);