import React from "react"
import LettersToGuess from "../LettersToGuess/LettersToGuess"
import KeyPad from "../KeyPad/KeyPad"

class GameBoard extends React.Component {
	constructor(props) {
		super(props)

		this.checkLetterHandler = this.checkLetter.bind(this)
	}

	checkLetter(letter) {
		alert("checkletter:" + letter)
	}

	render() {
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
