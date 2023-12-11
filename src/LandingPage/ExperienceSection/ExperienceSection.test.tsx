import ExperienceSection from './ExperienceSection';
import { render, screen } from '@testing-library/react';

test('renders text from experience section', () => {
    render(<ExperienceSection visualMode='' />);
    const linkElement = screen.getByText(/Placeholder/i);
    expect(linkElement).toBeInTheDocument();
});
