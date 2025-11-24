let computerScore = 0
let userScore = 0

const getComputerChoice = () => {
	let choice = Math.floor(Math.random() * 3)
	if (choice === 0) {
		return "rock"
	}
	if (choice === 1) {
		return "paper"
	}
	if (choice === 2) {
		return "scissors"
	}
}

const getUserChoice = () => {
	let userChoice = prompt("Please type rock, paper or scissors to make your play.")
	return userChoice
}

const playRound = (computerChoice, userChoice) => {
	userChoice = userChoice.toLowerCase()

	// Computer chooses rock
	if (computerChoice === "rock" && userChoice === "rock") {
		console.log("It's a tie!")
	}
	if (computerChoice === "rock" && userChoice === "paper") {
		console.log("You win! Paper beats rock.")
		userScore++
	}
	if (computerChoice === "rock" && userChoice === "scissors") {
		console.log("You lose! Rock beats scissors")
		computerScore++
	}

	// Computer chooses paper
	if (computerChoice === "paper" && userChoice === "paper") {
		console.log("It's a tie!")
	}
	if (computerChoice === "paper" && userChoice === "scissors") {
		console.log("You win! Scissors beats paper.")
		userScore++
	}
	if (computerChoice === "paper" && userChoice === "rock") {
		console.log("You lose! Paper beats rock.")
		computerScore++
	}

	// Computer chooses scissors
	if (computerChoice === "scissors" && userChoice === "scissors") {
		console.log("It's a tie!")
	}
	if (computerChoice === "scissors" && userChoice === "rock") {
		console.log("You win! Rock beats paper.")
		userScore++
	}
	if (computerChoice === "scissors" && userChoice === "paper") {
		console.log("You lose! Scissors beats paper.")
		computerScore++
	}

	// Assess win condition
	if (computerScore < 3 && userScore < 3) {
		playRound(getComputerChoice(), getUserChoice())
	} else {
		if (computerScore > userScore) {
			console.log("You've lost, better luck next time!")
		} else {
			console.log("Winner, winner, chicken dinner!")
		} 
		return
	}
}

const playGame = () => {
	playRound(getComputerChoice(), getUserChoice())
}

playGame()