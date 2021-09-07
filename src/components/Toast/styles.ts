import { ToastContainer } from 'react-toastify'
import {
  Bug,
  Alert,
  CheckboxCircle,
  Information
} from '@styled-icons/remix-line'
import styled, { css } from 'styled-components'
import T from 'theme'

export const ToastAlertContainer = styled(ToastContainer)`
  .Toastify__toast {
    background-color: ${T.colors.light};
    ${({ theme }) =>
      theme.colors.light !== '#fff' &&
      css`
        border: 0.1rem solid ${T.colors.grey};
      `}
  }

  .Toastify__close-button {
    opacity: 0.5;
  }

  .Toastify__close-button > svg {
    fill: ${T.colors.grey};
  }

  .Toastify__progress-bar {
    height: 0.4rem;
  }

  .Toastify__toast-body {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    color: ${T.colors.primary};

    b {
      margin-right: 0.5rem;
      font-weight: 500;
      font-size: ${T.typography.sizes.subtitle2};
      text-transform: uppercase;
    }
  }

  .warn {
    b {
      color: ${T.colors.warn};
    }

    .Toastify__progress-bar {
      background: ${T.colors.warn};
    }
  }

  .error {
    b {
      color: ${T.colors.attention};
    }

    .Toastify__progress-bar {
      background: ${T.colors.attention};
    }
  }

  .success {
    b {
      color: ${T.colors.success};
    }

    .Toastify__progress-bar {
      background: ${T.colors.success};
    }
  }

  .info {
    b {
      color: ${T.colors.info};
    }

    .Toastify__progress-bar {
      background: ${T.colors.info};
    }
  }
`

const StylesIcon = css`
  width: 2rem;
  height: 2rem;
  margin-right: 1rem;
  margin-top: 0.2rem;
`

export const IconError = styled(Bug)`
  ${StylesIcon};
  color: ${T.colors.attention};
`

export const IconSuccess = styled(CheckboxCircle)`
  ${StylesIcon};
  color: ${T.colors.success};
`

export const IconInfo = styled(Information)`
  ${StylesIcon};
  color: ${T.colors.info};
`

export const IconWarn = styled(Alert)`
  ${StylesIcon};
  color: ${T.colors.warn};
`
