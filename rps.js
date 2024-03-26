function getComputerChoice()
{
    return Math.floor(Math.random() * 3)
}

function playRound(playerSelection, computerSelection)
{
    if ((playerSelection === "rock" && computerSelection === "rock")
        || (playerSelection === "paper" && computerSelection === "paper")
        || (playerSelection === "scissors" && computerSelection === "scissors"))
        return "draw";
    else if ((playerSelection === "rock" && computerSelection === "scissors")
        || (playerSelection === "paper" && computerSelection === "rock")
        || (playerSelection === "scissors" && computerSelection === "paper"))
        return "win";
    else if ((playerSelection === "rock" && computerSelection === "paper")
        || (playerSelection === "paper" && computerSelection === "scissors")
        || (playerSelection === "scissors" && computerSelection === "rock"))
        return "lose";
}

function convertToString(){
    let num = getComputerChoice()
    if (num === 0)
        return "rock"
    else if (num === 1)
        return "paper"
    else
        return "scissors"
}

function playGame(){
    let won = 0
    let draw = 0
    let lost = 0
    
    for (let i = 0; i < 5; i++)
    {
        let userInput = prompt("Rock, Paper or Scissors\n>>> 5 Rounds <<<\nEnter your choice")
        let playerSelection = userInput.toLowerCase()
        if (playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors")
        {
            console.log("Wrong input, Try again")
            i -= 1
            continue        
        }
        let computerSelection = convertToString()
        let roundResult = playRound(playerSelection, computerSelection)
        if (roundResult === "win")
            won++
        else if (roundResult === "lose")
            lost++
        else
            draw++
        console.log(roundResult)
    }
    console.log("You won " + won + ", drew " + draw + " and lost " + lost + " rounds in this game")
}

playGame()