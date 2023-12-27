import { ReactNode } from 'react';
import styles from './PageSection.module.css';

interface Props extends React.HTMLAttributes<HTMLElement>{
    children: ReactNode
    style: React.CSSProperties
    title: string
    id: string
    visualMode: string
}

let colorMode: string;

export default function PageSection( props: Props ) {
    const { children, style, title, id, visualMode } = props;

    visualMode === 'dark_mode' ? colorMode = styles.dark_mode_content : colorMode = styles.light_mode_content;

    return (
        <section className={styles.page_section} id={id} >
            <h1 className={styles.section_title}>{title}</h1>
            <div className={`${styles.content} ${colorMode}`} style={style}>
                {children}
            </div>
        </section>
    );
}
