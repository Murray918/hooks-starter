import React, { useRef, useState, createContext, useEffect } from "react"
import Toggle from "./Toggle"
import useAbortableFetch from "use-abortable-fetch"
import { useTitleInput } from "./CustomHooks"

export const UserContext = createContext()

const App = () => {
	const url = "https://my-json-server.typicode.com/leveluptuts/fakeapi/dishes"

	//this is the the ref we use to actually interact with the dom
	const ref = useRef()

	const { data } = useAbortableFetch(url)

	if (!data) return null

	return (
		<UserContext.Provider value={{ user: true }}>
			<div
				className="main-wrapper"
				ref={ref}
				onClick={() => ref.current.classList.add("new-party-class")}
			>
				<h1>Level Up Dishes</h1>
				<Toggle />
				<div>
					{data.map((dish, index) => {
						return (
							<article className="dish-card dish-card--withImage" key={index}>
								<h3>{dish.name}</h3>
								<p>{dish.desc}</p>
								<div className="ingredients">
									{dish.ingredients.map((ingredient, index) => (
										<span key={index}>{ingredient}</span>
									))}
								</div>
							</article>
						)
					})}
				</div>
			</div>
		</UserContext.Provider>
	)
}

export default App

// all of these functions below could be extracted into other files
async function fetchDishes(url, setState) {
	const result = await fetch(url)
	const data = await result.json()
	setState(data)
}

function submitForm(state) {
	console.log(state)
}
