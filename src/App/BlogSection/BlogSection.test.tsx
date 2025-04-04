import BlogSection from './BlogSection';
import { cleanup, render, screen } from '@testing-library/react';
import { test, expect, afterEach } from 'vitest';
// import { describe, it, test, expect, afterEach } from 'vitest';

test('renders text from contact section', () => {
    render(<BlogSection visualMode="" />);
    const linkElement = screen.getByText(/Placeholder/i);
    expect(linkElement).toBeInTheDocument();
});

afterEach(() => {
    cleanup();
});
