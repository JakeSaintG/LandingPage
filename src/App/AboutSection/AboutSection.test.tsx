import AboutSection from './AboutSection';
import { cleanup, render, screen } from '@testing-library/react';
import { test, expect, afterEach, beforeEach, vi } from 'vitest';
// import { describe, it, test, expect, afterEach } from 'vitest';

beforeEach(() => {
    const intersectionObserverMock = vi.fn();

    intersectionObserverMock.mockReturnValue({
        disconnect: vi.fn(),
        observe: vi.fn(),
        takeRecords: vi.fn(),
        unobserve: vi.fn(),
    });

    window.IntersectionObserver = intersectionObserverMock;
});

test('renders text from about section', () => {
    render(<AboutSection visualMode="" />);

    const linkElement = screen.getByText(/placeholder/i);
    expect(linkElement).toBeInTheDocument();
});

afterEach(() => {
    cleanup();
});
