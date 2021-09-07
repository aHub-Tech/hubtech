import { ButtonHTMLAttributes, forwardRef, ReactNode } from 'react'
import * as S from 'components/Button/styles'

export type SizeProps =
  | 'xxSmall'
  | 'xSmall'
  | 'small'
  | 'medium'
  | 'large'
  | 'xLarge'

export type ColorProps = 'blue' | 'google' | 'facebook' | 'linkedin'

export interface BtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: ReactNode
  text?: string
  size?: SizeProps
  color?: ColorProps
  fullWidth?: boolean
  fullWidthMobile?: boolean
}

const Button = forwardRef<HTMLButtonElement, BtnProps>(
  (
    {
      icon,
      text,
      size = 'xSmall',
      color = 'blue',
      fullWidth,
      fullWidthMobile,
      ...props
    },
    ref
  ) => (
    <S.Container
      color={color}
      size={size}
      fullWidth={fullWidth}
      fullWidthMobile={!!fullWidth || fullWidthMobile}
      {...props}
      ref={ref}
    >
      {icon}
      {!!text && <span>{text}</span>}
    </S.Container>
  )
)

export default Button
