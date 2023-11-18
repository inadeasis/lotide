const assertEqual = (actual, expected) => {
  if (actual === expected){
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`)
  } else {
    console.log(`🔴🔴🔴Assertion Failed: ${actual} !== ${expected}`)
  }
};

const tail = (arr) => {
  const newArr = arr.slice(1)
  return newArr
}

// TEST CODE
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(tail.length, 1); // original array should still have 3 elements!
assertEqual(tail(words)[0], "Lighthouse");
assertEqual(tail(words)[1], "Labs")