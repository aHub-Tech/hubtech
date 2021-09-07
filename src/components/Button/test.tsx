import { Eye } from '@styled-icons/ionicons-outline'
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import T from 'theme'
import { renderWithTheme } from 'utils/tests/helpers'
import Button from '.'

describe('<Button />', () => {
  it('should render the xSmall size by default', () => {
    const { container } = renderWithTheme(<Button text="Mais Informações" />)

    const btn = screen.getByRole('button', { name: /Mais Informações/i })
    expect(btn).toHaveStyle({
      padding: '0px 0.6rem',
      fontSize: 'xSmall'
    })

    expect(container).toMatchSnapshot()
  })

  it('should render the xxSmall size', () => {
    renderWithTheme(<Button size="xxSmall" text="Mais Informações" />)

    const btn = screen.getByRole('button', { name: /Mais Informações/i })
    expect(btn).toHaveStyle({
      padding: '0.5rem 0.6rem',
      fontSize: T.typography.sizes.p4
    })
  })

  it('should render the small size', () => {
    renderWithTheme(<Button size="small" text="Mais Informações" />)

    const btn = screen.getByRole('button', { name: /Mais Informações/i })
    expect(btn).toHaveStyle({
      fontSize: T.typography.sizes.p4,
      padding: '0.8rem'
    })
  })

  it('should render the medium size', () => {
    renderWithTheme(<Button size="medium" text="Mais Informações" />)

    const btn = screen.getByRole('button', { name: /Mais Informações/i })
    expect(btn).toHaveStyle({
      fontSize: T.typography.sizes.p4,
      padding: '1rem 2.5rem'
    })
  })

  it('should render the large size', () => {
    renderWithTheme(<Button size="large" text="Mais Informações" />)

    const btn = screen.getByRole('button', { name: /Mais Informações/i })
    expect(btn).toHaveStyle({
      fontSize: T.typography.sizes.p3,
      padding: '1.2rem 2rem'
    })
  })

  it('should render the xLarge size', () => {
    renderWithTheme(<Button size="xLarge" text="Mais Informações" />)

    const btn = screen.getByRole('button', { name: /Mais Informações/i })
    expect(btn).toHaveStyle({
      fontSize: T.typography.sizes.p1,
      padding: '1.5rem 3rem'
    })
  })

  it('should render a fullWidth version', () => {
    renderWithTheme(<Button fullWidth text="Mais Informações" />)

    const btn = screen.getByRole('button', { name: /Mais Informações/i })
    expect(btn).toHaveStyle({
      width: '100%'
    })
  })

  it('should render an icon version', () => {
    renderWithTheme(
      <Button icon={<Eye data-testid="icon" />} text="Mais Informações" />
    )

    const btn = screen.getByText(/Mais Informações/i)
    const icon = screen.getByTestId('icon')
    expect(btn).toBeInTheDocument()
    expect(icon).toBeInTheDocument()
  })

  it('should render a disabled Button', () => {
    renderWithTheme(<Button disabled text="Mais Informações" />)

    const btn = screen.getByRole('button', { name: /Mais Informações/i })
    expect(btn).toHaveStyle({
      cursor: 'not-allowed',
      opacity: 0.5,
      backgroundPositionX: 0
    })
  })

  it('should call a function once on click', () => {
    const onClick = jest.fn()

    renderWithTheme(<Button onClick={onClick} text="Mais Informações" />)

    const btn = screen.getByRole('button', { name: /Mais Informações/i })

    userEvent.click(btn)

    expect(onClick).toHaveBeenCalled()
    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
