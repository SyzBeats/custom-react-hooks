import { useState, useEffect } from "react";

let cached = [];

const useScript = src => {
	const [status, setStatus] = useState({
		loaded: false,
		error: false,
	});

	useEffect(() => {
		if (cached.includes(src)) {
			setStatus({
				error: false,
				loaded: true,
			});
		} else {
			cached.push(src);

			const script = document.createElement("script");
			script.src = src;
			script.async = true;

			const onLoad = () => {
				setStatus({ loaded: true, error: false });
			};

			const onError = () => {
				let srcIdx = cached.findIndex(src);
				if (srcIdx >= 0) cached.splice(srcIdx, 1);

				script.remove();
				setStatus({ loaded: true, error: true });
			};

			script.addEventListener("load", onLoad);
			script.addEventListener("error", onError);

			document.body.appendChild(script);
			return () => {
				script.removeEventListener("load", onLoad);
				script.removeEventListener("error", onError);
			};
		}
	}, [src]);

	return [status.loaded, status.error];
};

export { useScript };
