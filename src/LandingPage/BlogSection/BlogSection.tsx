import { useState } from 'react';
import styles from './BlogSection.module.css';
import PageSection from '../../GeneralComponents/PageSection';
import blogs from '../../assets/blogs.json';
import { blog } from './BlogPreview/BlogPreview';
// import BlogDialog from './BlogDialog';
import BlogPreview from './BlogPreview';

interface Props extends React.HTMLAttributes<HTMLElement> {
    visualMode: string;
}

const blogPreviews = blogs.reduce((acc, proj) => {
    if (proj.visible) acc.push(proj);
    return acc;
}, [] as blog[]);

export default function BlogSection(props: Props) {
    const { visualMode } = props;
    let key = 0;

    const [isBlogDisplayed, setIsBlogDisplayed] = useState(false);
    const [displayedBlogId, setDisplayedBlogId] = useState("");

    const toggleIsBlogDisplayed = (id: string = "") => {
        if (id !== "") setDisplayedBlogId(id);
        setIsBlogDisplayed(!isBlogDisplayed);
    }

    if (isBlogDisplayed) {
        const displayedBlog = blogPreviews.find(b => b.id === displayedBlogId);
        const date = new Date(parseInt(displayedBlog!.publish_date) * 1000).toDateString();
        
        return (
            <PageSection title="Blog" id="blogSection" style={{}} visualMode={visualMode}>
                <div className={`${styles.blog_header}`}>
                    <button onClick={() => toggleIsBlogDisplayed()}>{'<='}</button>
                    <h2>{displayedBlog?.title}</h2>
                    <p>{ date }</p>
                </div>
                <div className={`${styles.blog_indentation} ${styles[visualMode]}`}>
                    <p>blog shown</p>
                </div>
            </PageSection>
        );
    } else {
        return (
            <PageSection title="Blog" id="blogSection" style={{}} visualMode={visualMode}>
                <div
                    className={`${styles.blog_indentation} ${styles.preview} ${styles[visualMode]}`}
                >
                    {blogPreviews.map((b: blog) => (
                        <BlogPreview
                            visualMode={props.visualMode}
                            displayBlog={toggleIsBlogDisplayed}
                            key={key++}
                            blog={b}
                        ></BlogPreview>
                    ))}
                </div>
            </PageSection>
        );
    }
}
