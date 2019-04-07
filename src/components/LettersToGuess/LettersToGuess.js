import React from "react"
import "../LettersToGuess/LettersToGuess.css"

class LettersToGuess extends React.Component {
	render() {
		return (
			<span className="letterToGuess">
				{this.props.found ? this.props.value : ""}
			</span>
		)
	}
}

export default LettersToGuess
