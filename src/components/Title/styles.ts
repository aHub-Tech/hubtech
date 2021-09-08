import styled from 'styled-components'
import T from 'theme'
export const Wrapper = styled.div``

export const Title = styled.h1`
  font-size: ${T.typography.sizes.title4};
  font-weight: ${T.typography.weight.bold};
  color: ${T.colors.white};
`

export const Border = styled.span`
  height: 0.5rem;
  width: 5.1rem;
  border-radius: 0.5rem;
  background-color: ${T.colors.primary};
  display: block;
  margin-top: -0.2rem;
`
