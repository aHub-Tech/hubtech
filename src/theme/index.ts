import { animations } from 'theme/animations'
import { border } from 'theme/border'
import { breakPoint } from 'theme/breakpoints'
import { colors } from 'theme/colors'
import { devices } from 'theme/devices'
import { gradients } from 'theme/gradients'
import { layers } from 'theme/layers'
import { layouts } from 'theme/layouts'
import { typography } from 'theme/typography'

const T = {
  colors,
  gradients,
  typography,
  breakPoint,
  animations,
  layouts,
  layers,
  devices,
  border
} as const

export default T
