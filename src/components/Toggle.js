import React from "react";
import PropTypes from "prop-types";
import { useToggle } from "../hooks/useToggle";

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
