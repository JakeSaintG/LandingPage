import ContactSection from './ContactSection';
import { render, screen } from '@testing-library/react';

test('renders text from contact section', () => {
    render(<ContactSection visualMode='' />);
    const linkElement = screen.getByText(/Placeholder/i);
    expect(linkElement).toBeInTheDocument();
});
