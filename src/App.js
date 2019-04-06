import React from "react"
import "./App.css"
import WordsToGuess from "./components/WordsToGuess/WordsToGuess"
import KeyPad from "./components/KeyPad/KeyPad"
import GameBoard from "./components/GameBoard/GameBoard"

class App extends React.Component {
	state = {
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
		]
	}

	render() {
		return (
			<div className="App">
				<h1>HangMan Game with React.js</h1>
				<h2>Bienvenue!</h2>
				<p>Nb d'essais restants : ?</p>
				<p>Mots à deviner : </p>
				<GameBoard wordsToFind="lucky" />
			</div>
		)
	}
}

export default App
