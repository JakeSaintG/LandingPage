import Navbar from './Navbar';
import { render, screen } from '@testing-library/react';

test('renders text from nav', () => {
    render(<Navbar visualMode='' toggleSettings={console.log('toggled')}/>);
    const linkElement = screen.getByText(/WIP-About/i);
    expect(linkElement).toBeInTheDocument();
});
