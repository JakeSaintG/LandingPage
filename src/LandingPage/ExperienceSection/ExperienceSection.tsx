import { MouseEvent, useState } from 'react';
import PageSection from '../../GeneralComponents/PageSection';
import styles from './ExperienceSection.module.css';
import workExperience from '../../assets/experience.json';

interface Props extends React.HTMLAttributes<HTMLElement>{
    visualMode: string
}

let detailsVisualMode: string;
let buttonVisualMode: string;
let activeButtonVisualMode: string;
const contentStyle: React.CSSProperties = {};

export default function ExperienceSection(props: Props) {
    const { visualMode } = props;
    let [workHighlights, setWorkHighlights] = useState(workExperience[0].highlights);
    let [activeClass, setActiveClass] = useState('dev-fulltime');
    let key = 0;

    //TODO: get rid of this if statement
    if (visualMode === 'dark_mode') {
        activeButtonVisualMode = `${styles.selected_profession} ${styles.selected_profession_dark}`;
        detailsVisualMode = styles.details_dark;
    } else {
        activeButtonVisualMode = `${styles.selected_profession} ${styles.selected_profession_light}`;
        detailsVisualMode = styles.details_light;
    }

    const returnWorkExperience = (event: MouseEvent<HTMLElement>) => {
        setWorkHighlights(workHighlights = workExperience.find(e => e.title === event.currentTarget.id)!.highlights);
        setActiveClass(activeClass = event.currentTarget.id);
    }

    return (
        <PageSection title='Experience' id="experienceSection" style={contentStyle} visualMode={visualMode}>
            <div className={styles.experience_content}>
                <div className={`${styles.experience_details} ${detailsVisualMode}`}>
                    <ul>{workHighlights.map(e => <li key={key++}>{e}</li>)}</ul>
                </div>
                <div className={styles.experience}>
                    <h3 className={styles.current_header} >Current:</h3>
                    <div className={styles.current_experience}>
                        <button className={`${detailsVisualMode} ${activeClass === 'dev-fulltime' ? `${activeButtonVisualMode}` : `${styles.profession}`}`} id='dev-fulltime' onClick={returnWorkExperience}>Software Developer</button>
                        <button className={`${detailsVisualMode} ${activeClass === 'mentor' ? `${activeButtonVisualMode}` : `${styles.profession}`}`} id='mentor' onClick={returnWorkExperience}>Code Louisville Mentor</button>
                    </div>

                    <h3 className={styles.past_header}>Previous:</h3>
                    <div className={styles.past_experience}>
                        <button className={`${detailsVisualMode} ${activeClass === 'dev-intern' ? `${activeButtonVisualMode}` : `${styles.profession}`}`} id='dev-intern' onClick={returnWorkExperience}>Software Dev Intern</button>
                        <button className={`${detailsVisualMode} ${activeClass === 'dev-student' ? `${activeButtonVisualMode}` : `${styles.profession}`}`} id='dev-student' onClick={returnWorkExperience}>Code Louisville Student</button> 
                        <button className={`${detailsVisualMode} ${activeClass === 'nurse' ? `${activeButtonVisualMode}` : `${styles.profession}`}`} id='nurse' onClick={returnWorkExperience}>ICU Nurse</button>
                        <button className={`${detailsVisualMode} ${activeClass === 'awards' ? `${activeButtonVisualMode}` : `${styles.profession}`}`} id='awards' onClick={returnWorkExperience}>Awards</button>
                    </div>
                </div>
            </div>
        </PageSection>
    );
}
