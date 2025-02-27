import Project from './Project';
import { project } from './Project';
import { cleanup, render, screen } from '@testing-library/react';
import { describe, it, test, expect, afterEach } from 'vitest';

test('renders text from passed in project', () => {
    render(<Project visualMode='' project={p}/>);

    const linkElement = screen.getByText(/Placeholder/i);
    expect(linkElement).toBeInTheDocument();
});

afterEach(() => {
    cleanup();
});
