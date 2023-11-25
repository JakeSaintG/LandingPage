import Navbar from './ExperienceSection'
import { render, screen } from '@testing-library/react'

test('renders text from experience section', () => {
    render(<Navbar />)
    const linkElement = screen.getByText(/Placeholder/i)
    expect(linkElement).toBeInTheDocument()
})
