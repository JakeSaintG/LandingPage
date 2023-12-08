import PageSection from '../../GeneralComponents/PageSection';
import styles from './ExperienceSection.module.css';

export default function ExperienceSection() {
    const contentStyle: React.CSSProperties = { display: 'grid', gridTemplateColumns:'1fr 1fr' };
    
    return (
        <PageSection title='Experience' id="experienceSection" style={contentStyle}>
            <div className={styles.experiences}>placeholder</div>
            <div className={styles.experienceDetails}>
                <p>ICU Nurse</p>
                <p>Code Louisville Student</p>
                <p>Software Developer Intern</p>
                <p>Code Louisville Mentor</p>
                <p>Software Developer</p>
                <p>Awards</p>
            </div>
        </PageSection>
    );
}
