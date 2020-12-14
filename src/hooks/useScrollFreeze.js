import { useLayoutEffect } from "react";

const useScrollFreeze = () => {
	useLayoutEffect(() => {
		const initial = window.getComputedStyle(document.body).overflow;

		document.body.style.overflow = "hidden";

		return () => {
			document.body.style.overflow = initial;
		};
	}, []);
};

export { useScrollFreeze };
