// Write a program that will display the minimum and maximum elements of a given array.

const array = [185, 2354552, 3, 4892, -965, 4556, -7, 0, 28, 2220];

const minOfArray = Math.min(...array);
const maxOfArray = Math.max(...array);

console.log(`Min element of the array is: ${minOfArray}`);
console.log(`Max element of the array is: ${maxOfArray}`);