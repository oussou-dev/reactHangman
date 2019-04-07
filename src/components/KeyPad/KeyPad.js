import React from "react"
import WordPad from "../WordPad/WordPad"
import "./KeyPad.css"

class KeyPad extends React.Component {
	constructor(props) {
		super(props)

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
			wordToFind: props.wordToFind,
			lettersFound: {},
			letterClickHandler: props.letterClick
		}
		this.state["lettersFound"] = this.findLetters()
	}

	findLetters = () => {
		let find = {}
		this.state.keyboard.forEach(letterRow => {
			letterRow.forEach(letter => {
				const letterInWord = this.state.wordToFind
					.toLowerCase()
					.includes(letter.toLowerCase())
				find[letter] = {
					clicked: false,
					cls: letterInWord ? "found" : "missed"
				}
			})
			return find
		})
	}

	clickLetterHandler(btn) {
		console.log(btn)
	}

	render() {
		let keysPad = this.state.keyboard.map((row, index) => (
			<p key={index}>
				{row.map((word, i) => (
					<WordPad
						key={i}
						letter={word}
						clickLetter={this.state.letterClickHandler}
					/>
				))}
			</p>
		))

		return <div>{keysPad}</div>
	}
}

export default KeyPad
