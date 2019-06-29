import React, { useState } from "react"
import Toggle from "./Toggle"

const App = () => {
	const [name, setName] = useState("")

	return (
		<div className="main-wrapper">
			<h1>Level Up Dishes</h1>
			<Toggle />
			<form
				onSubmit={event => {
					event.preventDefault()
					formSubmit(name, setName)
				}}
			>
				<input
					type="text"
					name="value"
					id="on-changer"
					value={name}
					onChange={event => setName(event.target.value)}
				/>
			</form>
		</div>
	)
}

const formSubmit = (value, setValue) => {
	console.log(`hello the form has submitted for ${value}`)
	setValue("")
}

export default App
