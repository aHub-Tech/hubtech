import { Fragment } from 'react'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import GlobalStyles from 'styles/GlobalStyles'
import { Page } from 'types/page'
import * as C from 'components'

type Props = AppProps & { Component: Page }

export default function App({ Component, pageProps }: Props) {
  const Layout = Component.Layout || Fragment

  return (
    <>
      <Layout>
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />
          <title>Hubtech</title>
        </Head>

        <Component {...pageProps} />

        <GlobalStyles />
      </Layout>
      <C.VLibras />
    </>
  )
}
