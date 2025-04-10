import Experience from './Experience';
import { cleanup, render } from '@testing-library/react';
import { test, afterEach } from 'vitest';
import { work } from '../ExperienceSection';
// import { cleanup, render, screen } from '@testing-library/react';
// import { describe, it, test, expect, afterEach } from 'vitest';

const mockSetWorkExperience = () => {}

const mockWorkExperience: work[] = []

test('renders text from experience section', () => {
    render(<Experience activeClass='' experienceTitle='' setWorkExperience={mockSetWorkExperience} workExperience={mockWorkExperience} visualMode="" />);

    // const linkElement = screen.getByText(/Experience/i);
    // expect(linkElement).toBeInTheDocument();
});

afterEach(() => {
    cleanup();
});
