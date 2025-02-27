import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './ContactFooter.module.css';
import { faBluesky, faDiscord, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

interface Props extends React.HTMLAttributes<HTMLElement> {
    visualMode: string;
}

const contentStyle: React.CSSProperties = {};

// Just make this a footer. No need for a whole section (refactor)
export default function ContactSection(props: Props) {
    const { visualMode } = props;

    return (
        <footer>
            <div className={styles.socials}>
                <h3>Socials</h3>
                <div>
                    <a href="https://www.tiktok.com/@jakesaintg" target="#" aria-hidden="true">
                        <FontAwesomeIcon icon={faTiktok} size="lg" />
                    </a>
                    <a href="https://bsky.app/profile/jakesaintg.bsky.social" target="#" aria-hidden="true">
                        <FontAwesomeIcon icon={faBluesky} size="lg" />
                    </a>
                    <a href="https://discordapp.com/users/231257566418698251" target="#" aria-hidden="true">
                        <FontAwesomeIcon icon={faDiscord} size="lg" />
                    </a>
                </div>
            </div>

            <div className={styles.contact}> 
                <h3>Contact</h3>

                <a href="mailto:jake@stgermain.dev?subject=I would like to chat!">
                    <FontAwesomeIcon icon={faEnvelope} size="lg" aria-hidden="true"/>
                    &#8287;
                    <span>jake@stgermain.dev</span>  
                </a>

            </div>

            {/* <div className={styles.foo}>foobar</div> */}
            <div className={styles.footer_base}>1993 Jake St. Germain</div>
        </footer>
    );
}
