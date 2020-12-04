import React from "react";
import { useInc } from "../hooks/useInc";

/**
 * @description increent and decrement values
 * @returns {React.DOMElement} Element containing the buttons
 */
const Inc = () => {
	const [value, { inc, dec, reset }] = useInc({
		maxValue: 10,
		minValue: -10,
		value: 0,
		step: 3,
	});
	return (
		<div>
			<button onClick={() => dec()}>-</button>
			{value}
			<button onClick={() => inc()}>+</button>
			<button onClick={() => reset()}>Reset</button>
		</div>
	);
};

export default Inc;
