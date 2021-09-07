import { animations } from 'theme/animations'
import { breakPoint } from 'theme/breakpoints'
import { colors } from 'theme/colors'
import { gradients } from 'theme/gradients'
import { layouts } from 'theme/layouts'
import { typography } from 'theme/typography'

const T = {
  colors,
  gradients,
  typography,
  breakPoint,
  animations,
  layouts
} as const

export default T
