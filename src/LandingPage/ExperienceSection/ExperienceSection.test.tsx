import ExperienceSection from './ExperienceSection';
import { cleanup, render, screen } from '@testing-library/react';
import { describe, it, test, expect, afterEach } from 'vitest';

test('renders text from experience section', () => {
    render(<ExperienceSection visualMode="" />);

    // TODO: Should this be tested? Probably not.
    const linkElement = screen.getByText(/Experience/i);
    expect(linkElement).toBeInTheDocument();
});

afterEach(() => {
    cleanup();
});
