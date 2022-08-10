game();

function getComputerChoice() {
    choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playerSelection() {
    return prompt('Rock, Paper, Scissors?').toLowerCase();
}

function computerSelection() {
    return getComputerChoice();
}

function playRound() {
    playerChoice = playerSelection();
    computerChoice = computerSelection();

    console.log(`Player choice: ${playerChoice}`);
    console.log(`Computer choice: ${computerChoice}`);
    //Draw
    if (playerChoice === computerChoice) {
        console.log('You picked the same choice as the computer - Draw!')
    } else if (playerChoice === 'rock' && computerChoice === 'scissors') {
        console.log('Winner winner chicken dinner!')
    } else if (playerChoice === 'rock' && computerChoice === 'paper') {
        console.log('You Lose! Paper beats Rock');
    } else if (playerChoice === 'paper' && computerChoice === 'scissors') {
        console.log('You Lose! Scissors beats Paper!');
    } else if (playerChoice === 'paper' && computerChoice === 'rock') {
        console.log('Winner winner chicken dinner!');
    } else if (playerSelection === 'scissors' && computerChoice === 'paper') {
        console.log('Winner winner chicken dinner');
    } else {
        console.log('You lose!  Rock beats scissors');
    }
}

function game() {
    playRound();
}