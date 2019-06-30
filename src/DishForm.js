import React, { useRef } from "react"
import { useBodyScrollLock, useOnClickOutside } from "./CustomHooks"

export default ({ setIsToggled }) => {
	const ref = useRef()

	//lock the body scrolling while form is active
	useBodyScrollLock()

	//this lets user click outside the form to deactivate its lock
	useOnClickOutside(ref, () => setIsToggled(false)) //it will be set to undefined if we dont wrap it in a anon func
	return (
		<div className="dish-card" ref={ref}>
			<form action="">
				<div className="form-row">
					<label htmlFor="name">Name :</label>
					<input type="text" id="name" />
				</div>
			</form>
		</div>
	)
}
