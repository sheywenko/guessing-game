"use strict";
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 10;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
const button = document.querySelector(".check");

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  //when player did not input any guess
  if (!guess) {
    displayMessage("Please input your guess");
    document.querySelector("body").style.backgroundColor = "orange";
    //when player wins
  } else if (guess === secretNumber) {
    displayMessage("Whoa!!!..Correct Guess.");
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".number").textContent = secretNumber;

    button.disabled = true;

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
    //when player loses
  } else {
    if (score > 1) {
      displayMessage(
        guess > secretNumber ? "Ooops! Guess too high" : "Ooops! Guess too low"
      );
      score--;
      document.querySelector(".score").textContent = score;
      document.querySelector(".number").textContent = secretNumber;
      document.querySelector("body").style.backgroundColor = "red";
    } else {
      displayMessage("Game over. Please try again");
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "red";
    }
  }
});
document.querySelector(".again").addEventListener("click", function () {
  score = 10;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  button.disabled = false;
  displayMessage("Start guessing..");
  document.querySelector(".guess").value = "";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".score").textContent = score;
  document.querySelector("body").style.backgroundColor = "#222";
});
