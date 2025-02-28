// Create an array that contains every learner from the class (you can find the complete list on the Discord server). 
// Display each name in the console using a for ... of ... loop.
const wozniaks = [
  "Antoine",
  "Arseniia",
  "Hugo",
  "Liana",
  "M.Jordan",
  "Manu",
  "Martin",
  "Stephan",
  "Valentin",
  "Kamal",
  "Inna",
];

let index = 1;
for(let wozniak of wozniaks) {
    console.log(`I am wozniak #${index}: ${wozniak}`);
    index++;
}
