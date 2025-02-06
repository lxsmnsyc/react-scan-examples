import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { scan } from "react-scan";

export default function App({ Component, pageProps }: AppProps) {
	useEffect(() => {
		scan({
			enabled: true,
		});
	}, []);
	return <Component {...pageProps} />;
}
