let computerOptions = ["rock", "paper", "scissors"];
let computerSelection
let playerSelection

function getComputerChoice (){
    return (computerOptions[Math.floor(Math.random()*computerOptions.length)])
}

const rockBtn = document.getElementById("btn-1");
const paperBtn = document.getElementById("btn-2");
const scissorsBtn = document.getElementById("btn-3");
const result = document.querySelector('.result');

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
            break;
        case 'scissors':
            result.innerText = 'Rock beats Scissors. You win!';
            break;
    }
}

rockBtn.addEventListener('click', playerSelectsRock);

//player picks paper
function playerSelectsPaper (){
    let playerSelection = 'paper'
    computerSelection = getComputerChoice();
    switch (computerSelection){
        case 'rock':
            result.innerText = "Paper beats Rock. You win!";
            break;
        case 'paper':
            result.innerText = "It's a draw!";
            break;
        case 'scissors':
            result.innerText = 'Scissors beat Paper. You lose!';
            break;
    } 
}

paperBtn.addEventListener('click', playerSelectsPaper);

// player picks scissors
function playerSelectsScissors (){
    let playerSelection = 'scissors'
    computerSelection = getComputerChoice();
    switch (computerSelection){
        case 'rock':
            result.innerText = "Rock beats Scissors. You lose!";
            break;
        case 'paper':
            result.innerText = "Scissors beat Paper. You win!";
            break;
        case 'scissors':
            result.innerText = "It's a draw!";
            break;
    }
}

scissorsBtn.addEventListener('click', playerSelectsScissors);




/*
let intPlayerScore = parseInt(playerScore);
let intComputerScore = parseInt(computerScore);
/*
function game(computerSelection, playerSelection, playerScore, computerScore) {
    
        for (i=0; i<5; i++) {
        let roundResult = playRound(computerSelection, playerSelection);
                        if (roundResult.includes("win!")) {
            intPlayerScore = ++intPlayerScore;
            
        } if(roundResult.includes("lose!")) {
            intComputerScore = ++intComputerScore;
            
        } else {
        }console.log(roundResult);
        console.log("player score is " + intPlayerScore);
                console.log("computer score is " + intComputerScore);
                }
} 
function whoWins(){
if(intPlayerScore>intComputerScore){
    console.log("you won!")
} else if (intPlayerScore<intComputerScore){
    console.log("you lost!")
} else { console.log("its a draw")}
}
gameScore = game(computerSelection, playerSelection, playerScore, computerScore);
gameWinner = whoWins()*/