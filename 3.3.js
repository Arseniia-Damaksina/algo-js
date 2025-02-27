// Write a program that will create a duplicate of a given array.
// Bonus: make a first version that will only do it using push(). 
// Make a second version that uses a single method call to perform the copy. (You'll have to search on MDN or Google for this one.)

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 1. with push() method;
let arrayCopy1 = [];

for (let elem of array) {
    arrayCopy1.push(elem);
}

console.log(`This is copy1: ${arrayCopy1}`);

// 2. with a spread operator;
let arrayCopy2 = [...array];
console.log(`This is copy2: ${arrayCopy2}`);

// 2. with a single method;
let arrayCopy3 = array.slice();
console.log(`This is copy3: ${arrayCopy3}`);