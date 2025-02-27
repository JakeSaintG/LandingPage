import ContactSection from './ContactFooter';
import { cleanup, render, screen } from '@testing-library/react';
import { describe, it, test, expect, afterEach } from 'vitest';

test('renders text from contact section', () => {
    render(<ContactSection visualMode='' />);
    const linkElement = screen.getByText(/Socials/i);
    expect(linkElement).toBeInTheDocument();
});

afterEach(() => {
    cleanup();
});