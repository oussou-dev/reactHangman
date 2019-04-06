import React from "react"
import "../WordsToGuess/WordsToGuess.css"

class WordsToGuess extends React.Component {
	render() {
		return <span className="wordToGuess">{this.props.value}</span>
	}
}

export default WordsToGuess
