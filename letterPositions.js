const assertArraysEqual = (actual, expected) =>{
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${(actual)} === ${(expected)}`);
  }else{
    console.log(`🔴🔴🔴 Assertion Failed: ${(actual)} !== ${(expected)}`);
  }
};

const eqArrays = (actual, expected) =>{
    if (actual.length != expected.length) {
        return false;
    }
        for (let i = 0; i < actual.length; i++) {
            if (actual[i] !== expected[i]) {
                return false;
            } 
        }
        return true;
    }


const letterPositions = (sentence) => {
  const results = {};
  
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== ' ') {
      if (!results[sentence[i]]) {
        results[sentence[i]] = [i];
      } else {
        results[sentence[i]].push(i);
      }
    }
  }
  
  return results;
};

console.log(letterPositions("hello"))