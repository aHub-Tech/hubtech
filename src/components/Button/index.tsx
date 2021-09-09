import { ButtonHTMLAttributes, forwardRef, ReactNode } from 'react'
import * as S from './styles'

export type SizeProps =
  | 'xxSmall'
  | 'xSmall'
  | 'small'
  | 'medium'
  | 'large'
  | 'xLarge'

export type ColorProps =
  | 'primary'
  | 'facebook'
  | 'discord'
  | 'instagram'
  | 'linkedin'
  | 'twitch'
  | 'github'
  | 'youtube'
  | 'link'

export type BtnProps = {
  icon?: ReactNode
  text?: string
  size?: SizeProps
  color?: ColorProps
  fullWidth?: boolean
  fullWidthMobile?: boolean
  borderRadiusFull?: boolean
  className?: string
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button = forwardRef<HTMLButtonElement, BtnProps>(
  (
    {
      icon,
      text,
      size = 'xSmall',
      color = 'primary',
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
