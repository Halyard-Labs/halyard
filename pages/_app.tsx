import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Analytics } from '@vercel/analytics/next'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Halyard Labs | AI & Software Consultancy</title>
        <meta
          name="description"
          content="A boutique consultancy helping companies navigate AI adoption, build intelligent systems, and design solutions that evolve."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://halyard.dev/" />
        <meta property="og:title" content="Halyard Labs | AI & Software Consultancy" />
        <meta
          property="og:description"
          content="A boutique consultancy helping companies navigate AI adoption, build intelligent systems, and design solutions that evolve."
        />
        <meta property="og:image" content="/preview.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://halyard.dev/" />
        <meta property="twitter:title" content="Halyard Labs | AI & Software Consultancy" />
        <meta
          property="twitter:description"
          content="A boutique consultancy helping companies navigate AI adoption, build intelligent systems, and design solutions that evolve."
        />
        <meta property="twitter:image" content="/preview.png" />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
      <Analytics />
    </>
  )
}

export default MyApp
