import { useState, useEffect } from "react";

const useLocalStorage = (key, init) => {
	const [value, setValue] = useState(init);

	useEffect(() => {
		window.localStorage.setItem(key, value);
	}, [value, key]);

	return [value, setValue];
};

export { useLocalStorage };
