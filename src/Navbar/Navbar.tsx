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

export default function Navbar(props: Props) {
    
    let [navContentVisible, setNavContentVisible] = useState(false);

    let toggled = "";
    if (navContentVisible) {
        toggled = styles.toggled;
    }

    return (
        <nav className={styles[props.visualMode]}>
            <div className={styles.nav_logo}>Logo</div>

            <div className={`${styles.nested_nav} ${toggled}`}>

                <a className={styles.nav_item} href="#aboutSection">
                    About
                </a>
                <a className={styles.nav_item} href="#experienceSection">
                    Experience
                </a>
                <a className={styles.nav_item} href="#projectsSection">
                    Projects
                </a>
                <a className={styles.nav_item} href="#blogSection">
                    Blog
                </a>

                {/* TODO: Some tool tips on each icon may be a good idea */}
                <div className={styles.menu}>
                    <a href="https://www.linkedin.com/in/jake-st-germain/" target='#'>
                        <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
                    </a>

                    <a href="https://github.com/JakeSaintG" target='#'>
                        <FontAwesomeIcon icon={faGithub} size="lg" />
                    </a>

                    {/* TODO: Need more up to date resume */}
                    <a href="https://drive.google.com/file/d/1oTgpw-CbrPvcXfwaFURmpyRsGLjjSKMI/view" target='#'>
                        <FontAwesomeIcon icon={faFile} size="lg" />
                    </a>

                    <FontAwesomeIcon
                        icon={faGear}
                        size="lg"
                        onClick={props.toggleSettings}
                        style={{ cursor: 'pointer' }}
                        />
                </div>

            </div>
            <button onClick={() => setNavContentVisible(navContentVisible = !navContentVisible)}>
                <FontAwesomeIcon icon={faBars} />
            </button>
        </nav>
    );
}
