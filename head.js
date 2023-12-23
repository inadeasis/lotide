// A function for arrays that retrieves the first element from the array.

const head = (arr) => {
  
  //An empty array should yield undefined as its head
  if (!Array.isArray(arr) || !arr.length){
    return undefined;
  }
  return arr[0]
}

module.exports = head;