// Create a function named calcSurface that takes the length and width of a rectangle and returns its surface.
// Then create a program that asks the length and width of a rectangle to the user then displays the surface of that rectangle.
// That program must use the function you created.
// Write a documentation for the calcSurface function.
const prompt = require("prompt-sync")();
const askLengthMessage = "Enter the length: ";
const askWidthMessage = "Enter the width: ";

/**
 * Calculates the surface area of a rectangle.
 *
 * @param {number} length - The length of the rectangle. Must be a positive number.
 * @param {number} width - The width of the rectangle. Must be a positive number.
 * @returns {number} - The surface area of the rectangle, which is calculated as length * width.
 *
 * @example
 * const surface = calcSurface(8, 7);
 * console.log(surface); // Outputs: 56
 */
const calcSurface = (length, width) => {
  return length * width;
};

let lengthInput = parseInt(prompt(askLengthMessage));
while (lengthInput <= 0) {
  console.log("Please, enter the valid positive value for length: ");
  lengthInput = parseInt(prompt(askLengthMessage));
}

let widthInput = parseInt(prompt(askWidthMessage));
while (widthInput <= 0) {
  console.log("Please, enter the valid positive value for width: ");
  widthInput = parseInt(prompt(askWidthMessage));
}

const result = calcSurface(lengthInput, widthInput);
console.log(`The result surface is: ${result}`);
