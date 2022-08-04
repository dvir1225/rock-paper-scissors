let computerOptions = ["rock", "paper", "scissors"];
let computerSelection
/*let playerInput = prompt("rock, paper or scissors?");*/
let playerSelection

/* places player input into variable*/
function getPlayerChoice (){
    playerSelection = (prompt("rock, paper or scissors?")).toLowerCase()
    return playerSelection;
}

/*randomizes computer selection*/
function getComputerChoice (){
    computerSelection = computerOptions[Math.floor(Math.random()*computerOptions.length)];
    return computerSelection;
}
getComputerChoice();

/*invoke function for player to choose input and play against computer*/
function playRound (computerSelection, playerSelection,){
    playerSelection = getPlayerChoice();
    computerSelection = getComputerChoice();
        console.log('you chose: ' + playerSelection);
        console.log ('computer chose ' + computerSelection);
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
/*playRound(computerSelection, playerSelection);*/
/*console.log(playRound(computerSelection, playerSelection));*/
/*places result of round into variable*/

/*console.log(roundResult)*/

/*declare default user and computer scores*/
let playerScore = 0;
let computerScore = 0;
let intPlayerScore = parseInt(playerScore);
    let intComputerScore = parseInt(computerScore);
 /*makes a game of 5*/
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
gameWinner = whoWins()
