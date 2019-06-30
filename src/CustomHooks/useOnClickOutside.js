import { useEffect } from "react"

export default function useOnClickOutside(ref, handler) {
	useEffect(() => {
		const listener = event => {
			if (!ref.current || ref.current.contains(event.target)) {
				console.log(ref.current)
				return
			}
			handler()
		}

		document.addEventListener("mousedown", listener)
		document.addEventListener("touchstart", listener)
		//cleanup listeners
		return () => {
			document.removeEventListener("mousedown", listener)
			document.removeEventListener("touchstart", listener)
		}
	}, [])
}
