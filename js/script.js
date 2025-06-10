
// Get computer choice
function getComputerChoice() {
    let computerChoice = "";
    let randomizer = getRandomInt();
    if (randomizer === 0) {
        computerChoice = "rock";
    } else if (randomizer === 1) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }

    return computerChoice;
    //console.log(computerChoice);
}

// Get random int between two values, exclusive of max
function getRandomInt() {
    const min = 0;
    const max = 3;
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
  }

// Get human choice
function getHumanChoice() {
    let choice = prompt("What is your choice? ");
    return choice;
    //console.log(choice);
    }


function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let gameRounds = 0;

    // Play a round
    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();

        if (humanChoice === computerChoice) {
            console.log("It's a tie! Play again.");
        } else if (humanChoice === "rock" && computerChoice === "paper") {
            console.log("You lose! Paper beats Rock.");
            computerScore++;
        } else if (humanChoice === "rock" && computerChoice === "scissors") {
            console.log("You win! Rock beats scissors.")
            humanScore++;
        } else if (humanChoice === "paper" && computerChoice === "scissors") {
            console.log("You lose! Scissors beats paper.");
            computerScore++;
        } else if (humanChoice === "paper" && computerChoice === "rock") {
            console.log("You win! Paper beats rock.");
            humanScore++;
        } else if (humanChoice === "scissors" && computerChoice === "rock") {
            console.log("You lose! Rock beats scissors.");
            computerScore++;
        } else if (humanChoice === "scissors" && computerChoice === "paper") {
            console.log("You win! Scissors beats paper.");
            humanScore++;
        }
    }

    while (gameRounds < 5) {
        playRound(getHumanChoice(), getComputerChoice());
        gameRounds++;
    }

    console.log(`Final scores -- Human: ${humanScore}, Computer: ${computerScore}.`);
}

playGame();