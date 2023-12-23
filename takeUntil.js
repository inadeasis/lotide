const eqArrays = require("./eqArrays")
const assertArraysEqual = require("./assertArraysEqual")

//Implement takeUntil which will keep collecting items from a provided array until the callback provided returns a truthy value.

const takeUntil = function(array, callback) {
  let newArr = [];
  for (let item of array) {
    if (callback(item)){
      // if function is true, return array
      return newArr
    } else {
      //keep pushing until items to new array until cb function returns truthy
      newArr.push(item)
    } 
  }
  return newArr;
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);
assertArraysEqual(results1,[ 1, 2, 5, 7, 2 ])

console.log('---');


const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
assertArraysEqual(results2,[ 'I\'ve', 'been', 'to', 'Hollywood' ] )

// expected Output:
// [ 1, 2, 5, 7, 2 ]
// ---
// [ 'I\'ve', 'been', 'to', 'Hollywood' ]