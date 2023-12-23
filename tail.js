// A function which returns the "tail" of an array: everything except for the first item (head) of the provided array.

const tail = (arr) => {
  
  // An array with only one element & an empty arrays hould yield an empty 
  if (!Array.isArray(arr) || !arr.length) {
    return [];
  }
  const newArr = arr.slice(1)
  return newArr
}

module.exports = tail;