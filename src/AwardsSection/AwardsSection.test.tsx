import Navbar from './AwardsSection'
import { render, screen } from '@testing-library/react'

test('renders text from awards section', () => {
    render(<Navbar />)
    const linkElement = screen.getByText(/Placeholder/i)
    expect(linkElement).toBeInTheDocument()
})
