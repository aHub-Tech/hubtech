import Default from 'layouts/Default'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import * as S from './styles'
import * as C from 'components'

export default function Custom404() {
  const router = useRouter()

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

      <S.BtnWrapper>
        <C.Button
          aria-label="Página Inicial"
          size="xLarge"
          icon={<S.IconHome />}
          text="Página Inicial"
          borderRadiusFull={true}
          fullWidthMobile={true}
          onClick={() => router.replace('/')}
        />
      </S.BtnWrapper>
    </S.Container>
  )
}

Custom404.Layout = Default
