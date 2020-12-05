import React, { useEffect } from "react";

/**
 * @description enables / fires on mount of a component using the hook
 * and executes the passed function
 * @param {function} func
 */
const useMount = func => {
	useEffect(() => {
		func();
	}, []); //eslint-disable-line
};
/**
 * @description fires on unmount due to cleanup of a component using the hook
 * and executes the passed function
 * @param {function} func
 */
const useUnmount = func => {
	useEffect(() => {
		return () => {
			func();
		};
	}, []); //eslint-disable-line
};

export { useMount, useUnmount };
