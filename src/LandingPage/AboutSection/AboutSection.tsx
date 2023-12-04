import styles from './AboutSection.module.css';

export default function AboutSection() {
    return (
        <section className={styles.aboutSection} id="aboutSection">
            <h1>Jake St. Germain</h1>
            <div className={styles.about}>
                <div>placeholder</div>
                <div className={styles.elevatorPitch}>placeholder</div>
            </div>
        </section>
    );
}
