import Project from './Project';
import { project } from './Project';
import { cleanup, render } from '@testing-library/react';
import { test, afterEach } from 'vitest';
// import { cleanup, render, screen } from '@testing-library/react';
// import { describe, it, test, expect, afterEach } from 'vitest';

const testProj: project = {
    name: "the best test project ever",
    hosted: null,
    description: "string",
    technologies: ["foo", "bar", "baz"],
    repo_link: "foo.com",
    favorite: false,
    eductional: true
}

test('renders text from passed in project', () => {
    render(<Project visualMode='' project={testProj}/>);

    // const linkElement = screen.getByText(/Icon/i);
    // expect(linkElement).toBeInTheDocument();
});

afterEach(() => {
    cleanup();
});
