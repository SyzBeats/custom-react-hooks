import { useState, useEffect } from "react";
import Cookies from "js-cookie";

const useCookie = ({ key }) => {
	const init = Cookies.get(key);
	const [cookie, setCookieState] = useState(init || "");

	useEffect(() => {
		Cookies.set(key, cookie);
	}, [cookie, key]);

	return [cookie, setCookieState];
};

export { useCookie };
