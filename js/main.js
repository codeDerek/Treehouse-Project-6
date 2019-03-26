const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
let missed = 0;
const startButton = document.querySelector('.btn__reset');
let scoreBoard = document.getElementsByClassName('tries');
let allClass = document.getElementsByClassName('show');
let allLetters = document.getElementsByClassName('letter');
let title = document.querySelector('.title');
const winMessage = "You Win, Big Kahuna!"
const loseMessage = "Wow.... That was... terrible...."
//selecting all letters

//For the getRandomPhraseAsArray function
let characters = [];

//Phrases for game
const phrases = ["Hello There", `HTML and CSS`, `I love to code`, `Treehouse Rocks`, `Career Change`];


//Functions

function getRandomPhraseAsArray(array) {
  //Picks random phrase from the phrases array
  const arraySelect = array[Math.floor(Math.random() * array.length)];
  //Take the phrase from arraySelect and break it into an array of letters and spaces.
  characters = arraySelect.split("");
};

//Take the array of letters and add each of them as a list item with the class "letter".
function addPhraseToDisplay(characters) {
  for (let i = 0; i < characters.length; i += 1) {
    const ul = document.getElementById('phrase');
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(characters[i]));
    phrase.appendChild(li);
    //if the li is a space, add class name 'space', otherwise add class "letter"
    if (characters[i] === " ") {
      li.className = 'space';
    } else {
      li.className = 'letter';
    }
    ul.appendChild(li);
  };
}

//When player presses button, check to see if letter matches letters. If they do, add the class 'show', return that letter. Otherwise, return null.
function checkLetter(buttonPressed) {
  let letters = document.getElementsByClassName('letter');
  let arr = Array.from(letters);
  let correctLetter = false;
  for (let i = 0; i < arr.length; i += 1) {
    if (buttonPressed.toLowerCase() === arr[i].textContent.toLowerCase()) {
      arr[i].classList.add('show');
      arr[i].style.transition = "2s";
    correctLetter = true;
    }
    }
return correctLetter;
};

function checkWin() {
  if (allClass.length === allLetters.length ) {
    console.log("Yes!");
overlay.style.visibility = "visible";
    overlay.className = "win";
title.innerHTML = winMessage;
startButton.textContent = "Play Again"
} else if (missed >= 5) {
  overlay.style.visibility = "visible";
  overlay.className = "lose";
  title.innerHTML = loseMessage;
  startButton.textContent = "Try Again?"
    console.log("no!");
  }
}

function reset() {
  window.location.reload();
}

//*************Start of Program***********//

//When the start button is clicked, the overlay dissappears revealing the game
startButton.addEventListener('click', () => {
  const overlay = document.getElementById('overlay');
  overlay.style.visibility = "hidden";
  getRandomPhraseAsArray(phrases);
  addPhraseToDisplay(characters);
});

// Use event delegation to listen only to button events from the keyboard. When a player chooses a letter, add the “chosen” class to that button so the same letter can’t be chosen twice.

qwerty.addEventListener('click', (event) => {

  if (event.target.tagName === 'BUTTON') {
    event.target.className = 'chosen';
    event.target.disabled = true;
    checkLetter(event.target.textContent);
    let letterFound =   checkLetter(event.target.textContent);
//If the letter isn't correct, add 1 to missed and remove heart.
    if (letterFound === false) {
      console.log(scoreBoard[missed]);
scoreBoard[missed].style.display = "none";
      missed += 1;
    }
  }
  checkWin()
  //After game, button will reset page to default.
  startButton.addEventListener('click', () => {
    reset();
  })
});
