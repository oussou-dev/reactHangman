import React from "react"
import WordsToGuess from "../WordsToGuess/WordsToGuess"
import KeyPad from "../KeyPad/KeyPad"

class GameBoard extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		let words = []
		this.props.wordsToFind.split("").map((word, index) => {
			return words.push(<WordsToGuess key={index} value={word} />)
		})

		return (
			<div>
				<p>{words}</p>
				<KeyPad />
			</div>
		)
	}
}

export default GameBoard
