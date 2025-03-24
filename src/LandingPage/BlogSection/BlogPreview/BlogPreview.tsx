import styles from './BlogPreview.module.css';
import blog from '../BlogSection'

interface Props extends React.HTMLAttributes<HTMLElement> {
    visualMode: string;
    displayBlog: () => void;
    blog: blog;
}

export interface blog {
    title: string,
    author: string,
    publish_date: string,
    tags: string[],
    markdown: string,
    visible: boolean
}

export default function BlogPreview(props: Props) {
    return (
        <div className={`${styles.blog_preview} ${styles[props.visualMode]}`} onClick={props.displayBlog}>
            <h3>Title</h3>
            <p>date</p>
            <div className={styles.tags}>
                <p>Tag</p>
                <p>Tag</p>
                <p>Tag</p>
                <p>Tag</p>
            </div>
        </div>
    );
}
