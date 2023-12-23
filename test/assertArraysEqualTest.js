const assertArraysEqual = require("../assertArraysEqual")

// TEST CODE
assertArraysEqual(null,[])
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [3, 2, 1]);
assertArraysEqual([5, 6, 3], [4, 2, 1]);
assertArraysEqual([6, 3], [4, 2, 1]);
assertArraysEqual([5,4,6],[5,4,6]);