import styles from './Project.module.css'

interface Props extends React.HTMLAttributes<HTMLElement>{
    visualMode: string
}

const contentStyle: React.CSSProperties = { display: 'flex', flexDirection: 'column' };

export default function Project(props: Props) {
    return (
        <div className={styles.project} style={contentStyle}>
        </div>
    );
}
