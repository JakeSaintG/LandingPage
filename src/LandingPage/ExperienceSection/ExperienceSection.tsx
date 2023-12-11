import PageSection from '../../GeneralComponents/PageSection';
import styles from './ExperienceSection.module.css';

interface Props extends React.HTMLAttributes<HTMLElement>{
    visualMode: string
}

const contentStyle: React.CSSProperties = { display: 'grid', gridTemplateColumns:'1fr 1fr' };

export default function ExperienceSection(props: Props) {
    const { visualMode } = props;
    let detailsVisualMode: string;

    visualMode === 'dark_mode' ? detailsVisualMode = styles.dark_mode_details : detailsVisualMode = styles.light_mode_details;

    return (
        <PageSection title='Experience' id="experienceSection" style={contentStyle} visualMode={visualMode}>
            <div className={`${styles.experience_details} ${detailsVisualMode}`}>
                <p>Placeholder</p>
            </div>
            <div className={styles.experience}>
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
