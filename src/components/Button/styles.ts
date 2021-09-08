import styled, { css } from 'styled-components'
import T from 'theme'
import { BtnProps } from '.'

const SizesBtn = {
  xxSmall: css`
    padding: 0.5rem 0.6rem;
    font-size: ${T.typography.sizes.p4};
  `,
  xSmall: css`
    padding: 0 0.6rem;
    font-size: ${T.typography.sizes.p4};
  `,
  small: css`
    font-size: ${T.typography.sizes.p4};
    padding: 0.8rem;
  `,
  medium: css`
    font-size: ${T.typography.sizes.p4};
    padding: 1rem 2.5rem;
  `,
  large: css`
    font-size: ${T.typography.sizes.p3};
    padding: 1.2rem 2rem;
  `,
  xLarge: css`
    font-size: ${T.typography.sizes.p1};
    padding: 1.5rem 3rem;
  `
}

export const Container = styled.button<BtnProps>`
  ${({ fullWidth, fullWidthMobile, color, size, borderRadiusFull }) => css`
    cursor: pointer;
    border-radius: ${borderRadiusFull ? '10rem' : '0.5rem'};
    font-weight: 400;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-wrap: nowrap;
    border: 0.1rem solid transparent;
    text-shadow: 0 0 0.3rem #00000099;
    background-position-x: 0;
    background-size: 300% !important;
    background-repeat: no-repeat;
    transition: background-position-x 150ms ease-in-out;
    width: ${fullWidthMobile ? '100%' : 'fit-content'};
    background-color: ${!!color && T.colors[color!]};
    ${!!size && SizesBtn[size]}

    ${T.breakPoint(T.devices.xs)} {
      width: ${fullWidth ? '100%' : 'fit-content'};
    }

    &:hover,
    &:focus {
      background-position-x: 99.5%;
    }

    &:active {
      box-shadow: none;
    }

    &:disabled,
    &:disabled:hover {
      opacity: 0.5;
      cursor: not-allowed;
      background-position-x: 0;
    }

    span {
      color: ${T.colors.white};
    }

    svg + span {
      margin-left: 1rem;
    }

    svg {
      width: 2rem;
      min-width: 2rem;
      height: 2rem;
      min-height: 2rem;
      color: ${T.colors.white};
    }
  `}
`
