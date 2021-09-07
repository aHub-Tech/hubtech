import { ReactNode } from 'react'
import { render, RenderResult } from '@testing-library/react'

export const renderWithTheme = (children: ReactNode): RenderResult => {
  return render(<>{children}</>)
}
