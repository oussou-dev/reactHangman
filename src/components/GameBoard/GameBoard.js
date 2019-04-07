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
			return
		}

		// show or not letters found of wordToFind
		let finalWordsToFind = this.state.foundLetters
		for (
			let index = 0;
			index < this.state.wordToFind.length;
			index++
		) {
			const letterInWord = this.state.wordToFind[index]
			if (letterInWord.toLowerCase() === letter.toLowerCase()) {
				finalWordsToFind[index].show = true
			}
		}

		const allValues = Object.values(this.state.foundLetters).map(
			val => val.show
		)
		const status = allValues.every(val => val === true)

		this.setState({
			foundLetters: finalWordsToFind,
			status: status ? "YOU WIN" : "In Progress"
		})
	}

	replay = () => {
		document.location.reload(true)
	}

	render() {
		let words = []
		this.props.wordToFind.split("").map((word, index) => {
			const finalWordsToFind = this.state.foundLetters[index]
			const show = finalWordsToFind.show
			return words.push(
				<LettersToGuess key={index} value={word} found={show} />
			)
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
				{this.state.status === "GAME OVER" && (
					<button
						style={{
							margin: "40px",
							backgroundColor: "white",
							padding: "15px",
							borderColor: "lightgreen",
							fontSize: "15px"
						}}
						type="button"
						onClick={() => this.replay()}
					>
						Rejouer
					</button>
				)}
			</div>
		)
	}
}

export default GameBoard
