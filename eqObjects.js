const assertEqual = require("./assertEqual")

// Implement the definition for function eqObjects which will take in two objects and returns true or false, based on a perfect match.

const eqObjects = (obj1, obj2) =>{

  // if the lengths do not equal, return false
  if (Object.keys(obj1 || {}).length !== Object.keys(obj2 || {}).length) {
    return false;
  }

  for (const key in obj1) { 
    // if both are arrays, then pass to eqArrays
    if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
      if (!eqArrays(obj1[key] && !object2[key])){
        return false
      }
    } else if (obj1[key] !== obj2[key]) {
      return false
    }
  }
  return true
};

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };
eqObjects(shirtObject , anotherShirtObject); // => true
assertEqual(eqObjects(shirtObject , anotherShirtObject), true);


const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
eqObjects(shirtObject , longSleeveShirtObject); // => false
assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false);

module.exports = eqObjects;