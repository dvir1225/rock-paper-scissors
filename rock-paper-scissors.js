let computerOptions = ["rock", "paper", "scissors"];
let computerSelection
let playerInput = prompt("rock, paper or scissors?");
let playerSelection

/* places player input into variable*/
function getPlayerChoice (){
    playerSelection = playerInput.toLowerCase()
    if ((playerSelection!=="rock") && (playerSelection!=="paper") && (playerSelection!=="scissors")){
    return alert("you have to choose either rock, paper or scissors.");
    } else {
        return playerSelection;
    }
}
getPlayerChoice();

/*randomizes computer selection*/
function getComputerChoice (){
    computerSelection = computerOptions[Math.floor(Math.random()*computerOptions.length)];
    return computerSelection;
}
getComputerChoice();

        
/*takes computer and user selection and declares winner of one round*/
function playRound (computerSelection, playerSelection){
    if(computerSelection == "paper" && playerSelection == "paper"){
    return "its a draw!"
    } else if(computerSelection == "rock" && playerSelection == "rock"){
        return "its a draw!"
    } else if(computerSelection == "scissors" && playerSelection == "scissors"){
        return "its a draw!"
    } else if(computerSelection == "rock" && playerSelection == "paper"){
      return "paper beats rock! you win!"
    } else if(computerSelection == "rock" && playerSelection == "scissors"){
     return "rock beats scissors! you lose!"
    }  else if(computerSelection == "paper" && playerSelection == "scissors"){
       return "scissors beat paper! you win!"
    } else if(computerSelection == "paper" && playerSelection == "rock"){
       return "paper beats rock! you lose!"
    } else if(computerSelection == "scissors" && playerSelection == "rock"){
       return "rock beats scissors! you win!"
    } else if(computerSelection == "scissors" && playerSelection == "paper"){
      return "scissors beat paper! you lose!"
      } 
}
playRound(computerSelection, playerSelection);
/*places result of round into variable*/
let roundResult = playRound(computerSelection, playerSelection);
/*declare default user and computer scores*/
let playerScore = 0;
let computerScore = 0;

 /*makes a game of 5*/
function game(computerSelection, playerSelection, playerScore, computerScore) {
    let intPlayerScore = parseInt(playerScore);
    let intComputerScore = parseInt(computerScore);
                for (i=0; i<5; i++) {
        playRound(computerSelection, playerSelection);
        console.log("player score is " + intPlayerScore);
        console.log("computer score is " + intComputerScore);
                if (roundResult.includes("win")) {
            intPlayerScore = ++intPlayerScore;
        } if(roundResult.includes("lose")) {
            intComputerScore = ++intComputerScore;
        } else {
        }console.log(roundResult);
        playerSelection = (prompt("rock, paper or scissors?")).toLowerCase;
        }
}
gameScore = game(computerSelection, playerSelection, playerScore, computerScore);
console.log(gameScore);