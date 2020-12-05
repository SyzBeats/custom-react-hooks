import React from "react";
import { useHover } from "../hooks";
import { Card } from "../Elements";
import black from "../black.png";

const Hover = () => {
	const [isHovered, bind] = useHover();
	console.log(isHovered);
	return (
		<Card
			{...bind}
			style={{ background: isHovered ? "var(--purp)" : "var(--black)" }}
		>
			<h3>Some card</h3>
			<img alt="img" src={black} />
		</Card>
	);
};

export default Hover;
