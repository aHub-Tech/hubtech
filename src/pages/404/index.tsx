import Error from 'layouts/Error'
import Head from 'next/head'
import Image from 'next/image'
import * as S from 'pages/404/styles'

export default function Custom404() {
  return (
    <S.Container>
      <Head>
        <title>Página Não Encontrada</title>
      </Head>

      <S.Title>Ops, página não encontrada!</S.Title>

      <Image
        width="300"
        height="300"
        src="/img/not-found.png"
        layout="fixed"
        alt="Página de erro"
      />

      <S.Paragraph>
        Por favor clique no botão abaixo para retornar à página inicial:
      </S.Paragraph>

      <S.BtnWrapper>botão home</S.BtnWrapper>
    </S.Container>
  )
}

Custom404.Layout = Error
