const eqArrays = (actual, expected) =>{
  if (Array.isArray(actual)){
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
}

module.exports = eqArrays;