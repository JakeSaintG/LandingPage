import AboutSection from './AboutSection';
import { cleanup, render, screen } from '@testing-library/react';
import { describe, it, test, expect, afterEach } from 'vitest';

test('renders text from about section', () => {
    render(<AboutSection visualMode="" />);

    const linkElement = screen.getByText(/Placeholder/i);
    expect(linkElement).toBeInTheDocument();
});

afterEach(() => {
    cleanup();
});
