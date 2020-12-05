import React, { useMemo, useState } from "react";

/**
 * @description creates a binding object for any component to check if the component is currently hovered.
 * Then also returns the current state
 * @returns {[boolean, object]}
 */
const useHover = () => {
	const [isHovered, setIsHovered] = useState(false);

	const bind = useMemo(() => {
		return {
			onMouseOver: () => setIsHovered(true),
			onMouseOut: () => setIsHovered(false),
		};
	}, []);
	return [isHovered, bind];
};

export { useHover };
