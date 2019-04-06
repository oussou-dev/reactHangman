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
			]
		}

		this.checkLetterHandler = this.clickLetterHandler.bind(this)
	}

	clickLetterHandler(btn) {
		console.log(btn)
	}

	render() {
		let keysPad = this.state.keyboard.map(row => (
			<p>
				{row.map((word, i) => (
					<WordPad
						key={i + word}
						word={word}
						clickLetter={this.clickLetterHandler()}
					/>
				))}
			</p>
		))

		return <div>{keysPad}</div>
	}
}

export default KeyPad
