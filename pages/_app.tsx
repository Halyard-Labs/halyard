import type { AppProps } from 'next/app'
import Head from 'next/head'
import Grid from '../components/grid'
import Footer from '../components/footer'
import Nav from '../components/nav'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Grid>
      <Head>
        <title>Halyard Software Consulting</title>
        <meta
          name="description"
          content="Halyard is an Australia-based software solutions consultancy."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://halyard.dev/" />
        <meta property="og:title" content="Halyard Software Consulting" />
        <meta
          property="og:description"
          content="Halyard is a boutique software and design consultancy helping to empower growing companies."
        />
        <meta property="og:image" content="/preview.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://halyard.dev/" />
        <meta property="twitter:title" content="Halyard Software Consulting" />
        <meta
          property="twitter:description"
          content="Halyard is a boutique software and design consultancy helping to empower growing companies."
        />
        <meta property="twitter:image" content="/preview.png" />

        <link rel="icon" href="/favicon.ico" />
        <script async src="https://cdn.splitbee.io/sb.js" />
      </Head>
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </Grid>
  )
}

export default MyApp
