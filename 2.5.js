// Make a program that asks the favorite number of the user. If that number is anything other than 42 display "Are you sure?" and ask again. (This program should never end as long as the user didn't chose 42).
const prompt = require("prompt-sync")();

const favoriteNumber = 42;
const askNumberMessage = "Enter your favorite number: ";
const sureMessage = "Are you sure?";

let userInput = parseInt(prompt(askNumberMessage));

while (userInput !== favoriteNumber) {
    console.log(sureMessage);
    userInput = parseInt(prompt(askNumberMessage));;
}

