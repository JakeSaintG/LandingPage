import Navbar from './Navbar';
import { cleanup, render, screen } from '@testing-library/react';
import { describe, it, test, expect, afterEach } from 'vitest';

test('renders text from nav', () => {
    const foo = render(<Navbar visualMode='dark_mode' toggleSettings={ () => console.log('toggled') }/>);
    const linkElement = foo.getByText(/About/i);

    expect(linkElement).toHaveAccessibleName();
    expect(linkElement).toBeInTheDocument();
});

afterEach(() => {
    cleanup();
});
