import Navbar from './Navbar'
import { render, screen } from '@testing-library/react'

test('renders text from nav', () => {
    render(<Navbar />)
    const linkElement = screen.getByText(/About/i)
    expect(linkElement).toBeInTheDocument()
})
