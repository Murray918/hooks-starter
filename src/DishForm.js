import React from "react"
import { useBodyScrollLock } from "./CustomHooks"
export default () => {
	useBodyScrollLock()
	return (
		<div className="dish-card">
			<form action="">
				<div className="form-row">
					<label htmlFor="name">Name :</label>
					<input type="text" id="name" />
				</div>
			</form>
		</div>
	)
}
