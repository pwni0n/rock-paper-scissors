function getComputerChoice() {
    const randomNum = Math.random();
    if (randomNum > 2 / 3) {
        return "rock";
    } else if (randomNum < 1 / 3) {
        return "paper";
    }
    return "scissors";
}

function playRound(playerSelection, computerSelection) {
    playerSelection = String(playerSelection).toLowerCase();
    const winMessage = `Round Won! ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}`;
    const loseMessage = `Round Lost! ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}`;
    const tieMessage = "Round Tied!";
    if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
            console.log(winMessage);
            return 1;
        } else if (computerSelection === "rock") {
            console.log(tieMessage);
            return 2;
        }
        console.log(loseMessage);
        return 0;
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            console.log(winMessage);
            return 1;
        } else if (computerSelection === "paper") {
            console.log(tieMessage);
            return 2;
        }
        console.log(loseMessage);
        return 0;
    } else if (playerSelection === "scissors") {
        if (computerSelection === "paper") {
            console.log(winMessage);
            return 1;
        } else if (computerSelection === "scissors") {
            console.log(tieMessage);
            return 2;
        }
        console.log(loseMessage);
        return 0;
    } else {
        console.log("PENALTY: Not a valid input");
        return 0;
    }
}
