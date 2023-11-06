function getComputerChoice() {
    const randomNum = Math.random();
    if (randomNum > 2 / 3) {
        return "rock";
    } else if (randomNum < 1 / 3) {
        return "paper";
    }
    return "scissors";
}

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
    const winMessage = `Round Won! ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}`;
    const loseMessage = `Round Lost! ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}`;
    const tieMessage = "Round Tied!";
    if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
            displayResult(winMessage);
            incrementScore("player");
        } else if (computerSelection === "rock") {
            displayResult(tieMessage);
        } else {
            displayResult(loseMessage);
            incrementScore("computer");
        }
        
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            displayResult(winMessage);
            incrementScore("player");
        } else if (computerSelection === "paper") {
            displayResult(tieMessage);
        } else {
            displayResult(loseMessage);
            incrementScore("computer");
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "paper") {
            displayResult(winMessage);
            incrementScore("player");
        } else if (computerSelection === "scissors") {
            displayResult(tieMessage);
        } else {
            displayResult(loseMessage);
            incrementScore("computer");
        }
    }
}

let lastResult;

function displayResult(result) {
    const resultsDiv = document.querySelector(".results");
    const p = document.createElement("p");
    p.textContent = result;
    lastResult ? resultsDiv.insertBefore(p, lastResult) : resultsDiv.appendChild(p);
    lastResult = p;
}

function incrementScore(player) {
    let score;
    if (player === "player") {
        ++playerScore;
        score = document.querySelector(".player");
        score.textContent = `YOU: ${playerScore}`;
    } else {
        ++computerScore;
        score = document.querySelector(".computer");
        score.textContent = `COMPUTER: ${computerScore}`;
    }
}

const buttons = document.querySelector(".btns");

buttons.addEventListener("click", e => {
    playRound(e.target.className, getComputerChoice());
});