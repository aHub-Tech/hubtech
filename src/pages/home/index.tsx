import Default from 'layouts/Default'
import Head from 'next/head'
import * as C from 'components'
export default function Home() {
  return (
    <>
      <Head>
        <title>A HUB Tech - Sua Comunidade de Tecnologia Favorita</title>
      </Head>
      <C.Banner />
    </>
  )
}

Home.Layout = Default
