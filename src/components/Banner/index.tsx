import * as S from './styles'

const Banner = () => (
  <S.Wrapper role="heading">
    <S.Container as="main">
      <S.ContentText as="section">
        <S.Title>Sua comunidade favorita de tecnologia</S.Title>

        <S.P>
          Aqui você encontrará os mais diversos assuntos pertinentes ao mundo de
          TI, conhecerá diversas pessoas e se divertirá muito enquanto aprende e
          ensina!
        </S.P>

        <S.BtnBanner
          aria-label="Entre na Comunidade do Discord"
          size="large"
          icon={<S.IconDiscord />}
          text="Quero fazer parte"
          borderRadiusFull={true}
          color="discord"
          fullWidthMobile={true}
        />
      </S.ContentText>

      <S.WrapperImgBanner as="section">
        <S.Img src="/img/banner.png" alt="ImageBanner" />
      </S.WrapperImgBanner>
    </S.Container>
  </S.Wrapper>
)

export default Banner
