import { useState } from "react";

/**
 * @description: custom hook - toggles a value true or false
 * @param {boolean} initial
 */
export const useToggle = initial => {
	const [isToggled, setToggled] = useState(initial);
	const toggle = () => setToggled(prevState => !prevState);
	return { isToggled, setToggled, toggle };
};
