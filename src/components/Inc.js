import React from "react";
import { useInc } from "../hooks/useInc";

const Inc = () => {
	const [value, { inc, dec }] = useInc();
	return (
		<div>
			<button onClick={() => inc()}>-</button>
			{value}
			<button onClick={() => dec()}>+</button>
		</div>
	);
};

export default Inc;
