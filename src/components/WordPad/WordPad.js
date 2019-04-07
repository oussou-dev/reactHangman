import React from "react"

const styles = {
	padding: "10px",
	margin: "5px",
	backgroundColor: "white",
	border: "1px solid deepskyblue",
	cursor: "pointer"
}

const WordPad = ({ letter, clickLetter }) => {
	return (
		<button style={styles} onClick={() => clickLetter(letter)}>
			{letter}
		</button>
	)
}

export default WordPad
