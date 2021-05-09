// DO NOT REORDER: MUST COME BEFORE BANHMI
import "@moai/core/dist/font/remote.css";
import "@moai/core/dist/bundle.css";
// DO NOT REORDER: MUST COME AFTER MOAI
import "@banhmi/core";
import "@banhmi/core/dist/bundle.css";
import { AppProps } from "next/app";
import Head from "next/head";

const App = ({ Component, pageProps }: AppProps): JSX.Element => (
	<>
		<Head>
			<title>Be UI Kit</title>
			<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
			<meta
				name="viewport"
				content="initial-scale=1.0, width=device-width"
			/>
		</Head>
		<Component {...pageProps} />
	</>
);

export default App;
