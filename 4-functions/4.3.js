// By reusing the function rand10() created in Exercise 2, 
// write a function named multiRand(n) that returns an array 
// of n numbers between 1 and 10. 
// You should not modify anything in rand10() to achieve this.
// Write a documentation for the multiRand(n) function.
// Use that function to create a program that will ask the number of 
// random numbers to generate then display that same number of random numbers.
const prompt = require("prompt-sync")();

const rand10 = () => {
    const randomNum = Math.ceil(Math.random() * 10);
    return randomNum;
}

/**
 * Generates an array of n random integers between 1 and 10.
 *
 * @param {number} n - The number of random integers to generate.
 * @returns {number[]} An array containing n random integers between 1 and 10.
 *
 * @example
 * const randomNumbers = multiRand(5);
 * console.log(randomNumbers); // Outputs: [3, 7, 1, 9, 6]
 */
const multiRand = (n) => {
    let randomNumsArr = [];

    for (let i = 0; i < n; i++) {
        randomNumsArr[i] = rand10();
    }

    return randomNumsArr;
} 

const askRandomNumber = "Please, enter the positive integer: ";
let userInput = parseInt(prompt(askRandomNumber));

while(userInput <= 0) {
    console.log("Please, enter a positive integer");
    userInput = parseInt(prompt(askRandomNumber));
}

const randomArr = multiRand(userInput);
console.log((`The array of ${userInput} random integers between 1 and 10: ${randomArr}`));
