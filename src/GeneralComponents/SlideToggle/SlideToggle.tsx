import { ChangeEventHandler } from 'react';
import styles from './SlideToggle.module.css';

interface Props extends React.HTMLAttributes<HTMLElement>{
    value: string
    onChange: ChangeEventHandler<HTMLInputElement>
    visualMode: string
}

let sliderColorMode: string;

export default function SlideToggle( props: Props ) {
    const { value, onChange, visualMode } = props

    visualMode === 'dark_mode' ? sliderColorMode = styles.slider_dark : sliderColorMode = styles.slider_light;
    
    return (
        <label className={styles.switch_button} htmlFor="switch">
            <div className={`${styles.switch_outer} ${sliderColorMode}`}>
                <input id="switch" type="checkbox" value={value} onChange={onChange} />
                <div className={styles.button}>
                <span className={styles.button_toggle}></span>
                <span className={styles.button_indicator}></span>
                </div>
            </div>
        </label>
    );
}
