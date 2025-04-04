import ContactFooter from './ContactFooter';
import { cleanup, render, screen } from '@testing-library/react';
import { test, expect, afterEach } from 'vitest';
// import { describe, it, test, expect, afterEach } from 'vitest';

test('renders text from contact section', () => {
    render(<ContactFooter visualMode='' />);
    const linkElement = screen.getByText(/Socials/i);
    expect(linkElement).toBeInTheDocument();
});

afterEach(() => {
    cleanup();
});