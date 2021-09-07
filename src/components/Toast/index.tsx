import { memo } from 'react'
import { toast } from 'react-toastify'
import { injectStyle } from 'react-toastify/dist/inject-style'
import * as S from 'components/Toast/styles'

if (typeof window !== 'undefined') injectStyle()

type TypesToastProps = 'error' | 'success' | 'info' | 'warn'

const configToast = {
  autoClose: 15000,
  hideProgressBar: false,
  closeOnClick: false,
  pauseOnHover: true,
  draggable: true,
  progress: undefined
}

const IconToast = {
  warn: <S.IconWarn />,
  error: <S.IconError />,
  success: <S.IconSuccess />,
  info: <S.IconInfo />
}

export const Notify = (type: TypesToastProps, msg: string) => {
  toast(
    <>
      <span>{IconToast[type]}</span>
      <div>
        <b>Sucesso!</b>
        {msg}
      </div>
    </>,
    {
      ...configToast,
      className: type
    }
  )
}

const Toast = () => <S.ToastAlertContainer limit={4} newestOnTop />

export default memo(Toast)
