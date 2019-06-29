import React, { useRef, createContext, useMemo } from "react"
import Toggle from "./Toggle"
import useTitleInput from "./FormHooks"

export const UserContext = createContext()

const App = () => {
	const [name, setName] = useTitleInput("")
	const ref = useRef()

	return (
		<UserContext.Provider value={{ user: true }}>
			<div
				className="main-wrapper"
				ref={ref}
				onClick={() => ref.current.classList.add("new-party-class")}
			>
				<h1>Level Up Dishes</h1>
				<Toggle>
					<form
						onSubmit={event => {
							event.preventDefault()
						}}
					>
						<input
							type="text"
							name="value"
							value={name}
							onChange={event => setName(event.target.value)}
						/>
					</form>
				</Toggle>
				{/* <Counter /> */}
			</div>
		</UserContext.Provider>
	)
}

export default App
