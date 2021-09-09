import { Menu as IconMenu } from '@styled-icons/remix-line'
import styled, { css } from 'styled-components'
import T from 'theme'

export const Wrapper = styled(T.layouts.Row)`
  height: 5rem;
  background-color: ${T.colors.dark};

  ${T.breakPoint(T.devices.md)} {
    height: 10rem;
  }
`

export const Container = styled(T.layouts.Container)`
  height: 100%;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  position: relative;
`

export const WrapperLogo = styled.div``

export const Logo = styled.img`
  display: flex;
  width: auto;
  height: 2.5rem;

  ${T.breakPoint(T.devices.md)} {
    height: 5rem;
  }
`

export const Menu = styled.div``

export const IconHamburger = styled(IconMenu)`
  z-index: ${T.layers.topBar + 1};
  fill: ${T.colors.white};
`

export const BtnMenu = styled.button`
  background-color: transparent;
  border-radius: ${T.border.borderRadius.medium};
  width: 3.2rem;
  height: 3.2rem;
  padding: 0.5rem;
  display: grid;
  place-items: center;
  transition: background-color 0.2s linear;

  &:hover {
    background-color: ${T.colors.primary};
  }

  ${T.breakPoint(T.devices.md)} {
    display: none;
  }
`

export const Ul = styled.ul<{ open: boolean }>`
  flex-direction: column;
  position: absolute;
  width: 100%;
  left: 0;
  background-color: ${T.colors.dark};
  transition: all 0.25s;
  top: -100%;
  padding-bottom: 1rem;
  z-index: ${T.layers.topBar};
  opacity: 0;
  border-radius: 0 0 ${T.border.borderRadius.medium}
    ${T.border.borderRadius.medium};

  ${({ open }) =>
    open &&
    css`
      top: 100%;
      opacity: 1;
      display: flex;
    `}

  ${T.breakPoint(T.devices.md)} {
    padding-bottom: 0;
    display: flex;
    flex-direction: row;
    opacity: 1;
    position: initial;
  }
`

export const Li = styled.li`
  cursor: pointer;
  color: ${T.colors.white};
  padding: 1rem 2rem;
  margin: 0 1rem;
  transition: background-color 0.2s linear;
  border-top: 0.1rem solid ${T.colors.primary};
  border-radius: ${T.border.borderRadius.none};

  &:hover {
    background-color: ${T.colors.primary};
  }

  ${T.breakPoint(T.devices.md)} {
    border-top: 0;
    border-radius: ${T.border.borderRadius.medium};
  }
`

export const WrapperBtn = styled.div`
  color: ${T.colors.white};
  background-color: ${T.colors.primary};
  padding: 1rem 2rem;
  border-radius: ${T.border.borderRadius.medium};
  display: none;

  ${T.breakPoint(T.devices.md)} {
    display: flex;
  }
`
