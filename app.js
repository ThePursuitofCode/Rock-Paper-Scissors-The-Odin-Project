const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');

const displayResult = document.querySelector('#result');

const playerChoice = document.querySelector('#playerChoice');
const computerChoice = document.querySelector('#computerChoice');

const displayPlayerScore = document.querySelector('#playerScore');
const displayComputerScore = document.querySelector('#computerScore');

let playerSelection = null

rockBtn.addEventListener('click', ()=>{
    playerSelection = 'rock';
    playRound(playerSelection)
})

paperBtn.addEventListener('click', ()=>{
    playerSelection = 'paper';
    playRound(playerSelection)
})

scissorsBtn.addEventListener('click', ()=>{
    playerSelection = 'scissors';
    playRound(playerSelection)
})

function playRound(playerSelection){
    const computerSelection = computerPlay();
    let result = null;
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
    console.log(`The player picked ${playerSelection}`)
    console.log(`The computer picked ${computerSelection}`)

    if(playerSelection === computerSelection){
        result = "It's a tie!"
    } else if (playerSelection === "rock" && computerSelection === "scissors"){
        result = "Player Wins!"
    } else if (playerSelection === "scissors" && computerSelection === "rock"){
        result = "Computer Wins!"
    } else if (playerSelection === "paper" && computerSelection === "rock"){
        result = "Player Wins!"
    } else if (playerSelection === "rock" && computerSelection === "paper"){
        result = "Computer Wins!"
    } else if (playerSelection === "scissors" && computerSelection === "paper"){
        result = "Player Wins!"
    } else if (playerSelection === "paper" && computerSelection === "scissors"){
        result = "Computer Wins!"
    }
    displayResult.textContent = result
    playerChoice.textContent = playerSelection.toUpperCase()
    computerChoice.textContent = computerSelection.toUpperCase()
}


