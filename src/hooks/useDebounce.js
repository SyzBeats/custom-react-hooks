import { useState, useEffect } from 'react';

function useDebounce(value, delay) {
	const [debouncedValue, setDeboundedValue] = useState(value);

	useEffect(() => {
		const timeout = setTimeout(() => {
			setDeboundedValue(value);
		}, delay);

		return () => clearTimeout(timeout);
	}, [value, delay]);

	return debouncedValue;
}

export default useDebounce;
