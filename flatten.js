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
flatten([1, 2, [3, 4], 5, [6]])

const words = ["hello", ["world"], "lighthouse"];
flatten(words);
assertArraysEqual(flatten(words), ["hello", "world", "lighthouse"]);