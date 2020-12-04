import { useState } from "react";
/**
 * @description hook to increment or decrement an initial value
 * that will be passed back to the component
 * @param {number} initial
 */
export const useInc = (initial = 0) => {
	const [value, setValue] = useState(initial);

	const inc = () => {
		setValue(prevState => prevState + 1);
	};

	const dec = () => {
		setValue(prevState => prevState - 1);
	};

	// inject functions to be passed
	return [value, { inc, dec }];
};
