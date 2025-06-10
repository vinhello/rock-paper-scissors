

getComputerChoice();

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
  