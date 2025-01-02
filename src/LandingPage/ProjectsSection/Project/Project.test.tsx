import Project from './Project';
import { project } from './Project';
import { cleanup, render, screen } from '@testing-library/react';
import { describe, it, test, expect, afterEach } from 'vitest';

const p: project = {
    name: "",
    hosted: "",
    description: "",
    technologies: [""]
}

test('renders text from passed in project', () => {
    render(<Project visualMode='' project={p}/>);
    // TODO: Better tests

    // const linkElement = screen.getByText(/Placeholder/i);
    // expect(linkElement).toBeInTheDocument();


});

afterEach(() => {
    cleanup();
});
