import { Eye, EyeOff } from '@styled-icons/ionicons-outline'
import styled, { css } from 'styled-components'
import T from 'theme'

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 0.7rem;
`

export const WrapperInput = styled.div<{
  error: boolean
  disabledIcon: boolean
}>`
  ${({ error, disabledIcon }) => css`
    display: flex;
    flex-direction: column;
    position: relative;

    & > svg {
      position: absolute;
      z-index: 2;
      right: 1rem;
      margin-top: 1.6rem;
      ${disabledIcon &&
      css`
        cursor: not-allowed;
        opacity: 0.5;
      `}
    }

    svg {
      color: ${error ? T.colors.attention : T.colors.grey} !important;
    }

    label {
      color: ${error ? T.colors.attention : T.colors.info};
      position: absolute;
      font-size: ${T.typography.sizes.p1};
      margin: 1.4rem 1.4rem 1.3rem 1.5rem;
      border-radius: 0.4rem;
      background-color: ${T.colors.light};
      cursor: unset;
      z-index: 0;
      transition: all 0.2s linear;
      animation: ${T.animations.zoom} 0.4s ease-in-out;
    }
  `}
`

export const Input = styled.input<{
  error: boolean
  paddingRightLarge: string
}>`
  ${({ error, paddingRightLarge }) => css`
    appearance: none;
    -moz-appearance: textfield;
    -webkit-appearance: textfield;
    border-radius: 0.5rem;
    border: 0.15rem solid ${error ? T.colors.attention : T.colors.info};
    outline: none;
    padding: ${paddingRightLarge};
    background-color: ${T.colors.light};
    font-size: ${T.typography.sizes.p1};
    z-index: 1;
    color: ${error ? T.colors.attention : T.colors.grey};
    transition: all 0.2s ease-in-out;

    &::placeholder {
      font-size: ${T.typography.sizes.p1};
      color: ${error ? T.colors.attention : T.colors.info};
    }

    &:hover {
      border: 0.15rem solid ${error ? T.colors.attention : T.colors.grey};
    }

    &:focus {
      border: 0.15rem solid ${error ? T.colors.attention : T.colors.grey};
    }

    &:required:invalid + label:before {
      content: '*';
    }

    &:focus + label,
    &:not(:placeholder-shown) + label {
      font-size: ${T.typography.sizes.p4};
      font-weight: 500;
      color: ${error ? T.colors.attention : T.colors.info};
      margin-top: -1.9rem;
      margin-left: 0;
      cursor: default;
      z-index: 2;
    }

    &:-webkit-autofill:focus + label,
    &:-webkit-autofill:not(:placeholder-shown) + label {
      font-size: ${T.typography.sizes.p4};
      font-weight: 500;
      color: ${error ? T.colors.attention : T.colors.info};
      margin-top: -1.9rem;
      margin-left: 0;
      cursor: default;
      z-index: 2;
    }

    &:disabled {
      background-color: ${T.colors.disabled};
      box-shadow: none;
      cursor: not-allowed;
      border-color: ${T.colors.disabled};

      &:hover {
        border-color: ${T.colors.disabled};
      }

      &::placeholder {
        opacity: 0.5;
      }
    }
  `}
`

export const MsgError = styled.small<{ error: boolean }>`
  display: flex;
  color: ${T.colors.attention};
  justify-content: flex-end;
  font-size: ${T.typography.sizes.p4};
  min-height: 1.8rem;
  visibility: ${({ error }) => (error ? 'visible' : 'hidden')};
`

export const BtnIconsPassword = styled.button`
  right: 4rem;
  position: absolute;
  background-color: transparent;
  z-index: 2;
  width: min-content;
  height: min-content;
  border-radius: 0.4rem;
  margin-top: 1.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.3rem;
  border: 0.1rem dashed transparent;

  &:focus {
    border: 0.1rem dashed ${T.colors.primary};
  }
`

export const IconViewPassword = styled(Eye)`
  width: 2rem;
  height: 2rem;
`

export const IconHiddenPassword = styled(EyeOff)`
  width: 2rem;
  height: 2rem;
`
