const assertEqual = require("./assertEqual")

// Implement the definition for function eqObjects which will take in two objects and returns true or false, based on a perfect match.

const eqObjects = (obj1, obj2) =>{
  let arr1  = [];
  let arr2 = [];
  for (i in obj1){
    arr1.push(Object.keys(obj1[i]))
  }
  for (j in obj2){
    arr2.push(Object.keys(obj2[j]))
  }
  if (arr1.length === arr2.length){
    return true
  }
return false
}

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };
eqObjects(shirtObject , anotherShirtObject); // => true
assertEqual(eqObjects(shirtObject , anotherShirtObject), true);


const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
eqObjects(shirtObject , longSleeveShirtObject); // => false
assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false);