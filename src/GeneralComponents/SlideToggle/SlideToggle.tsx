import { ChangeEventHandler } from 'react';
import styles from './SlideToggle.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

interface Props extends React.HTMLAttributes<HTMLElement>{
    value: string
    onChange: ChangeEventHandler<HTMLInputElement>
    visualMode: string
}

let icon: JSX.Element;

export default function SlideToggle( props: Props ) {
    if (props.visualMode === 'dark_mode') {
        icon  = <FontAwesomeIcon icon={faMoon} size='xl' aria-hidden="true"/>
    } else {
        icon  = <FontAwesomeIcon icon={faSun} size='xl' aria-hidden="true"/>
    }

    return (
        <label className={styles.switch_button} htmlFor="switch">
            <div className={`${styles.switch_outer} ${styles[props.visualMode]}`}>
                <input id="switch" type="checkbox" value={props.value} onChange={props.onChange} />
                <div className={styles.button}>
                <span className={`${styles.button_toggle} ${styles[props.visualMode]}`}></span>
                <span className={styles.button_indicator}>
                    {icon}
                </span>
                </div>
            </div>
        </label>
    );
}
