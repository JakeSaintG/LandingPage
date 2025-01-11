import { ReactNode } from 'react';
import styles from './PageSection.module.css';

interface Props extends React.HTMLAttributes<HTMLElement>{
    children: ReactNode
    style: React.CSSProperties
    title: string
    id: string
    visualMode: string
    header?: string
}

export default function PageSection( props: Props ) {

    let h = (<h2 className={styles.section_title}>{props.title}</h2>);

    if (props.header === 'h1') {
        h = (<h1 className={styles.section_title}>{props.title}</h1>);
    }

    return (
        <section className={styles.page_section} id={props.id} >
            {h}
            <div className={`${styles.content} ${styles[props.visualMode]}`} style={props.style}>
                {props.children}
            </div>
        </section>
    );
}
