import React from "react";
import { useToggle } from "../hooks";

const Toggle = props => {
	const { isToggled, toggle } = useToggle(false);

	return (
		<div>
			<button onClick={toggle}>Toggle</button>
			{isToggled && <p>To be toggled</p>}
		</div>
	);
};

Toggle.propTypes = {};

export default Toggle;
