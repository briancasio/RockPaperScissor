function getPlayerSelection(){ 
    alert("Type Rock, Paper or Scissors")
    const playerSelection = prompt().toLowerCase;
    return playerSelection;
}

const playerSelection = getPlayerSelection();

function getComputerChoice(){  
    const computerSelection = "paper";
    return computerSelection;
}

const computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection){
    console.log(playerSelection);
    console.log(computerSelection);
}

playRound(playerSelection, computerSelection);


