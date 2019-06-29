import React, { useState, useContext } from "react"
import { UserContext } from "../App"

export default ({ children }) => {
	const [isToggled, setIsToggled] = useState(false)

	const userInfo = useContext(UserContext)

	const handleToggle = () => {
		setIsToggled(!isToggled)
	}

	if (!userInfo) return null

	return (
		<div>
			<button onClick={handleToggle}>Toggle</button>
			{isToggled && children}
		</div>
	)
}
