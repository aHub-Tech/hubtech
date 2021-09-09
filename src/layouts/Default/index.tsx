import { ReactNode } from 'react'
import * as C from 'components'

export type DefaultProps = {
  children: ReactNode
}

const Default = ({ children }: DefaultProps) => {
  return (
    <>
      <C.TopBar />
      {children}
    </>
  )
}

export default Default
