import { screen } from '@testing-library/react'
import TopBar from '.'
import { renderWithTheme } from 'utils/tests/helpers'

describe('<TopBar />', () => {
  it('should render the heading', () => {
    renderWithTheme(<TopBar />)

    const wrapper = screen.getByRole('heading')

    expect(wrapper).toBeInTheDocument()
  })
})
