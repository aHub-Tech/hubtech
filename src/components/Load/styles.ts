import styled from 'styled-components'
import T from 'theme'

export const Container = styled(T.layouts.Col)`
  align-items: center;
  justify-content: center;
  height: 100%;
  margin: auto;
`

export const Load = styled.div`
  display: inline-block;
  position: relative;
  width: 8rem;
  height: 8rem;

  & div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 6.4rem;
    min-width: 6.4rem;
    height: 6.4rem;
    min-height: 6.4rem;
    margin: 0.8rem;
    border-width: 0.2rem;
    border-style: solid;
    border-color: #f83b91 transparent transparent transparent;
    border-radius: 50%;
    animation: ${T.animations.rotate} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  }

  & div:nth-child(1) {
    animation-delay: -0.45s;
  }

  & div:nth-child(2) {
    animation-delay: -0.3s;
  }

  & div:nth-child(3) {
    animation-delay: -0.15s;
  }
`

export const Circle = styled.div``
