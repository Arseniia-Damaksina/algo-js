// Create a function named askTvSerie() that will ask the user for the following data about 
// its favorite TV serie:
// Name
// Production year
// Names of the cast members (there can be as much as the user want)
// That function must gather all the data in a single object and return it. The data structure must be elegant.
// Create a program that use that function to generate a TV serie object and display it to the user in JSON format.

const prompt = require("prompt-sync")();

const askName = "Enter the name of your favorite TV serie: ";
const askProdYear = "Enter the production year: ";
const askCast = "Enter the cast member name: ";

const askTvSerie = () => {
  const name = prompt(askName);
  const prodYear = parseInt(prompt(askProdYear));
  const castInput = prompt("Enter cast members' names separated by commas: ");
  let cast = [];

  cast = castInput
    .split(",")
    .map((c) => c.trim())
    .filter((c) => c !== "");

  return {
    name,
    prodYear,
    cast,
  };
};

const displayTvSerie = askTvSerie();
console.log("TV Series Data in JSON format:");
console.log(JSON.stringify(displayTvSerie));

// Create a function named randomizeCast(tvSerie) that will take as argument the data 
// structure you defined in the previous exercise and return a list of the same cast but in
// a random order.
// Create a program that will use randomizeCast(tvSerie) and askTvSerie() to ask the user 
// about a TV serie then display a randomized list of the previous cast that will form the 
// new cast of your next serie.

const randomizeCast = (tvSerie) => {
  const cast = [...tvSerie.cast];

  for(let i = 0; i < cast.length; i++) {
      const j = Math.floor(Math.random() * (i+1));
      [cast[i], cast[j]] = [cast[j], cast[i]];
  }

  return cast;
}

const tvSerie = askTvSerie();
const randomCast = randomizeCast(tvSerie);

console.log(`The original cast: ${JSON.stringify(tvSerie.cast)}`);
console.log(`The randomized cast: ${JSON.stringify(randomCast)}`);