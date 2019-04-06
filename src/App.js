import React from "react"
import "./App.css"
import LettersToGuess from "./components/LettersToGuess/LettersToGuess"
import KeyPad from "./components/KeyPad/KeyPad"

class App extends React.Component {
	render() {
		return (
			<div className="App">
				<h1>HangMan Game with React.js</h1>
				<h2>Bienvenue!</h2>
				<p>Nb d'essais restants : ?</p>
				<p>Mot à deveviner : </p>
				<LettersToGuess />
				<KeyPad />
			</div>
		)
	}
}

export default App
