import styles from './BlogPreview.module.css';

interface Props extends React.HTMLAttributes<HTMLElement> {
    visualMode: string;
}

export default function BlogPreview(props: Props) {
    return (
        <div className={`${styles.blog_preview} ${styles[props.visualMode]}`}>
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
