import Project from './Project';
import { project } from './Project';
import { render, screen } from '@testing-library/react';

const p: project = {
    name: "",
    hosted: "",
    description: "",
    technologies: [""]
}

test('renders text from passed in project', () => {
    render(<Project visualMode='' project={p}/>);
    const linkElement = screen.getByText(/Placeholder/i);
    expect(linkElement).toBeInTheDocument();
});
