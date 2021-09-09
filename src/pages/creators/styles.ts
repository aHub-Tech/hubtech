import styled from 'styled-components'
import T from 'theme'

export const Container = styled(T.layouts.Container)`
  padding: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
  grid-gap: 2rem;
`
