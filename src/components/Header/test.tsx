import { render, screen } from 'utils/testUtils'
import Header from '.'

describe('<Header />', () => {
  it('should render the heading', () => {
    render(<Header />)

    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /table/i })).toBeInTheDocument()
  })
})
