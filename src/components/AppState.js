import React, { createContext, useState, useReducer } from "react";
import { useToggle } from "../hooks";

const AppContext = createContext();

const AppState = ({ children }) => {
	const { isToggled, toggle } = useToggle(false);

	const initialState = {
		isMenuOpen: isToggled,
		toggleMenu: toggle,
	};

	return (
		<AppContext.Provider value={initialState}>{children}</AppContext.Provider>
	);
};

export { AppContext };
export default AppState;
