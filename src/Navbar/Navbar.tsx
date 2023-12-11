import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Navbar.module.css';
import {
    faGithub,
    faLinkedinIn,
    faTiktok,
} from '@fortawesome/free-brands-svg-icons';
import { faGear } from '@fortawesome/free-solid-svg-icons';

interface Props extends React.HTMLAttributes<HTMLElement>{
    visualMode: string
    toggleSettings: any
}

export default function Navbar(props: Props) {
    let mode: string;

    props.visualMode === 'dark_mode' ? mode = 'dark_mode_nav' : mode = 'light_mode_nav';
    
    return (
        <nav className={`${styles.nav} ${styles[mode]}`}>
            <div className={styles.nav_logo}>Logo</div>

            <a className={styles.nav_item} href="#aboutSection">
                About
            </a>
            <a className={styles.nav_item} href="#experienceSection">
                Experience
            </a>
            <a className={styles.nav_item} href="#projectsSection">
                Projects
            </a>
            <a className={styles.nav_item} href="#contactSection">
                Contact
            </a>

            <div className={styles.socials}>
                <a href="https://www.linkedin.com/in/jake-st-germain/">
                    <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
                </a>

                <a href="https://github.com/JakeSaintG">
                    <FontAwesomeIcon icon={faGithub} size="lg" />
                </a>

                <a href="https://www.tiktok.com/@jakesaintg">
                    <FontAwesomeIcon icon={faTiktok} size="lg" />
                </a>

                <FontAwesomeIcon
                    icon={faGear}
                    size="lg"
                    onClick={props.toggleSettings}
                    style={{ cursor: 'pointer' }}
                />
            </div>
        </nav>
    );
}
