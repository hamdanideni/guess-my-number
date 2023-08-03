// element
const mysteryNumberEl = document.querySelector(".mystery-number");
const guessValueEl = document.querySelector(".guess");
const buttonCheckEl = document.querySelector(".check-guess");
const descEl = document.querySelector(".desc");
const scoreEl = document.querySelector(".score");
const highScoreEl = document.querySelector(".highscore");
const buttonAgainEl = document.querySelector(".again");
const guessNumberEl = document.querySelector(".guessnumber");

// first condition
let inputValue;
let score;
let randNumber;
let highscore = 0;
highScoreEl.innerText = highscore;

const resetDefault = function () {
  randNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  scoreEl.innerText = score;
  descEl.innerText = "Start Guessing . . .";
  mysteryNumberEl.innerText = "?";
  guessValueEl.value = "";
  buttonCheckEl.disabled = false;
  guessValueEl.disabled = false;
};

resetDefault();

// Button Check
buttonCheckEl.addEventListener("click", function () {
  inputValue = Number(guessValueEl.value);
  ////////////////////////
  if (inputValue !== randNumber) {
    descEl.innerText = inputValue > randNumber ? "Too High" : "Too Low";
    score--;
    scoreEl.innerText = score;
  } else {
    descEl.innerText = "Correct Number";
    // highScore = score;
    console.log(score);
    console.log(highscore);
    highscore = score > highscore ? score : highscore;
    highScoreEl.innerText = highscore;
    buttonCheckEl.disabled = true;
    guessValueEl.disabled = true;
    mysteryNumberEl.innerText = randNumber;
    guessNumberEl.classList.add("correct");
  }

  // if score = 0
  if (score === 0) {
    buttonCheckEl.disabled = true;
    guessValueEl.disabled = true;
    descEl.innerText = "Click Try Again";
  }
});

console.log(randNumber);

// button again
buttonAgainEl.addEventListener("click", function () {
  guessNumberEl.classList.remove("correct");
  resetDefault();
  console.log(randNumber);
});
