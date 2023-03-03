
function getComputerChoice(){
    var responses = ["rock", "paper", "scissors"];
    var index = Math.floor(Math.random() * responses.length);
    return responses[index];
}

function playGame(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection == "rock" && computerSelection == "paper"){
        return `You lose! ${playerSelection} does not beat ${computerSelection}`;
    } 
    else if (playerSelection == "rock" && computerSelection == "scissors"){
        return `You win! ${playerSelection} beats ${computerSelection}`;
    }
    else if (playerSelection == "rock" && computerSelection == "rock"){
        return `Draw! ${playerSelection} draws ${computerSelection}`;
    }
    else if (playerSelection == "paper" && computerSelection == "paper"){
        return `Draws! ${playerSelection} draws ${computerSelection}`;
    } 
    else if (playerSelection == "paper" && computerSelection == "rock"){
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } 
    else if (playerSelection == "paper" && computerSelection == "scissors"){
        return `You lose! ${playerSelection} does not beat ${computerSelection}`;
    }
    else if (playerSelection == "scissors" && computerSelection == "paper"){
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } 
    else if (playerSelection == "scissors" && computerSelection == "rock"){
        return `You lose! ${playerSelection} does not ${computerSelection}`;
    } 
    else if (playerSelection == "scissors" && computerSelection == "scissors"){
        return `Draw! ${playerSelection} draws ${computerSelection}`;
    }    
}


var playerChoice = "Scissors"
function game(){
    for (let i = 0; i < 5; i++){
        let output = playGame(playerChoice, getComputerChoice);
        console.log(output);
    }
}
game();