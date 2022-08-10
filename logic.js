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
    var winner;

    console.log(`Player choice: ${playerChoice}`);
    console.log(`Computer choice: ${computerChoice}`);
    //Draw
    if (playerChoice === computerChoice) {
        console.log('You picked the same choice as the computer - Draw!')
        return;
    } else if (playerChoice === 'rock' && computerChoice === 'scissors') {
        console.log('Winner! Rock beats scissors!')
        return winner = 'player';
    } else if (playerChoice === 'rock' && computerChoice === 'paper') {
        console.log('You Lose! Paper beats Rock');
        return winner = 'computer';
    } else if (playerChoice === 'paper' && computerChoice === 'scissors') {
        console.log('You Lose! Scissors beats Paper!');
        return winner = 'computer';
    } else if (playerChoice === 'paper' && computerChoice === 'rock') {
        console.log('Winner! Paper beats rock!');
        return winner = 'player';
    } else if (playerSelection === 'scissors' && computerChoice === 'paper') {
        console.log('Winner scissors beats paper!');
        return winner = 'player';
    } else {
        console.log('You lose! Rock beats scissors');
        return winner = 'computer';
    }
}

function game() {
    playerWins = 0;
    computerWins = 0;

    for (let i = 1; i <= 5; i++) {
        console.log(`Round ${i}`);
        if (playRound() === 'player') {
            playerWins++;
            console.log(`Player wins: ${playerWins}, Computer wins: ${computerWins}`);
            console.log('----------------------------------');
            continue;
        } else {
            computerWins++;
            console.log(`Player wins: ${playerWins}, Computer wins: ${computerWins}`);
            console.log('----------------------------------');
        }
    }


}