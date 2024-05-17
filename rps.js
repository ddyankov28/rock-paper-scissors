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
    const player = document.querySelector('.player');
    player.querySelectorAll('.select').forEach(button =>{
        button.addEventListener('click')
    })


}

let won = 0
let draw = 0
let lost = 0


playGame()