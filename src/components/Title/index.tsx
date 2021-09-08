import { ElementType } from 'react'
import * as S from 'components/Title/styles'

export type TitleProps = {
  title: string
  as?: ElementType
}

const Title = ({ title, as = 'h1' }: TitleProps) => (
  <S.Wrapper>
    <S.Title as={as}>{title}</S.Title>
    <S.Border />
  </S.Wrapper>
)

export default Title
