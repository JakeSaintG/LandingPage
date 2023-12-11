import ProjectsSection from './ProjectsSection';
import { render, screen } from '@testing-library/react';

test('renders text from about section', () => {
    render(<ProjectsSection visualMode='' />);
    const linkElement = screen.getByText(/Placeholder/i);
    expect(linkElement).toBeInTheDocument();
});
