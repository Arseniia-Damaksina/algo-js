// Create a function named rand10() that returns a random integer between 1 and 10. 
// Create a program that will display the result of that function each time it is run.
// Write a documentation for the rand10() function.

/**
 * Generates the random integer betwenn 1 and 10 (inclusive) and logs it to the console.
 * @returns {number} A random integer between 1 and 10.
 * 
 * @example
 * const random = rand10(); 
 * console.log(random); // Outputs: 8
 */
const rand10 = () => {
    const randomNum = Math.ceil(Math.random() * 10);
    return randomNum;
}

const random = rand10();
console.log(`The random number between 1 and 10 is: ${random}`);