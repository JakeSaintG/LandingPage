import { ChangeEventHandler } from 'react';
import styles from './SlideToggle.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

interface Props extends React.HTMLAttributes<HTMLElement>{
    value: string
    onChange: ChangeEventHandler<HTMLInputElement>
    visualMode: string
}

let sliderColorMode: string;
let icon: JSX.Element;

export default function SlideToggle( props: Props ) {
    const { value, onChange, visualMode } = props

    // visualMode === 'dark_mode' ? sliderColorMode = styles.slider_dark : sliderColorMode = styles.slider_light;

    if (visualMode === 'dark_mode') {
        sliderColorMode = styles.slider_dark
        icon  = <FontAwesomeIcon icon={faMoon} size='xl' />
    } else {
        sliderColorMode = styles.slider_light
        icon  = <FontAwesomeIcon icon={faSun} size='xl'  />
    }
    
    //TODO: Make props that allow for passing in svg files for the icons
    return (
        <label className={styles.switch_button} htmlFor="switch">
            <div className={`${styles.switch_outer} ${sliderColorMode}`}>
                <input id="switch" type="checkbox" value={value} onChange={onChange} />
                <div className={styles.button}>
                <span className={`${styles.button_toggle} ${sliderColorMode}`}></span>
                <span className={styles.button_indicator}>
                    {icon}
                </span>
                </div>
            </div>
        </label>
    );
}
