import React, { useReducer } from "react"

const initialState = { count: 0 }

const Counter = () => {
	const [state, dispatch] = useReducer(reducer, initialState)

	return (
		<div>
			<div>
				<h3>{state.count}</h3>
			</div>
			<button onClick={() => dispatch({ type: "ADD", value: 10 })}>+</button>
			<button onClick={() => dispatch({ type: "MINUS", value: 10 })}>-</button>
			<button onClick={() => dispatch({ type: "RESET" })}>RESET</button>
		</div>
	)
}

export default Counter

//here is our reducer
function reducer(state, action) {
	switch (action.type) {
		case "ADD":
			return {
				count: state.count + action.value
			}
		case "MINUS":
			return {
				count: state.count - action.vale
			}
		case "RESET":
			return {
				count: initialState.count
			}
		default:
			throw new Error("OOPS something went wrong")
	}
}
