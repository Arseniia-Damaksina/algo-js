// Make a program that ask the user to enter a number named n. Then ask him n time to enter a new number.
// At the end display the sum of all the numbers collected this way.
// Example: If the user enters 3 for n then 1, 2 and 3, the program should display 6.
const prompt = require("prompt-sync")();

const askNMessage = "Enter the positive value of n: ";
const askNumberMessage = "Enter the number: ";

let n = parseInt(prompt(askNMessage));
let sum = 0;

while (isNaN(n) || n <= 0) {
  console.log("Please, enter a positive number for n");
  n = parseInt(prompt(askNMessage));
}

for (let i = 1; i <= n; i++) {
  let number = parseInt(prompt(askNumberMessage));
  if (!isNaN(number)) {
    sum += number;
  }
}

console.log(`The sum of ${n} numbers entered is ${sum}`);
