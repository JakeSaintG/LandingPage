import Navbar from './ProjectsSection'
import { render, screen } from '@testing-library/react'

test('renders text from about section', () => {
    render(<Navbar />)
    const linkElement = screen.getByText(/Placeholder/i)
    expect(linkElement).toBeInTheDocument()
})
