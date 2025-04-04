import Section from './PageSection';
import { cleanup, render } from '@testing-library/react';
import { test, expect, afterEach } from 'vitest';
// import { cleanup, render, screen } from '@testing-library/react';
// import { describe, it, test, expect, afterEach } from 'vitest';

test('renders HTML section', () => {
    render(<Section title='' id='' style={{}} visualMode=''><div></div></Section>);
    // const linkElement = screen.getByText(/Placeholder/i);
    expect(true).toBeTruthy();
});

afterEach(() => {
    cleanup();
});