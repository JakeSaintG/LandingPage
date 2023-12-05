import styles from './AboutSection.module.css';

const elevatorPitch = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim 
ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex 
ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

export default function AboutSection() {
    return (
        <section className={styles.aboutSection} id="aboutSection">
            <h1>Jake St. Germain</h1>
            <div className={styles.about}>
                <div>placeholder</div>
                <div className={styles.elevatorPitch}>
                    <p>{elevatorPitch}</p>

                    {/* TODO: make this a rotating tidbit or saying "carosel"
                        "Registered nurse and registered nerd."
                        "Cat enthusiast"
                    */}
                    <p>tidbit</p>
                </div>
            </div>
        </section>
    );
}
