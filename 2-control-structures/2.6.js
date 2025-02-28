// Make a program that ask the user to enter a number between 1 and 7. 
// Depending on the number, display the day of the week that correspond. (1 => Monday, 2 => Tuesday, etc...)
const prompt = require("prompt-sync")();

const askNumberMessage = "Enter the number between 1 and 7: ";

let userInput = parseInt(prompt(askNumberMessage));

switch(userInput) {
    case 1:
        console.log("This is Monday!");
        break;
    case 2:
        console.log("This is Tuesday!");
        break;
    case 3:
        console.log("This is Wednesday!");
        break;
    case 4:
        console.log("This is Thursday!");
        break;
    case 5:
        console.log("This is Friday!");
        break;
    case 6:
        console.log("This is Saturday!");
        break;
    case 7:
        console.log("This is Sunday!");
        break;
    default:
        console.log("Please, enter the number between 1 and 7");
        break;
}