import { ComponentType, ReactElement, ReactNode } from 'react'
import { NextPage } from 'next'

export type Page<P = {}> = NextPage<P> & {
  getLayout?: (page: ReactElement) => ReactNode
  Layout?: ComponentType
}
