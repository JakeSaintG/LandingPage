import SlideToggle from '.';
import { render } from '@testing-library/react';

test('renders HTML section', () => {
    render(<SlideToggle value='' visualMode='' onChange={()=>{}}></SlideToggle>);
    expect(true).toBeTruthy();
});
