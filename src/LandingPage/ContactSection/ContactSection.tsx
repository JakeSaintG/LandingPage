import styles from './ContactSection.module.css';

export default function ContactSection() {
    return (
        <section className={styles.contactSection} id="contactSection">
            <h2>Contact</h2>
            <div className={styles.contact}></div>
        </section>
    );
}
