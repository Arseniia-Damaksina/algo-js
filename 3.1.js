// Write a program that will add all the elements of an array.

const array1 = [1, 2, 3, 4, 5];
const array2 = [100, 101, 102];

// 1. for...of loop
let sum1 = 0;
for(elem of array1) {
    sum1 += elem;
}
console.log(`The array1 sum is ${sum1}`);

// 2. reduce array method
let sum2 = array2.reduce((acc, value) => acc + value, 0);
console.log(`The array2 sum is ${sum2}`);