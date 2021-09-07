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

const ColorsBtn = {
  blue: css`
    background: ${T.colors.primary};
    &:focus {
      box-shadow: 0 0 0 0.2rem rgb(137 161 255),
        0 0.1rem 1.5rem rgb(62 57 107 / 50%);
    }
  `,
  google: css`
    background: ${T.gradients.google};
    &:focus {
      box-shadow: 0 0 0 0.2rem rgb(255 137 137),
        0 0.1rem 1.5rem rgb(62 57 107 / 50%);
    }
  `,
  facebook: css`
    background: ${T.gradients.facebook};

    &:focus {
      box-shadow: 0 0 0 0.2rem #7fb3fa, 0 0.1rem 1.5rem rgb(62 57 107 / 50%);
    }
  `,
  linkedin: css`
    background: ${T.gradients.linkedin};

    &:focus {
      box-shadow: 0 0 0 0.2rem #72b7fc, 0 0.1rem 1.5rem rgb(62 57 107 / 50%);
    }
  `
}

export const Container = styled.button<BtnProps>`
  ${({ fullWidth, fullWidthMobile, color, size }) => css`
    cursor: pointer;
    border-radius: 0.5rem;
    font-weight: 400;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-wrap: nowrap;
    border: 0.1rem solid ${T.colors.grey};
    text-shadow: 0 0 0.3rem #00000099;
    background-position-x: 0;
    background-size: 300% !important;
    background-repeat: no-repeat;
    transition: background-position-x 150ms ease-in-out;
    width: ${fullWidthMobile ? '100%' : 'fit-content'};
    ${!!color && ColorsBtn[color]};
    ${!!size && SizesBtn[size]}

    ${T.breakPoint(35)} {
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
