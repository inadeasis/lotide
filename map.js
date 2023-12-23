const assertArraysEqual = require('./assertArraysEqual')

const pets = ["Arya", "Luna", "Kiyoshi", "Jasper", "Rocky"];

const map = (array, callback) =>{
  const results = [];
    for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const expected_output = ['A', 'L', 'K', 'J', 'R'];
assertArraysEqual(map(pets, pet => pet[0]), expected_output);