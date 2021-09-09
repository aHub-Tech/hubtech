import styled from 'styled-components'
import T from 'theme'

export const Container = styled(T.layouts.Container)`
  padding: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
  grid-gap: 2rem;
  opacity: 0;
  animation: ${T.animations.fadeIn} 0.5s ease-in-out forwards,
    ${T.animations.move('0', '50px', '0')} 0.5s ease-in-out;
`
