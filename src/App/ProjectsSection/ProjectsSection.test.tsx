import ProjectsSection from './ProjectsSection';
import { cleanup, render, screen } from '@testing-library/react';
import { test, expect, afterEach } from 'vitest';
// import { describe, it, test, expect, afterEach } from 'vitest';

test('renders text from about section', () => {
    render(<ProjectsSection visualMode='' />);

    // TODO; Not a great test
    const linkElement = screen.getByText(/I like to stay busy!/i);
    expect(linkElement).toBeInTheDocument();
});

afterEach(() => {
    cleanup();
});
