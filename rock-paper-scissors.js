let computerOptions = ["rock", "paper", "scissors"];
let computerSelection
let playerInput = prompt("rock, paper or scissors?");
let playerSelection

function getPlayerChoice (){
    playerSelection = playerInput.toLowerCase()
    if ((playerSelection!=="rock") && (playerSelection!=="paper") && (playerSelection!=="scissors")){
    return alert("you have to choose either rock, paper or scissors.");
    } else {
        return playerSelection;
    }
}

function getComputerChoice (){
    computerSelection = computerOptions[Math.floor(Math.random()*computerOptions.length)];
    return computerSelection;
        }


function playRound (computerSelection, playerSelection){
if (computerSelection == playerSelection){
    return "it's a draw! try again"
    } else if (computerSelection == "rock" && playerSelection == "paper"){
      return "paper beats rock! you win!"
    } else if (computerSelection == "rock" && playerSelection == "scissors"){
     return "rock beats scissors! you lose!"
    }  else if (computerSelection == "paper" && playerSelection == "scissors"){
       return "scissors beat paper! you win!"
    } else if (computerSelection == "paper" && playerSelection == "rock"){
       return "paper beats rock! you lose!"
    } else if (computerSelection == "scissors" && playerSelection == "rock"){
       return "rock beats scissors! you win!"
    } else if (computerSelection == "scissors" && playerSelection == "paper"){
      return "scissors beat paper! you lose!"
      }
}

let playerScore=0;
let computerScore=0;

let roundResult = playRound(computerSelection, playerSelection);
console.log(roundResult)
/*

getComputerChoice();
getPlayerChoice();

function game ()  {
    
    for (let i=0; i < 5; i++){
        playRound()
            if (roundResult.includes("win")){
            playerScore = ++playerScore;
        } else if (roundResult.includes("lose")) {
             computerScore = ++computerScore;
        } else {
            playerScore = playerScore;
            computerScore = computerScore ;
        }  
    }   console.log('players score is ' + playerScore + ' and computer score is ' + computerScore)
}

game();*/