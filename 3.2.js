// Write a program that will calculate the average value of a given array.

const array1 = [1, 2, 3, 4, 5];
const array2 = [100, 101, 102];

const sum1 = array1.reduce((acc, value) => acc + value, 0);
const sum2 = array2.reduce((acc, value) => acc + value, 0);

const average1 = sum1 / array1.length;
const average2 = sum2 / array2.length;

console.log(`The average of array1 is: ${average1}`);
console.log(`The average of array2 is: ${average2}`);