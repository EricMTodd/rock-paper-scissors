// Global constants
const selectionOptions = ["Rock", "Paper", "Scissors"]


// UI constants
// Buttons
const rockButton = document.querySelector(".rock-button")
const paperButton = document.querySelector(".paper-button")
const scissorsButton = document.querySelector(".scissors-button")
const lockInSelectionButton = document.querySelector(".lock-in-selection-button")
// Display
const displayPlayerChoice = document.querySelector(".display-player-choice")
const displayComputerScore = document.querySelector(".display-computer-score")
const displayPlayerScore = document.querySelector(".display-player-score")


// Gobal variables
let computerChoice = ""
let playerChoice = ""
let computerScore = 0
let playerScore = 0


// Function declarations
// Player controls
const selectRock = () => {
	displayPlayerChoice.textContent = `Selected: ${selectionOptions[0]}`
	return playerChoice = selectionOptions[0]
}

const selectPaper = () => {
	displayPlayerChoice.textContent = `Selected: ${selectionOptions[1]}`
	return playerChoice = selectionOptions[1]
}

const selectScissors = () => {
	displayPlayerChoice.textContent = `Selected: ${selectionOptions[2]}`
	return playerChoice = selectionOptions[2]
}

// Computer controls
const getComputerChoice = () => {
	return selectionOptions[Math.floor(Math.random() * 3)]
}
// Core events
const initialize = () => {
	computerScore = 0
	playerScore = 0
	playerChoice = ""
	displayPlayerChoice.textContent = "Click a button to make your selection"
	displayComputerScore.textContent = `Score: ${computerScore}`
	displayPlayerScore.textContent = `Score: ${playerScore}`
}

const evaluateScore = () => {
	computerChoice = getComputerChoice()

	if (playerChoice === computerChoice) {
		alert("It's a tie!")
	}
	if (playerChoice === "Rock") {
		if (computerChoice === "Scissors") {
			playerScore++
			displayPlayerScore.textContent = `Score: ${playerScore}`
			alert("Rock beats scissors, you win!")
		}
		if (computerChoice === "Paper") {
			computerScore++
			displayComputerScore.textContent = `Score: ${computerScore}`
			alert("Paper beats rock, you lose!")
		}
	}
	if (playerChoice === "Paper") {
		if (computerChoice === "Rock") {
			playerScore++
			displayPlayerScore.textContent = `Score: ${playerScore}`
			alert("Paper beats rock, you win!")
		}
		if (computerChoice === "Scissors") {
			computerScore++
			displayComputerScore.textContent = `Score: ${computerScore}`
			alert("Scissors beats paper, you lose!")
		}
	}
	if (playerChoice === "Scissors") {
		if (computerChoice === "Paper") {
			playerScore++
			displayPlayerScore.textContent = `Score: ${playerScore}`
			alert("Scissors beats paper, you win!")
		}
		if (computerChoice === "Rock") {
			computerScore++
			displayComputerScore.textContent = `Score: ${computerScore}`
			alert("Rock beats scissors, you lose!")
		}
	}
	if (computerScore === 3 || playerScore === 3) {
		if (computerScore === 3) {
			alert("YOU LOSE!")
		}
		if (playerScore === 3) {
			alert("YOU WIN!")
		}
	initialize()
	}
	return
}

initialize()


// Event listeners
rockButton.addEventListener("click", selectRock)
paperButton.addEventListener("click", selectPaper)
scissorsButton.addEventListener("click", selectScissors)
lockInSelectionButton.addEventListener("click", evaluateScore)