import styles from './BlogDialog.module.css';

interface Props extends React.HTMLAttributes<HTMLElement>{
    visualMode: string
}

export default function BlogDialog(props: Props) {
    return (
        <div className={`${styles.placeholder_blog_preview} ${styles[props.visualMode]}`}>
            Placeholder blog dialog
        </div>
    )
}
