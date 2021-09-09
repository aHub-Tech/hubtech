import { Home4 } from '@styled-icons/remix-line'
import styled from 'styled-components'
import T from 'theme'

export const Container = styled(T.layouts.Container)`
  align-items: center;
  row-gap: 3rem;
  padding: 4rem 3rem;
  border-radius: 0;
  height: min-content;
  max-width: 100%;
  overflow-y: auto;
  animation: ${T.animations.fadeIn} 0.5s ease-in-out,
    ${T.animations.move('0', '50px', '0')} 0.5s ease-in-out;

  ${T.breakPoint(30)} {
    padding: 5rem 6rem;
    max-width: 60rem;
    border-radius: 0.8rem;
  }
`

export const Title = styled.h1`
  text-align: center;
  font-weight: ${T.typography.weight.medium};
`

export const Paragraph = styled.p`
  font-size: ${T.typography.sizes.subtitle1};
  text-align: center;
`

export const BtnWrapper = styled(T.layouts.Row)`
  justify-content: center;
`

export const IconHome = styled(Home4)``
