// Ask the user to enter its age. If its age is at least 18 display "You are an adult". 
// If it's not the case display "You are not yet an adult".
const prompt = require("prompt-sync")();

const askAgeMessage = "How old are you? ";
const errorMessage = "Enter the valid age!";
const adultMessage = "You are an adult.";
const childMessage = "You are not yet an adult.";

const zero = 0;
const adultAge = 18;

let userAge = parseInt(prompt(askAgeMessage));

if (userAge >= adultAge) {
  prompt(adultMessage);
} else if (userAge >= zero && userAge < adultAge) {
  prompt(childMessage);
} else {
  prompt(errorMessage);
}
