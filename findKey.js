const assertEqual = (actual, expected) => {
  if (actual === expected){
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`)
  } else {
    console.log(`🔴🔴🔴Assertion Failed: ${actual} !== ${expected}`)
  }
};

//Implement the function findKey which takes in an object and a callback. It should scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.

const findKey = function(object, cb) {
  for (let key in object) {
    if (cb(object[key])) {
      return key;
    }
  }
  return undefined;
};

const test1 = {
  "Blue Hill": { stars: 1},
  "Akaleri":   { stars: 3},
  "noma":      { stars: 2},
  "elBulli":   { stars: 3},
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

const result1 = findKey(test1, x => x.stars === 3); // => "Akaleri"
const result2 = findKey(test1, x => x.stars === 1); //=> "elBulli"

assertEqual(result1, "Akaleri");
assertEqual(result2, "noma");