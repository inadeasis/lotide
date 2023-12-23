const assertEqual = require("../assertEqual")
const eqArrays = require("../eqArrays")

// TEST CODE
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true);
assertEqual(eqArrays([5, 6, 3], [4, 2, 1]),false);
assertEqual(eqArrays([6, 3], [4, 2, 1]),false);
assertEqual(eqArrays([5,4,6],[5,4,6]),false);