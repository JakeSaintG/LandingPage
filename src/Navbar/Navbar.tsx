import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Navbar.module.css';
import {
    faGithub,
    faLinkedinIn,
    faTiktok,
    faBluesky
} from '@fortawesome/free-brands-svg-icons';
import { faBars, faGear } from '@fortawesome/free-solid-svg-icons';

interface Props extends React.HTMLAttributes<HTMLElement>{
    visualMode: string
    toggleSettings: () => void
}

export default function Navbar(props: Props) {
    return (
        <nav className={styles[props.visualMode]}>
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
            <a className={styles.nav_item} href="#projectsSection">
                Blog
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

                <a href="https://bsky.app/profile/jakesaintg.bsky.social">
                    <FontAwesomeIcon icon={faBluesky} size="lg" />
                </a>

                <FontAwesomeIcon
                    icon={faGear}
                    size="lg"
                    onClick={props.toggleSettings}
                    style={{ cursor: 'pointer' }}
                />
            </div>

            <button>
                <FontAwesomeIcon icon={faBars} />
            </button>
        </nav>
    );
}
