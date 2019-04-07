import React from "react"
import LettersToGuess from "../LettersToGuess/LettersToGuess"
import KeyPad from "../KeyPad/KeyPad"

class GameBoard extends React.Component {
	constructor(props) {
		super(props)

		const wordToFind = props.wordToFind
		const foundLetters = wordToFind.split("")
		const foundWordToFind = {}

		foundLetters.forEach((letter, index) => {
			foundWordToFind[index] = { letter: letter, show: false }
		})

		this.state = {
			wordToFind: wordToFind,
			foundLetters: foundWordToFind,
			nbTries: parseInt(props.nbTries),
			status: "playing"
		}

		this.checkLetterHandler = this.checkLetter.bind(this)
	}

	checkLetter(letter) {
		alert("checkletter:" + letter)
	}

	render() {
		console.log(this.state.nbTries)
		let words = []
		this.props.wordToFind.split("").map((word, index) => {
			return words.push(<LettersToGuess key={index} value={word} />)
		})

		return (
			<div>
				<p>{words}</p>
				<KeyPad
					wordToFind={this.props.wordToFind}
					letterClick={this.checkLetterHandler}
				/>
			</div>
		)
	}
}

export default GameBoard
