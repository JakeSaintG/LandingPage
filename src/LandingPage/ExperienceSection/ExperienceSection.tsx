import styles from './ExperienceSection.module.css';

export default function ExperienceSection() {
    return (
        <section className={styles.experienceSection} id="experienceSection">
            <h2>Experience</h2>
            <div className={styles.experience}>
                <div className={styles.experienceDetails}>placeholder</div>
                <div>
                    <p>ICU Nurse</p>
                    <p>Code Louisville Student</p>
                    <p>Software Developer Intern</p>
                    <p>Code Louisville Mentor</p>
                    <p>Software Developer</p>
                    <p>Awards</p>
                </div>
            </div>
        </section>
    );
}
