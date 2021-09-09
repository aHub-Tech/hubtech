import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import * as S from './styles'

const TopBar = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const router = useRouter()

  const clickOpenMenu = () => {
    setIsOpenMenu(prevState => !prevState)
  }

  useEffect(() => setIsOpenMenu(false), [router])

  return (
    <S.Wrapper as="header">
      <S.Container>
        <S.WrapperLogo>
          <Link href="/">
            <a>
              <S.Logo
                src="/img/logo.png"
                width={157}
                height={55}
                alt="Hubtech"
              />
            </a>
          </Link>
        </S.WrapperLogo>

        <S.Menu as="nav">
          <S.BtnMenu onClick={clickOpenMenu}>
            <S.IconHamburger />
          </S.BtnMenu>

          <S.Ul open={isOpenMenu}>
            <S.Li activeLink={router.pathname === '/'}>
              <Link href="/" passHref>
                <S.ALink title="A Hub Tech">Home</S.ALink>
              </Link>
            </S.Li>
            <S.Li activeLink={router.pathname === '/creators'}>
              <Link href="/creators" passHref>
                <S.ALink title="Conheça nossos creators">Creators</S.ALink>
              </Link>
            </S.Li>
            <S.Li>
              <S.ALink
                href="https://discord.gg/ahubtech"
                title="Entre em nosso servidor do discord"
                target="_blank"
                rel="noopener noreferrer"
              >
                Discord
              </S.ALink>
            </S.Li>
          </S.Ul>
        </S.Menu>

        <S.WrapperBtn>Login</S.WrapperBtn>
      </S.Container>
    </S.Wrapper>
  )
}

export default TopBar
