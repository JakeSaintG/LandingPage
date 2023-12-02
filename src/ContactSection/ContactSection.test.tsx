import Navbar from './ContactSection'
import { render, screen } from '@testing-library/react'

test('renders text from contact section', () => {
    render(<Navbar />)
    const linkElement = screen.getByText(/Placeholder/i)
    expect(linkElement).toBeInTheDocument()
})
