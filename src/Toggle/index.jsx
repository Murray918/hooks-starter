import React, { useState, useContext } from "react"
import { UserContext } from "../App"
import DishForm from "../DishForm"

export default () => {
	const [isToggled, setIsToggled] = useState(false)

	const userInfo = useContext(UserContext)

	const handleToggle = () => {
		setIsToggled(!isToggled)
	}

	if (!userInfo) return null

	return (
		<div>
			{isToggled ? (
				<DishForm setIsToggled={setIsToggled} />
			) : (
				<button onClick={handleToggle}>Toggle</button>
			)}
		</div>
	)
}
