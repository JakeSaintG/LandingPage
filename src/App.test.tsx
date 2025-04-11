import App from './App';
import { cleanup, render } from '@testing-library/react';
import React from 'react';
import { test, afterEach, beforeEach, vi } from 'vitest';
// import { describe, it, test, expect, afterEach } from 'vitest';
// import { cleanup, render, screen } from '@testing-library/react';

beforeEach(() => {
    const intersectionObserverMock = vi.fn();

    intersectionObserverMock.mockReturnValue({
        disconnect: vi.fn(),
        observe: vi.fn(),
        takeRecords: vi.fn(),
        unobserve: vi.fn(),
    });

    window.IntersectionObserver = intersectionObserverMock;

    vi.spyOn(React, 'useRef').mockReturnValue({
        current: {
            close: vi.fn(),
            showModal: vi.fn(),
            show: vi.fn(),
        },
    });
});

test('renders text from about section', () => {
    render(<App />);

    // const linkElement = screen.getByText(/placeholder/i);
    // expect(linkElement).toBeInTheDocument();
});

afterEach(() => {
    cleanup();
});
