import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import Title from '.'

describe('<Title />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Title title="Title Example" />)

    const wrapper = screen.getByRole('heading')

    expect(wrapper).toBeInTheDocument()
  })
})
