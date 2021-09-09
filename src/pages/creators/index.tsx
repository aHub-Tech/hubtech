import Default from 'layouts/Default'
import Head from 'next/head'
import * as S from './styles'
import * as C from 'components'
import { mockCardCreators } from 'components/CardCreators/mock'

export default function Home() {
  return (
    <>
      <Head>
        <title>Creators - Conheça Nossos Criadores de Conteúdos</title>
      </Head>
      <S.Container>
        {mockCardCreators.map(creator => (
          <C.CardCreators key={creator.displayName} {...creator} />
        ))}
      </S.Container>
    </>
  )
}

Home.Layout = Default
