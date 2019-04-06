import React from "react"
import Letter from "../Letter/Letter"

class KeyPad extends React.Component {
	state = {
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

	render() {
		return (
			<div>
				{this.state.keyboard.map(row => {
					return row.map((letter, i) => {
						return <Letter key={i} letter={letter} />
					})
				})}
			</div>
		)
	}
}

export default KeyPad
