import styles from './ExperienceSection.module.css'

export default function ExperienceSection() {
    return (
        <section className={styles.experienceSection} id='experienceSection'>
            <h1>Experience</h1>
            <div className={styles.experience}>
                <p>ICU Nurse</p>
                <p>Code Louisville Student</p>
                <p>Software Developer Intern</p>
                <p>Code Louisville Mentor</p>
                <p>Software Developer</p>
                <p>Awards</p>
            </div>
        </section>
    )
}
