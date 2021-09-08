import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import CardCreators from '.'

describe('<CardCreators />', () => {
  it('should render the heading', () => {
    renderWithTheme(
      <CardCreators
        description="Example description"
        displayName="Name Example"
        online={true}
        photo=""
        socials={[{ social: 'facebook', link: '' }]}
        tags={['html']}
      />
    )

    const wrapper = screen.getByRole('heading')

    expect(wrapper).toBeInTheDocument()
  })
})
