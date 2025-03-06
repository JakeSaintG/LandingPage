import styles from './BlogPreview.module.css';

interface Props extends React.HTMLAttributes<HTMLElement>{
    visualMode: string
}

export default function BlogPreview(props: Props) {
    return (
        <div className={`${styles.placeholder_blog_preview} ${styles[props.visualMode]}`}>
            Placeholder blog preview
        </div>
    )
}
