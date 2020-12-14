import { useState, useEffect } from "react";

const useLocalStorage = (key, init) => {
	const item = window.localStorage.getItem(key);
	const [value, setValue] = useState(item || init);

	useEffect(() => {
		window.localStorage.setItem(key, value);
	}, [value, key, init]);

	return [value, setValue];
};

export { useLocalStorage };
