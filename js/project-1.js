"use strict"
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';
console.log(document.querySelector('.message').textContent);
document.querySelector('.number').textContent = 13;

document.querySelector('.score').textContent = 10;
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let number = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;


let displayMessage = function (input) {
    document.querySelector('.message').textContent = input;

}

document.querySelector('.check').addEventListener('click', function () {
    let guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
    if (!guess) {
        // no number
        displayMessage('No Number!')
        // Loser
    } else if (guess !== number) {
        if (score > 1) {
            displayMessage(guess > number ? 'Too High!' : 'Too Low!')
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.score').textContent = 'You lost!';
        }

        // Winner
    }
    if (guess === number) {
        displayMessage('You Won!')
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = number;
        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
        // Too high

    }
});

let resetButton = function reset() {
    document.querySelector('.number').textContent = '?'
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.score').textContent = 20;
    number = Math.floor(Math.random() * 20) + 1;
    displayMessage('Start guessing...')
    document.querySelector('.guess').value = '';

}

document.querySelector('.again').addEventListener('click', resetButton)

