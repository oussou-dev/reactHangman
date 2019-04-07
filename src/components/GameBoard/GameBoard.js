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
			status: "In Progress"
		}

		this.checkLetterHandler = this.checkLetter.bind(this)
	}

	checkLetter(letter) {
		// alert("checkletter:" + letter)
		// console.log(this.state.wordToFind.toLowerCase())
		if (
			!this.state.wordToFind
				.toLowerCase()
				.includes(letter.toLowerCase())
		) {
			const nbTries = this.state.nbTries - 1
			const status = nbTries === 0 ? "GAME OVER" : "In Progress"

			this.setState({
				nbTries: nbTries,
				status: status
			})
		}
	}

	render() {
		let words = []
		this.props.wordToFind.split("").map((word, index) => {
			return words.push(<LettersToGuess key={index} value={word} />)
		})

		return (
			<div>
				<p
					style={{
						marginTop: "40px",
						textDecoration: "underline"
					}}
				>
					Status : {this.state.status}
				</p>
				<p>Nb d'essai(s) restant(s) : {this.state.nbTries}</p>
				<p
					style={{
						fontWeight: "bold",
						fontSize: "20px",
						marginTop: "40px"
					}}
				>
					Mot à deviner
				</p>
				<p>{words}</p>
				{this.state.status === "In Progress" && (
					<KeyPad
						style={{
							marginTop: "150px"
						}}
						wordToFind={this.props.wordToFind}
						letterClick={this.checkLetterHandler}
					/>
				)}
			</div>
		)
	}
}

export default GameBoard
