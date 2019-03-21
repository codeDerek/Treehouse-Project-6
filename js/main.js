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
  const arraySelect = array[Math.floor(Math.random() * array.length)];
  //Take the phrase from arraySelect and break it into an array of letters and spaces.
  characters = arraySelect.split("");
};

//Take the array of letters and add each of them as a list item with the class "letter".
function addPhraseToDisplay(characters) {
  for (let i = 0; i < characters.length; i += 1) {
    const character = characters[i];
  const ul = document.getElementById('phrase');
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(character));
//if the li is a space, do nothing, otherwise add class "letter"
if (character === ' ')
{} else {
  li.classList.add('letter');
  ul.appendChild(li);
}
  };
}

function checkLetter(buttonPressed) {
for (let i = 0; i < characters.length; i += 1) {
const letters = document.getElementById('.letter')
  if (buttonPressed === letters[i]) {
    letters[i].classList.add('show');
  let userLetter =  buttonPressed;
  return userLetter;
} else {
  return null
}
}
}


//When the start button is clicked, the overlay dissappears revealing the game
startButton.addEventListener('click', () => {
  const overlay = document.getElementById('overlay');
  overlay.style.visibility = "hidden";
  getRandomPhraseAsArray(phrases);
  addPhraseToDisplay(characters);
});
