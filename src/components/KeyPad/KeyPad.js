import React from "react"
// import WordPad from "../WordPad/WordPad"
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
		this.state.lettersFound = this.findLetters()
	}

	findLetters = () => {
		let find = {}
		this.state.keyboard.forEach(letterRow => {
			letterRow.forEach(letter => {
				// const letterInWord = this.state.wordToFind
				// 	.toLowerCase()
				// 	.includes(letter.toLowerCase())
				const letterInWord =
					this.state.wordToFind
						.toLowerCase()
						.indexOf(letter.toLowerCase()) > -1
				find[letter] = {
					clicked: false,
					cls: letterInWord ? "found" : "missed"
				}
			})
		})
		return find
	}

	renderBtn = letter => {
		let cls = ""
		if (this.state.lettersFound[letter].clicked) {
			cls = cls + " " + this.state.lettersFound[letter].cls
		}

		const styleBtn = {
			padding: "10px",
			margin: "5px",
			backgroundColor: "white",
			border: "1px solid deepskyblue",
			cursor: "pointer"
		}
		return (
			<button
				key={letter}
				style={styleBtn}
				className={cls}
				onClick={() => this.handleBtnClick(letter)}
			>
				{letter}
			</button>
		)
	}

	handleBtnClick(letter) {
		let found = this.state.lettersFound
		found[letter].clicked = true

		this.setState({
			lettersFound: found
		})

		this.state.letterClickHandler(letter)
	}

	render() {
		let keysPad = this.state.keyboard.map((row, index) => (
			<p key={index}>{row.map(letter => this.renderBtn(letter))}</p>
		))

		return <div>{keysPad}</div>
	}
}

export default KeyPad
