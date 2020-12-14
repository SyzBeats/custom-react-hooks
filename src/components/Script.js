import React from "react";
import { useScript } from "../hooks";
const Script = () => {
	const [loaded, error] = useScript(
		"https://cdnjs.cloudflare.com/ajax/libs/validator/13.1.17/validator.min.js"
	);
	if (loaded) console.log("loaded");
	if (error) console.log("error..");
	return null;
};

export default Script;
