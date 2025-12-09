const rockButton = document.querySelector(".rock-button")
const paperButton = document.querySelector(".paper-button")
const scissorsButton = document.querySelector(".scissors-button")

const selectRock = () => {
	console.log("Rock")
}

const selectPaper = () => {
	console.log("Paper")
}

const selectScissors = () => {
	console.log("Scissors")
}

const playGame = () => {

}

rockButton.addEventListener("click", selectRock)
paperButton.addEventListener("click", selectPaper)
scissorsButton.addEventListener("click", selectScissors)