import { ReactNode } from 'react'
import * as S from 'layouts/Error/styles'

const Error = ({ children }: { children: ReactNode }) => {
  return (
    <S.Grid>
      <S.Main>{children}</S.Main>
    </S.Grid>
  )
}

export default Error
