import styles from './BlogPreview.module.css';
import blog from '../BlogSection';

interface Props extends React.HTMLAttributes<HTMLElement> {
    visualMode: string;
    displayBlog: () => void;
    blog: blog;
}

export interface blog {
    title: string;
    author: string;
    publish_date: string; // Should this be a timestamp? Might be more performant to just store it as a date.
    tags: string[];
    markdown: string;
    visible: boolean;
}

export default function BlogPreview(props: Props) {
    return (
        <div
            className={`${styles.blog_preview} ${styles[props.visualMode]}`}
            onClick={props.displayBlog}
        >
            <h3>{props.blog.title}</h3>
            {/* TODO: Parse the date... */}
            <p>{props.blog.publish_date}</p>
            <div className={styles.tags}>
                {/* TODO: Style this to allow 2 rows of 3-4 tags */}
                {props.blog.tags.map((tag) => (
                    <p>{tag}</p>
                ))}
            </div>
        </div>
    );
}
