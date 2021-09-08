// import axios from 'axios'
import Default from 'layouts/Default'
// import { GetServerSideProps } from 'next'
import Head from 'next/head'
import * as S from 'pages/home/styles'
import * as C from 'components'

export default function Home() {
  return (
    <>
      <Head>
        <title>Página Inicial</title>
      </Head>
      <C.Title as="h3" title="Teste" />
      <S.Container>Home</S.Container>
    </>
  )
}

Home.Layout = Default

/* export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const { tokenHubtech } = req.cookies

  if (!tokenHubtech) {
    return {
      redirect: {
        destination: '/signin',
        permanent: false
      }
    }
  }

  let dataExample = await axios.get(`${baseURL}/dashboard/company-cards/`, {
    headers: {
      Authorization: `Bearer ${tokenHubtech}`
    }
  })
  dataExample = dataExample.data

  return {
    props: { dataExample }
  }
} */
