import React from "react";
import { useMount, useUnmount, useToggle } from "../hooks";

const Mount = () => {
	const { isToggled, toggle } = useToggle(false);

	return (
		<div>
			<button onClick={() => toggle()}>toggle</button>
			{isToggled && <UnMount />}
		</div>
	);
};

export const UnMount = () => {
	useMount(() => {
		console.log("mounting");
	});
	useUnmount(() => console.log("unmounting"));
	return <div>unmount me</div>;
};

export default Mount;
