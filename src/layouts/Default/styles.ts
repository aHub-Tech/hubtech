import styled from 'styled-components'
import T from 'theme'

export const Grid = styled.div`
  display: grid;
  grid-template-rows: 5rem auto;
  grid-template-areas:
    'header header'
    'sidebar body';
  height: 100vh;

  & > div:last-child {
    grid-area: body;
    background-color: ${T.colors.white};
    overflow: hidden auto;

    ${T.breakPoint(75)} {
      padding: 2rem 4rem 4rem 4rem;
    }
  }

  ${T.breakPoint(42)} {
    & > div:last-child {
      padding: 2rem;
    }
  }
`
