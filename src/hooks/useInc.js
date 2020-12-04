import { useState } from "react";
/**
 * @description hook to increment or decrement an initial value
 * that will be passed back to the component
 * @param {number} initial
 */
export const useInc = ({
	maxValue = 10000,
	minValue = -10000,
	initial = 0,
	step,
}) => {
	const [value, setValue] = useState(initial);

	const inc = () => {
		setValue(prevState =>
			prevState + step > maxValue ? maxValue : prevState + step
		);
	};

	const dec = () => {
		setValue(prevState =>
			prevState - step < minValue ? minValue : prevState - step
		);
	};

	const reset = () => {
		setValue(initial);
	};

	// inject functions to be passed
	return [value, { inc, dec, reset }];
};
