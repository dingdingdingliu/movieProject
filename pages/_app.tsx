import '../styles/globals.css'
import Head from 'next/head'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
	const title = '有影'
	return (
		<div>
			<Head>
				<title>{title}</title>
				<meta
					name="viewport"
					content="minimum-scale=1, initial-scale=1, width=device-width"
      	/>
			</Head>
			<Component {...pageProps} />
		</div>
	)
}

export default MyApp
