import { ChangeEventHandler } from 'react';
import styles from './SlideToggle.module.css';

interface Props extends React.HTMLAttributes<HTMLElement>{
    value: string
    onChange: ChangeEventHandler<HTMLInputElement>
}

export default function PageSection( props: Props ) {
    const { value, onChange } = props
    
    return (
        <label className={styles.switch}>
            <input type="checkbox" value={value} onChange={onChange} />
            <span className={`${styles.slider} ${styles.round}`}></span>
        </label>
    );
}
