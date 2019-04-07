import React from "react"
import "./App.css"
// import LettersToGuess from "./components/LettersToGuess/LettersToGuess"
// import KeyPad from "./components/KeyPad/KeyPad"
import GameBoard from "./components/GameBoard/GameBoard"

class App extends React.Component {
	constructor() {
		super()
		this.state = {
			keyboard: [
				[
					"A",
					"B",
					"C",
					"D",
					"E",
					"F",
					"G",
					"H",
					"I",
					"J",
					"K",
					"L",
					"M"
				],
				[
					"N",
					"O",
					"P",
					"Q",
					"R",
					"S",
					"T",
					"U",
					"V",
					"W",
					"X",
					"Y",
					"Z"
				]
			],
			wordToFind: "lucky"
			// nbTries: null,
			// status: "In Progress"
		}
		this.state.nbTries = this.countNbTries()
	}

	countNbTries = () => {
		const countTries = this.state.wordToFind.length + 3
		return countTries
	}

	// checkLetter = letter => {
	// 	// alert("checkletter:" + letter)
	// 	if (
	// 		this.state.wordToFind
	// 			.lowerToCase()
	// 			.includes(letter.lowerToCase())
	// 	) {
	// 		const nbTries = this.state.nbTries - 1
	// 		const status = nbTries === 0 ? "GAME OVER" : "IN PROGRESS"

	// 		this.setState({
	// 			nbTries: nbTries,
	// 			status: status
	// 		})
	// 	}
	// }

	render() {
		// console.log(this.state.nbTries)
		return (
			<div className="App">
				<h1>HangMan Game with React.js</h1>
				<h2>Bienvenue !</h2>
				{/* <p>Status : {this.state.status}</p>
				<p>Nb d'essais restants : {this.state.nbTries}</p> */}
				{/* <p>Mots à deviner : </p> */}
				<GameBoard
					wordToFind={this.state.wordToFind}
					nbTries={this.state.nbTries}
				/>
			</div>
		)
	}
}

export default App
