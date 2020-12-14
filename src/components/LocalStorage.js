import React from "react";
import { useLocalStorage } from "../hooks";
const LocalStorage = () => {
	const [value, setValue] = useLocalStorage("test", "i am initial");

	return (
		<div>
			<h1>{value || ""}</h1>
			<input
				value={value}
				onChange={e => setValue(e.target.value)}
				type="text"
			/>
		</div>
	);
};

export default LocalStorage;
