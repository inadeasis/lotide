const assertEqual = (actual, expected) => {
  if (actual === expected){
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`)
  } else {
    console.log(`🔴🔴🔴Assertion Failed: ${actual} !== ${expected}`)
  }
};

const countLetters = (sentence) =>{
  let result = {}
    for(let letter of sentence){
      if(result[letter]){
        result[letter] += 1
        } else {
          result[letter] = 1
        }
    } 
  console.log(result)
  return result
}

countLetters("Hello, this is my test")
countLetters("test number two")
