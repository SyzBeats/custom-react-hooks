import React from "react";
import { useCookie } from "../hooks";
const Cookie = () => {
	const [cookie, setCookie] = useCookie({ key: "testCookie" });
	if (typeof cookie !== "string") return null;

	return (
		<div>
			<h1>{cookie || ""}</h1>
			<input
				value={cookie}
				onChange={e => setCookie(e.target.value)}
				type="text"
			/>
		</div>
	);
};

export default Cookie;
