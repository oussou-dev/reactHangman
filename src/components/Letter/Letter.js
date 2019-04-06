import React from "react"

const styles = {
	padding: "5px",
	margin: "5px",
	backgroundColor: "white",
	border: "1px solid deepskyblue"
}

const Letter = ({ letter }) => {
	return <span style={styles}>{letter}</span>
}

export default Letter
