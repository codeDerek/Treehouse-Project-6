const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const missed = 0;
//For the getRandomPhraseAsArray function
var characters = [];
const startButton = document.querySelector('.btn__reset');



//Phrases for game
const phrases = [`Zebras Play Xylophones`, `George Washington had bad teeth`, `I love to code`, `Front End Web Developer for Hire`, `Disney World is VERY expensive`];



function getRandomPhraseAsArray(array) {
//Picks random phrase from the phrases array
const arraySelect = array[Math.floor(Math.random()*array.length)];
//Take the phrase from arraySelect and break it into an array of letters and spaces.
characters = arraySelect.split("");
console.log(characters);
};




//When the start button is clicked, the overlay dissappears revealing the game
startButton.addEventListener('click', () => {
  const overlay = document.getElementById('overlay');
  overlay.style.visibility = "hidden";
  getRandomPhraseAsArray(phrases);
});
