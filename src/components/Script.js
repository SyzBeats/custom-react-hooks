import React from "react";
import { useScript } from "../hooks";
const Script = () => {
	const [loaded, error] = useScript(
		"https://cdnjs.cloudflare.com/ajax/libs/validator/13.1.17/validator.min.js"
	);
	return <div>script</div>;
};

export default Script;
