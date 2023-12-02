import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './Navbar.module.css'

import {
    faGithub,
    faLinkedinIn,
    faTiktok,
} from '@fortawesome/free-brands-svg-icons'

export default function Navbar() {
    return (
        <nav className={styles.nav}>
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
                    <FontAwesomeIcon icon={faLinkedinIn} />
                </a>

                <a href="https://github.com/JakeSaintG">
                    <FontAwesomeIcon icon={faGithub} />
                </a>

                <a href="https://www.tiktok.com/@jakesaintg">
                    <FontAwesomeIcon icon={faTiktok} />
                </a>
            </div>
        </nav>
    )
}
