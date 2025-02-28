// Create a function pickLearner(inputAr, n) that takes 2 parameters.
// inputAr : An array of learners (the one you created in exercise 3.0 for example)
// n : A number, that should be greater than 0 and less than the length of inputAr
// The function should return an array of randomly selected learners
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

const pickLearner = (inputAr, n) => {
  if (n < 0 || n > inputAr.length) {
    return [];
  }
  
  // Fisher-Yates Shuffle algo; time complexity - O(n); space complexity - O(1);
  const arr = [...inputAr];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  return arr.slice(0, n);
};

const randomLearnersSlice = pickLearner(wozniaks, 6);
console.log(randomLearnersSlice);
