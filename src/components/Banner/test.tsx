import { screen } from '@testing-library/react'
import Banner from '.'
import { renderWithTheme } from 'utils/tests/helpers'

describe('<Banner />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Banner />)

    const wrapper = screen.getByRole('heading')

    expect(wrapper).toBeInTheDocument()
  })
})
