//global variables
let computerOptions = ["rock", "paper", "scissors"];
let computerSelection
let playerSelection

function getComputerChoice (){
    return (computerOptions[Math.floor(Math.random()*computerOptions.length)])
}

//assign variables to HTML elements
const rockBtn = document.getElementById("btn-1");
const paperBtn = document.getElementById("btn-2");
const scissorsBtn = document.getElementById("btn-3");
const result = document.querySelector('.result');
const computerScoreCurrent = document.querySelector('.computerScoreCurrent');
const playerScoreCurrent = document.querySelector('.playerScoreCurrent');
let winnerIs = document.querySelector('.winnerIs');
let winnerString = toString(winnerIs);

//change current scores to integers
let compIntScore = parseInt(computerScoreCurrent.innerText);
let playerIntScore = parseInt(playerScoreCurrent.innerText);

//player picks rock
function playerSelectsRock (){
    let playerSelection = 'rock'
    computerSelection = getComputerChoice();
    switch (computerSelection){
        case 'rock':
            result.innerText = "It's a draw!";
            break;
        case 'paper':
            result.innerText = "Paper beats Rock. You lose!";
            compIntScore = compIntScore + 1;
            computerScoreCurrent.innerText = compIntScore;
            break;
        case 'scissors':
            result.innerText = 'Rock beats Scissors. You win!';
            playerIntScore = playerIntScore + 1;
            playerScoreCurrent.innerText = playerIntScore;
            break;
    } announceWinner(playerIntScore, compIntScore);
}

rockBtn.addEventListener('click', playerSelectsRock);

//player picks paper
function playerSelectsPaper (){
    let playerSelection = 'paper'
    computerSelection = getComputerChoice();
    switch (computerSelection){
        case 'rock':
            result.innerText = "Paper beats Rock. You win!";
            playerIntScore = playerIntScore + 1;
            playerScoreCurrent.innerText = playerIntScore;
            break;
        case 'paper':
            result.innerText = "It's a draw!";
            break;
        case 'scissors':
            result.innerText = 'Scissors beat Paper. You lose!';
            compIntScore = compIntScore + 1;
            computerScoreCurrent.innerText = compIntScore;
            break;
    } announceWinner(playerIntScore, compIntScore);
}

paperBtn.addEventListener('click', playerSelectsPaper);

// player picks scissors
function playerSelectsScissors (){
    let playerSelection = 'scissors'
    computerSelection = getComputerChoice();
    switch (computerSelection){
        case 'rock':
            result.innerText = "Rock beats Scissors. You lose!";
            compIntScore = compIntScore + 1;
            computerScoreCurrent.innerText = compIntScore;
            break;
        case 'paper':
            result.innerText = "Scissors beat Paper. You win!";
            playerIntScore = playerIntScore + 1;
            playerScoreCurrent.innerText = playerIntScore;
            break;
        case 'scissors':
            result.innerText = "It's a draw!";
            break;
    } announceWinner(playerIntScore, compIntScore);
}

scissorsBtn.addEventListener('click', playerSelectsScissors);

function announceWinner(playerIntScore, compIntScore){
    if (playerIntScore === 5){
        document.querySelector('.winnerIs').innerText =
         "And the winner is..... YOU"
    } if (compIntScore === 5){
        document.querySelector('.winnerIs').innerText =
         "And the winner is..... NOT YOU"
    }
}