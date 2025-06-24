// ========================================
// GAME STATE VARIABLES
// ========================================
let humanScore = 0;
let computerScore = 0;
let gameRounds = 0;
const MAX_ROUNDS = 5;

// ========================================
// UTILITY FUNCTIONS
// ========================================

// Get random int between two values, exclusive of max
function getRandomInt() {
    const min = 0;
    const max = 3;
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

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
}

// ========================================
// CORE GAME LOGIC
// ========================================

// Play a round
function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        console.log("It's a tie! Play again.");
        return "tie";
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("You lose! Paper beats Rock.");
        computerScore++;
        return "lose";
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You win! Rock beats scissors.")
        humanScore++;
        return "win";
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("You lose! Scissors beats paper.");
        computerScore++;
        return "lose";
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win! Paper beats rock.");
        humanScore++;
        return "win";
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log("You lose! Rock beats scissors.");
        computerScore++;
        return "lose";
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You win! Scissors beats paper.");
        humanScore++;
        return "win";
    }
}

// ========================================
// UI EVENT HANDLERS
// ========================================

// Handle player choice
function handleChoice(humanChoice) {
    // Check if game is over
    if (gameRounds >= MAX_ROUNDS) {
        const resultDisplay = document.querySelector('.result-display p');
        if (resultDisplay) {
            resultDisplay.textContent = `Game over! Final scores: You ${humanScore} - ${computerScore} Computer`;
        }
        return;
    }
    
    const computerChoice = getComputerChoice();
    const result = playRound(humanChoice, computerChoice);
    
    gameRounds++; // Increment round counter
    
    // Update score display
    const scoreDisplay = document.querySelector('.score-display h2');
    if (scoreDisplay) {
        scoreDisplay.textContent = `Score: You ${humanScore} - ${computerScore} Computer | Round ${gameRounds}/${MAX_ROUNDS}`;
    }
    
    // Update result display
    const resultDisplay = document.querySelector('.result-display p');
    if (resultDisplay) {
        resultDisplay.textContent = `You chose ${humanChoice}, computer chose ${computerChoice}`;
    }
    
    // Check if game is over after this round
    if (gameRounds >= MAX_ROUNDS) {
        const finalResultDisplay = document.querySelector('.result-display p');
        if (finalResultDisplay) {
            finalResultDisplay.textContent = `Game over! Final scores: You ${humanScore} - ${computerScore} Computer`;
        }
        
        // Disable game buttons
        const gameButtons = document.querySelectorAll('button:not(.reset-button)');
        gameButtons.forEach(button => {
            button.disabled = true;
            button.textContent = 'Game Over';
        });
        
        // Show reset button
        const resetButton = document.querySelector('.reset-button');
        if (resetButton) {
            resetButton.style.display = 'block';
        }
    }
}

// Reset game function
function playGame() {
    // Reset game state
    humanScore = 0;
    computerScore = 0;
    gameRounds = 0;
    
    // Re-enable game buttons and restore text
    const gameButtons = document.querySelectorAll('button:not(.reset-button)');
    gameButtons.forEach((button, index) => {
        button.disabled = false;
        const buttonTexts = ['Rock', 'Paper', 'Scissors'];
        button.textContent = buttonTexts[index] || 'Rock';
    });
    
    // Hide reset button
    const resetButton = document.querySelector('.reset-button');
    if (resetButton) {
        resetButton.style.display = 'none';
    }
    
    // Update score display
    const scoreDisplay = document.querySelector('.score-display h2');
    if (scoreDisplay) {
        scoreDisplay.textContent = `Score: You ${humanScore} - ${computerScore} Computer | Round ${gameRounds}/${MAX_ROUNDS}`;
    }
    
    // Reset result display
    const resultDisplay = document.querySelector('.result-display p');
    if (resultDisplay) {
        resultDisplay.textContent = 'New game started! Choose your weapon!';
    }
}

// ========================================
// UI INITIALIZATION
// ========================================

// Initialize UI when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Create UI elements
    const body = document.querySelector('body');
    
    // Create score display
    const scoreDisplay = document.createElement('div');
    scoreDisplay.classList.add('score-display');
    const scoreText = document.createElement('h2');
    scoreText.textContent = `Score: You ${humanScore} - ${computerScore} Computer | Round ${gameRounds}/${MAX_ROUNDS}`;
    scoreDisplay.appendChild(scoreText);
    
    // Create result display
    const resultDisplay = document.createElement('div');
    resultDisplay.classList.add('result-display');
    const resultText = document.createElement('p');
    resultText.textContent = 'Choose your weapon!';
    resultDisplay.appendChild(resultText);
    
    // Create reset button (initially hidden)
    const resetButton = document.createElement('button');
    resetButton.textContent = 'Play Again';
    resetButton.classList.add('reset-button');
    resetButton.style.display = 'none';
    resetButton.addEventListener('click', playGame);
    
    // Create game buttons
    const rock = document.createElement('button');
    const paper = document.createElement('button');
    const scissors = document.createElement('button');
    
    rock.textContent = 'Rock';
    paper.textContent = 'Paper';
    scissors.textContent = 'Scissors';
    
    // Add click event listeners
    rock.addEventListener('click', () => handleChoice('rock'));
    paper.addEventListener('click', () => handleChoice('paper'));
    scissors.addEventListener('click', () => handleChoice('scissors'));
    
    // Add elements to page
    body.appendChild(scoreDisplay);
    body.appendChild(resultDisplay);
    body.appendChild(rock);
    body.appendChild(paper);
    body.appendChild(scissors);
    body.appendChild(resetButton);
});