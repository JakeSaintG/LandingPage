import BlogSection from './BlogSection';
import { render, screen } from '@testing-library/react';

test('renders text from contact section', () => {
    render(<BlogSection visualMode='' />);
    const linkElement = screen.getByText(/Placeholder/i);
    expect(linkElement).toBeInTheDocument();
});
