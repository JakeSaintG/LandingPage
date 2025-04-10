import BlogPreview, { blog } from './BlogPreview';
import { cleanup, render } from '@testing-library/react';
import { test, afterEach } from 'vitest';
// import { describe, it, test, expect, afterEach } from 'vitest';
// import { cleanup, render, screen } from '@testing-library/react';

const demoBlog: blog = {
    id: "1",
    title: "title",
    author: "me",
    publish_date: "1742095414",
    tags: ["Mobile", "App Dev", "SQLite"],
    markdown: "src/assets/blogs/test.md",
    visible: true
}

test('renders text from BlogDialog', () => {
    render(<BlogPreview visualMode="" displayBlog={()=>{}} blog={demoBlog}/>);

    // const linkElement = screen.getByText(/Placeholder/i);
    // expect(linkElement).toBeInTheDocument();
});

afterEach(() => {
    cleanup();
});
