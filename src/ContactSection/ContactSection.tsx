import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PageSection from '../GeneralComponents/PageSection';
import styles from './ContactSection.module.css';
import { faBluesky, faTiktok } from '@fortawesome/free-brands-svg-icons';

interface Props extends React.HTMLAttributes<HTMLElement> {
    visualMode: string;
}

const contentStyle: React.CSSProperties = {};

// Just make this a footer. No need for a whole section (refactor)
export default function ContactSection(props: Props) {
    const { visualMode } = props;

    return (
        // <PageSection title='Contact' id="contactSection" style={contentStyle} visualMode={visualMode}>
        //     <p>Placeholder</p>
        // </PageSection>

        <footer>
            <div className={styles.socials}>
                <h3>Socials</h3>
                <div>
                    <a href="https://www.tiktok.com/@jakesaintg" target="#">
                        <FontAwesomeIcon icon={faTiktok} size="lg" />
                    </a>

                    <a href="https://bsky.app/profile/jakesaintg.bsky.social" target="#">
                        <FontAwesomeIcon icon={faBluesky} size="lg" />
                    </a>
                </div>
            </div>

            <div className={styles.contact}>
                <h3>Contact</h3>
                <p>jake@stgermain.dev</p>
            </div>

            {/* <div className={styles.foo}>foobar</div> */}
            <div className={styles.footer_base}>1993 Jake St. Germain</div>
        </footer>
    );
}
