import { InputHTMLAttributes, ReactNode, useState } from 'react'
import * as S from './styles'

export interface InputOutlinedProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  register: object
  error: string | undefined
  onBlur?: () => void
  icon?: ReactNode
  control?: any
  changeVisibilityPassword?: boolean
}

const InputOutlined = ({
  id,
  type,
  placeholder,
  label,
  register,
  error,
  icon,
  disabled,
  control,
  changeVisibilityPassword,
  ...props
}: InputOutlinedProps) => {
  const [viewPassword, setViewPassword] = useState(false)

  const changeViewPassword = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    setViewPassword(prevState => !prevState)
  }

  const typeField = () => {
    if (type === 'password') return viewPassword ? 'text' : type

    return type
  }

  const paddingRightLarge = () => {
    if (icon && !changeVisibilityPassword) {
      return '1.3rem 3.8rem 1.3rem 1.4rem'
    } else if (changeVisibilityPassword) {
      return '1.3rem 7.2rem 1.3rem 1.4rem'
    } else {
      return '1.3rem 1.4rem'
    }
  }

  return (
    <S.ContainerInput>
      <S.WrapperInput error={!!error} disabledIcon={!!disabled}>
        {icon}
        {changeVisibilityPassword && (
          <S.BtnIconsPassword onClick={changeViewPassword}>
            {viewPassword ? <S.IconViewPassword /> : <S.IconHiddenPassword />}
          </S.BtnIconsPassword>
        )}
        <S.Input
          type={typeField()}
          autoComplete="off"
          id={id}
          placeholder={placeholder}
          error={!!error}
          paddingRightLarge={paddingRightLarge()}
          disabled={disabled}
          {...register}
          {...props}
        />
        <label htmlFor={id}>{label}</label>
      </S.WrapperInput>
      <S.MsgError error={!!error}>{!!error && error}</S.MsgError>
    </S.ContainerInput>
  )
}

export default InputOutlined
