'use strict';


let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = localStorage.getItem('highscore') ?? 0;

const displayMessage = messge => document.querySelector('.message').textContent = messge;


document.querySelector('.highscore').textContent = String(highscore);


document.querySelector('.check').addEventListener('click', () => {
    const guess = Number(document.querySelector('.guess').value);

    // No input
    if (!guess) {
        displayMessage('⛔️ No Number!');

        // Player wins 
    } else if (guess === secretNumber) {
        displayMessage('🎉 Correct Number!');
        document.querySelector('.number').textContent = String(secretNumber);
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.guess').disabled = true;

        if (score > highscore) {
            highscore = score;
            localStorage.setItem('highscore', highscore);
            document.querySelector('.highscore').textContent = String(highscore);
        }

        // When Guess is wrong
    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
            document.querySelector('.score').textContent = String(--score);
        } else {
            displayMessage('💥 You lost the game!');
            document.querySelector('.score').textContent = String(0);
        }
    }
});

document.querySelector('.again').addEventListener('click', () => {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = String(score);
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.guess').disabled = false;
});