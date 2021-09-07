import { ReactNode } from 'react'
import * as S from 'layouts/Default/styles'

export type DefaultProps = {
  children: ReactNode
}

const Default = ({ children }: DefaultProps) => {
  return <S.Grid>{children}</S.Grid>
}

export default Default
