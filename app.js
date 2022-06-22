

function playRound(){
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
    console.log(`The player picked ${playerSelection}`)
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


for(let i = 0; i < 5; i++){
    console.log(playRound())
}