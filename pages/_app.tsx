import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({
	Component,
	pageProps: { session, ...pageProps },
}: AppProps) {
	return (
		<SessionProvider session={session}>
			<Head>
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/images/favicon/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/images/favicon/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/images/favicon/favicon-16x16.png"
				/>
				<link rel="manifest" href="/site.webmanifest" />
				<title>Netflix</title>
			</Head>
			<Component {...pageProps} />
		</SessionProvider>
	);
}
