const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

const displayResult = document.querySelector("#result");

const playerChoice = document.querySelector("#playerChoice");
const computerChoice = document.querySelector("#computerChoice");

const displayPlayerScore = document.querySelector("#playerScore");
const displayComputerScore = document.querySelector("#computerScore");

const displayWinRate = document.querySelector("#winPercentage");

let playerScore = 0;
let computerScore = 0;

let playerWon = 0;
let computerWon = 0;

let playerSelection = null;

rockBtn.addEventListener("click", () => {
  playerSelection = "rock";
  displayResult.textContent = "Rock, Paper, Scissors!";
  displayResult.style.color = 'white'
  playRound(playerSelection);
});

paperBtn.addEventListener("click", () => {
  playerSelection = "paper";
  displayResult.textContent = "Rock, Paper, Scissors!";
  displayResult.style.color = 'white'
  playRound(playerSelection);
});

scissorsBtn.addEventListener("click", () => {
  playerSelection = "scissors";
  displayResult.textContent = "Rock, Paper, Scissors!";
  displayResult.style.color = 'white'
  playRound(playerSelection);
});

function playRound(playerSelection) {
  const computerSelection = computerPlay();
  let result = null;
  function computerPlay() {
    let randomNum = Math.floor(Math.random() * 3) + 1;
    if (randomNum === 1) {
      return "rock";
    } else if (randomNum === 2) {
      return "paper";
    } else if (randomNum === 3) {
      return "scissors";
    }
  }
  console.log(`The player picked ${playerSelection}`);
  console.log(`The computer picked ${computerSelection}`);

  if (playerSelection === computerSelection) {
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore += 1;
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    computerScore += 1;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore += 1;
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    computerScore += 1;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore += 1;
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    computerScore += 1;
  }

  if (computerScore == 5) {
    displayResult.textContent = "Computer Wins!";
    displayResult.style.color = 'red';
    playerScore = 0;
    computerScore = 0;
    computerWon += 1;
  } else if (playerScore == 5) {
    displayResult.textContent = "Player Wins!";
    displayResult.style.color ='rgb(12, 209, 12)';
    playerScore = 0;
    computerScore = 0;
    playerWon += 1;
  }



  function winPercentage(playerWon, computerWon) {
    let totalGames = playerWon + computerWon;
    winPercent = (playerWon / totalGames) * 100
    return winPercent.toFixed(1);
  }
  playerChoice.textContent = playerSelection.toUpperCase();
  computerChoice.textContent = computerSelection.toUpperCase();
  displayComputerScore.textContent = computerScore;
  displayPlayerScore.textContent = playerScore;
  displayWinRate.textContent = `${winPercentage(playerWon, computerWon)}%`;
}
