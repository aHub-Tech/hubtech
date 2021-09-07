import { useState } from 'react'
import * as S from 'components/TopBar/styles'

const TopBar = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false)

  const clickOpenMenu = () => {
    setIsOpenMenu(prevState => !prevState)
  }

  return (
    <S.Wrapper as="header">
      <S.Container>
        <S.WrapperLogo>
          <S.Logo src="/img/logo.png" width={157} height={55} alt="Hubtech" />
        </S.WrapperLogo>

        <S.Menu>
          <S.BtnMenu onClick={clickOpenMenu}>
            <S.IconHamburger />
          </S.BtnMenu>

          <S.Ul open={isOpenMenu}>
            <S.Li>Home</S.Li>
            <S.Li>Creators</S.Li>
            <S.Li>Discord</S.Li>
          </S.Ul>
        </S.Menu>

        <S.WrapperBtn>Login</S.WrapperBtn>
      </S.Container>
    </S.Wrapper>
  )
}

export default TopBar
