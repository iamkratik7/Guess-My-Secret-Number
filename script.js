'use strict';

// Basic manipulation of dom elements

/*

Basics lecture: 

console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = '✨ Correct Number!';

console.log(document.querySelector('.message').textContent);


document.querySelector('.number').textContent = '13';
document.querySelector('.score').textContent = '10';



document.querySelector('.guess').value=24;

console.log(document.querySelector('.guess').value);

*/

// IMPLEMENTING GAME LOGIC

let secretNumber = Math.trunc(Math.random() * 20) + 1;

//trunc above removes dcecimal part and  +1 is to include number 20 as well.

let score = 20;
let highScore = 0;

//Message Function to remove duplicacy
const displayMessage = function(message){
  document.querySelector('.message').textContent = message;
}

// EVENT LISTENERS

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // when no number entered
  if (!guess) {
    displayMessage('⛔ No Number Found');
  }

  // when player wins
  else if (guess === secretNumber) {
    displayMessage('✅Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '220px';
    document.querySelector('.number').textContent = secretNumber;

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }

  // when guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈Too high!' : '📉Too low! ');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
       displayMessage( '😒 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

//resetting everything on click again
document.querySelector('.again').addEventListener('click', function () {
  //reset score
  score = 20;
  document.querySelector('.score').textContent = score;

  //reset secretNumber
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  //reset messages
  displayMessage('Start guessing...');

  //reset number to "?"
  document.querySelector('.number').textContent = '?';

  //reset the guess to empty
  document.querySelector('.guess').value = '';

  //restore the background body and width of secretNumber
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '150px';
});
