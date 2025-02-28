// Ask the user to enter three numbers: min, max and current. Display if current is between min and max.
// Bonus: if min is greater than max, display an error message to explain the user he's doesn't understand anything 
// then exit the program. (It must not ask any other question.)
const prompt = require("prompt-sync")();

const minMessage = "Enter the min number: ";
const maxMessage = "Enter the max number: ";
const currentMessage = "Enter the current number: ";
const minGreaterThanMaxErrorMessage =
  "Min number cannot be greater than Max number. Please, be attentive.";
const currentIsBetweenMessage = "Congrats! Current number is between min and max!";
const currentIsNotBetweenMessage = "Sorry, nit this time:( Current number is not between min and max";

const min = parseInt(prompt(minMessage));
const max = parseInt(prompt(maxMessage));

if (min > max) {
    console.log(minGreaterThanMaxErrorMessage);
} else {
    const current = parseInt(prompt(currentMessage));

    if(current > min && current < max) {
        console.log(currentIsBetweenMessage);
    } else {
        console.log(currentIsNotBetweenMessage);
    }
}