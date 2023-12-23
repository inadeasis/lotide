// Implement middle which will take in an array and return the middle-most element(s) of the given array.
const middle = (array) => {
  let middle = []

  if ((array.length === 1) || (array.length === 2)){
    return middle
  } else if (array.length %2 === 0) {
    middle.push(array[Math.floor(array.length / 2)-1], array[Math.floor(array.length / 2)])

  } else {
    
    let value = Math.floor(array.length / 2)
    value = array[value]
    middle.push(value) 
    
  }
  return middle
  
}

console.log(middle([1])) // => []
console.log(middle([1, 2])) // => []
console.log(middle([1, 2, 3])) // => [2]
console.log(middle([1, 2, 3, 4, 5]))// => [3]
console.log(middle([1, 2, 3, 4])) // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]

module.exports = middle;
