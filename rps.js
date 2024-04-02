function playRound(playerSelection, computerSelection)
{
    if ((playerSelection === "rock" && computerSelection === "rock")
        || (playerSelection === "paper" && computerSelection === "paper")
        || (playerSelection === "scissors" && computerSelection === "scissors"))
        return "drew";
    else if ((playerSelection === "rock" && computerSelection === "scissors")
        || (playerSelection === "paper" && computerSelection === "rock")
        || (playerSelection === "scissors" && computerSelection === "paper"))
        return "won";
    else if ((playerSelection === "rock" && computerSelection === "paper")
        || (playerSelection === "paper" && computerSelection === "scissors")
        || (playerSelection === "scissors" && computerSelection === "rock"))
        return "lost";
}

function getComputerChoice(){
    let num = Math.floor(Math.random() * 3)
    if (num === 0)
        return "rock"
    else if (num === 1)
        return "paper"
    else
        return "scissors"
}




function playGame(){

    let roundScore = 0;

    rockButton.addEventListener("click", () =>{ 
        roundMessage.textContent = "This round you "; 
        roundScore = playRound("rock", getComputerChoice());
        roundMessage.textContent += roundScore;
    });
    paperButton.addEventListener("click", () => {
        roundMessage.textContent = "This round you ";
        roundScore = playRound("paper", getComputerChoice());
        roundMessage.textContent += roundScore;
    });
    scissorsButton.addEventListener("click", () => {
        roundMessage.textContent = "This round you ";
        roundScore = playRound("scissors", getComputerChoice());
        roundMessage.textContent += roundScore;
    });
}

let won = 0
let draw = 0
let lost = 0

const container = document.querySelector("#container");
const rockButton = document.createElement("button");
const paperButton = document.createElement("button");
const scissorsButton = document.createElement("button");
const roundMessage = document.createElement("h1");
const myScore = document.createElement("h1");
const computerScore = document.createElement("h1");

rockButton.textContent = "Rock";
paperButton.textContent = "Paper";
scissorsButton.textContent = "Scissors";

container.appendChild(rockButton);
container.appendChild(paperButton); 
container.appendChild(scissorsButton);

roundMessage.textContent = "This round you ";
container.appendChild(roundMessage);

playGame()