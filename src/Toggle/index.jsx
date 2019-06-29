import React, { useState } from "react"

export default () => {
	const [isToggled, setIsToggled] = useState(false)

	const handleToggle = () => {
		setIsToggled(!isToggled)
	}
	return (
		<div>
			<button onClick={handleToggle}>Toggle</button>
			{isToggled && <h2>Hello!</h2>}
		</div>
	)
}
