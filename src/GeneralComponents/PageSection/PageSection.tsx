import { ReactNode } from 'react';
import styles from './PageSection.module.css';

export interface Props extends React.HTMLAttributes<HTMLSelectElement>{
    children: ReactNode
    style: React.CSSProperties
    title: string
    id: string
}

// flip this to style.dark_mode_content
let colorMode = styles.light_mode_content;

export default function PageSection( props: Props) {
    const { children, style, title, id} = props
    
    return (
        <section className={styles.page_section} id={id} >
            <h1>{title}</h1>
            <div className={`${styles.content} ${colorMode}`} style={style}>
                {children}
            </div>
        </section>
    );
}
