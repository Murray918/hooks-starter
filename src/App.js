import React, { useState } from "react"

const App = () => {
	const [name, setName] = useState("")

	return (
		<div className="main-wrapper">
			<h1>Level Up Dishes</h1>
			<input
				type="text"
				name="value"
				id="on-changer"
				value={name}
				onChange={event => setName(event.target.value)}
			/>
		</div>
	)
}

export default App
