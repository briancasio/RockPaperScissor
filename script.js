

const rock = document.querySelector("rock");
const paper = document.querySelector("paper");
const scissors = document.querySelector("scissors");

function computerPlay(){
    let choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random()*choices.length)]
    if (choices == 0){
    
    }
}






/*
function getComputerChoice(){  
    let computerSelection = Math.floor(Math.random()*3);
    switch(computerSelection){

        case 0:
        return "Rock";
        case 1:
        return "Paper";
        case 2:
        return "Scissors";
    }
}

function getPlayerSelection(){ 
    alert("Type Rock, Paper or Scissors")
    const playerSelection = prompt().toLowerCase;
    return playerSelection;
}

const playerSelection = getPlayerSelection();


const computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection){
    console.log(playerSelection);
    console.log(computerSelection);
}

playRound(playerSelection, computerSelection);


*/