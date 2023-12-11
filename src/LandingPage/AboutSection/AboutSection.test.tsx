import AboutSection from './AboutSection';
import { render, screen } from '@testing-library/react';

test('renders text from about section', () => {
    render(<AboutSection visualMode=''/>);
    const linkElement = screen.getByText(/Placeholder/i);
    expect(linkElement).toBeInTheDocument();
});
