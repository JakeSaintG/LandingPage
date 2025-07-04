import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Navbar.module.css';
import {
    faGithub,
    faLinkedinIn
} from '@fortawesome/free-brands-svg-icons';
import { faBars, faFile, faGear } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

interface Props extends React.HTMLAttributes<HTMLElement>{
    visualMode: string
    toggleSettings: () => void
}

export function Navbar(props: Props) {
    const [navContentVisible, setNavContentVisible] = useState(false);

    let toggled = "";
    if (navContentVisible) {
        toggled = styles.toggled;
    }

    return (
        <nav className={styles[props.visualMode]}>
            <div className={styles.nav_logo}>Logo</div>

            <div className={`${styles.nested_nav} ${toggled}`}>

                <a className={styles.nav_item} href="#aboutSection" aria-label="Jump to About section of current page." onClick={() => setNavContentVisible(!navContentVisible)}>
                    About
                </a>
                <a className={styles.nav_item} href="#experienceSection" aria-label="Jump to Experience section of current page." onClick={() => setNavContentVisible(!navContentVisible)}>
                    Experience
                </a>
                <a className={styles.nav_item} href="#projectsSection" aria-label="Jump to Projects section of current page." onClick={() => setNavContentVisible(!navContentVisible)}>
                    Projects
                </a>
                <a className={styles.nav_item} href="#blogSection" aria-label="Jump to Blog section of current page." onClick={() => setNavContentVisible(!navContentVisible)}>
                    Blog
                </a>

                <div className={styles.menu}>
                    <a href="https://www.linkedin.com/in/jake-st-germain/" target='#' aria-label="New tab; Link to out Jake's Linkedin page." title="LinkedIn">
                        <FontAwesomeIcon icon={faLinkedinIn} size="lg" aria-hidden="true" />
                    </a>

                    <a href="https://github.com/JakeSaintG" target='#' aria-label="New tab; Link to out Jake's GitHub page." title="JakeSaintG's Github">
                        <FontAwesomeIcon icon={faGithub} size="lg" aria-hidden="true" />
                    </a>

                    <a href="https://drive.google.com/file/d/1oTgpw-CbrPvcXfwaFURmpyRsGLjjSKMI/view" target='#' aria-label="New tab; Link to out Jake's resume in PDF form." title="JakeSaintG's Resume">
                        <FontAwesomeIcon icon={faFile} size="lg" aria-hidden="true" />
                    </a>

                    <FontAwesomeIcon
                        icon={faGear}
                        size="lg"
                        onClick={props.toggleSettings}
                        style={{ cursor: 'pointer' }}
                        aria-hidden="true"
                        />
                </div>
            </div>
            <button onClick={() => setNavContentVisible(!navContentVisible)}>
                <FontAwesomeIcon icon={faBars} aria-hidden="true" />
            </button>
            <div className={styles.nav_base}></div>
        </nav>
    );
}
