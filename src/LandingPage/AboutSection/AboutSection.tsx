import PageSection from '../../GeneralComponents/PageSection';
import styles from './AboutSection.module.css';

const contentStyle: React.CSSProperties = { display: 'grid', gridTemplateColumns:'1fr 1fr' };

const elevatorPitch = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim 
ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex 
ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

export default function AboutSection() {
    return (
        <PageSection title='Jake St. Germain' id="aboutSection" style={contentStyle}>
            <div>placeholder</div>
            <div className={styles.elevatorPitch}>
                <p>{elevatorPitch}</p>

                {/* TODO: make this a rotating tidbit or saying "carosel"
                    "Registered nurse and registered nerd."
                    "Cat enthusiast"
                */}
                <p>tidbit</p>
            </div>
        </PageSection>
    );
}