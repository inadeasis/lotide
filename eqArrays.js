const eqArrays = (actual, expected) => {

  actual = JSON.stringify(actual)
  expected = JSON.stringify(expected)

  if (actual === expected){
 
  console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`)

} else if (actual !== expected){
    console.log(`🔴🔴🔴Assertion Failed: ${actual} !== ${expected}`)
  }
};


// TEST CODE
eqArrays([1,2,3],[1,2,3]); // => true
eqArrays([1, 2, 3], [3, 2, 1]);