import { createGlobalStyle } from 'styled-components'
import T from 'theme'

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    text-decoration: none !important;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased !important;
    -moz-osx-font-smoothing: grayscale !important;
    list-style: none !important;
    outline: none;
    font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif !important;
  }

  html {
    font-size: 62.5%;
  }

  body,
  html,
  #__next {
    background-color: ${T.colors.white};
    color: ${T.colors.darkBC};
  }

  body, #root, input, select, textarea, button {
    font: 400 1.6rem 'Poppins', sans-serif;
  }

  button {
    border: none;
    border-radius: 0.6rem;
  }

  #__next {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    min-height: 100vh;
  }

  [disabled] {
    opacity: 0.8;
    cursor: not-allowed;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  b,
  strong {
    font-weight: 600;
  }

  a,
  a:active {
    color: inherit;
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }

  ::-webkit-scrollbar,
  scrollbar-width {
    width: 1.2rem !important;
    height: 1.2rem !important;
    background-color: ${T.colors.white};
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${T.colors.grey};
    border-radius: 2rem;
    border: 0.3rem solid ${T.colors.white};
  }

  :root {
    scrollbar-color: ${T.colors.grey} ${T.colors.white} !important;
    scrollbar-width: 1.2rem !important;
  }
`
