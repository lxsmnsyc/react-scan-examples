import { type JSX, useEffect, useState } from "react";

export function Count(): JSX.Element {
	const [count, setCount] = useState(0);

	useEffect(() => {
		const id = setInterval(() => {
			setCount((c) => c + 1);
		}, 1000);

		return () => clearInterval(id);
	}, []);

	return <div>Count: {count}</div>;
}
