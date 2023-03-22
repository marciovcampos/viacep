import { render, screen } from 'utils/testUtils'
import Header from '.'

describe('<Header />', () => {
  it('should render the heading', () => {
    render(<Header />)

    expect(screen.getByRole('link', { name: /about us/i })).toBeInTheDocument()
    expect(
      screen.getByRole('link', { name: /top cryptos/i })
    ).toBeInTheDocument()
  })
})
