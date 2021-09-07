import styled from 'styled-components'
import T from 'theme'

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 100vh;
  background-color: ${T.colors.white};
  place-items: center;
`

export const Main = styled.div`
  max-height: 100vh;
  width: 100%;
  display: grid;
  place-items: center;
`
