import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './Navbar.module.css'

import {
    faGithub,
    faLinkedinIn,
    faTiktok,
} from '@fortawesome/free-brands-svg-icons'

export default function Navbar() {
    return (
        <>
            <nav className={styles.nav}>
                <a className={styles.nav_item} href="#section">
                    WIP-About
                </a>
                <a className={styles.nav_item} href="#section">
                    WIP-Projects
                </a>
                <a className={styles.nav_item} href="#section">
                    WIP-Awards
                </a>
                <a className={styles.nav_item} href="#section">
                    WIP-Experience
                </a>
                <div className={`${styles.nav_item} ${styles.socials}`}>
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
            <div className=''></div>
        </>
    )
}
