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
let currentRound = 0;

function playRound(playerSelection, computerSelection) {
    if (playerScore === 5 || computerScore === 5) return;
    const winMessage = `Round Won! ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}`;
    const loseMessage = `Round Lost! ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}`;
    const tieMessage = "Round Tied!";
    currentRound++;
    if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
            incrementScore("player");
            displayResult(winMessage);
        } else if (computerSelection === "rock") {
            displayResult(tieMessage);
        } else {
            incrementScore("computer");
            displayResult(loseMessage);
        }       
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            incrementScore("player");
            displayResult(winMessage);          
        } else if (computerSelection === "paper") {
            displayResult(tieMessage);
        } else {
            incrementScore("computer");
            displayResult(loseMessage);          
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "paper") {
            incrementScore("player");
            displayResult(winMessage);       
        } else if (computerSelection === "scissors") {
            displayResult(tieMessage);
        } else {
            incrementScore("computer");
            displayResult(loseMessage);
        }
    }
}

let lastResult;

function displayResult(result) {
    const resultsDiv = document.querySelector(".results");
    const p = document.createElement("p");
    if (playerScore < 5 && computerScore < 5) {
        p.textContent = `${currentRound} - ${result}`;
    } else if (playerScore === 5) {
        p.textContent = "YOU WIN! Game over.";
        p.style.backgroundColor = "#28cc25";
        p.style.color = "white";
    } else {
        p.textContent = "YOU LOSE! Game over.";
        p.style.backgroundColor = "#ff4242";
        p.style.color = "white";
    }
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

const buttons = document.querySelectorAll("button");

buttons.forEach(btn => btn.addEventListener("click", e => {
    playRound(e.target.className, getComputerChoice());
}));