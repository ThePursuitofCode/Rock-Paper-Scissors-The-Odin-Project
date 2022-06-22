// Rock, Paper, Scissors

// Create a function that acts as the computer that will randomly return rock, paper, or scissors.
const playerSelection = prompt("Rock, Paper, or Scissors?").toLowerCase()
const computerSelection = computerPlay()

function computerPlay(){
    let randomNum = Math.floor(Math.random() * 3) + 1
    if (randomNum === 1){
        return "rock"
    } else if (randomNum === 2){
        return "paper"
    } else if (randomNum === 3){
        return "scissors"
    }
}

// Create a function that plays a single round taking in the player's selection and computer's selection.
// Declare if player wins or loses.
// Make the player selection not case sensitive.

function playRound(playerSelection, computerSelection){
    console.log(`The computer picked ${computerSelection}`)
    if(playerSelection === computerSelection){
        return "It's a tie!"
    } else if (playerSelection === "rock" && computerSelection === "scissors"){
        return "Player Wins!"
    } else if (playerSelection === "scissors" && computerSelection === "rock"){
        return "Computer Wins!"
    } else if (playerSelection === "paper" && computerSelection === "rock"){
        return "Player Wins!"
    } else if (playerSelection === "rock" && computerSelection === "paper"){
        return "Computer Wins!"
    } else if (playerSelection === "scissors" && computerSelection === "paper"){
        return "Player Wins!"
    } else if (playerSelection === "paper" && computerSelection === "scissors"){
        return "Computer Wins!"
    }
}

console.log(playRound(playerSelection, computerSelection))