let randomNum = parseInt(Math.random() * 100 + 1);

console.log("hi")

const submit = document.querySelector('#subt')
const guessNum = document.querySelector('#guessField') // userInput
const guessSlot = document.querySelector('.guesses')
const remainingGuess = document.querySelector('.lastResult')
const lowOrHigh = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = [];
let numGuess = 1;

let playGame = true;


submit.addEventListener('click', function (e) {
  if (playGame) {
    e.defaultPrevented;
    const guess = parseInt(guessNum.value);
    console.log(guess);
    validateGuess(guess);

  }
});

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Evter a valid number')
  } else if (guess < 1) {
    alert('Enter the value that is greater then 1')
  } else if (guess > 100) {
    alert('Enter the value greater less then 100')
  } else {
    prevGuess.push(guess);

    if (numGuess === 11) {
      displayGuess(guess);
      displayMassage(`game Over, Answer was ${randomNum}`);
      endGame();
    } else {
      displayGuess(guess)
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNum) {
    displayMassage('you win!');
    endGame();
  } else if (guess < randomNum) {
    displayMassage('too low!')
  } else if (guess > randomNum) {
    displayMassage('too high!')
  }
}

function displayGuess(guess) {
  guessNum.value = ''
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remainingGuess.innerHTML = `${11 - numGuess}`

}

function displayMassage(message) {
  lowOrHigh.innerHTML = `<h2>${message}</h2>`;

}

function endGame() {
  guessNum.value = '';
  guessNum.setAttribute('disabled', '');
  p.classList.add('button')
  p.innerHTML = `<h2 id = "newGame"> Start a new game! </h2>`
  startOver.appendChild(p)
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame')
  newGameButton.addEventListener('click', function (e) {
    randomNum = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remainingGuess.innerHTML = `${11 - numGuess}`;
    lowOrHigh.innerHTML = ""
    guessNum.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;

  })
}