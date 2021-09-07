import { Fragment } from 'react'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Router from 'next/router'
import NProgress from 'nprogress'
import GlobalStyles from 'styles/GlobalStyles'
import { Page } from 'types/page'
import 'styles/loading.css'
import * as C from 'components'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

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
