import { MouseEvent, useState } from 'react';
import PageSection from '../../GeneralComponents/PageSection';
import styles from './ExperienceSection.module.css';
import workExperience from '../../assets/experience.json';

interface Props extends React.HTMLAttributes<HTMLElement>{
    visualMode: string
}

const contentStyle: React.CSSProperties = {};

export default function ExperienceSection(props: Props) {
    const { visualMode } = props;
    let [workHighlights, setWorkHighlights] = useState(workExperience[0].highlights);
    let [activeClass, setActiveClass] = useState('dev-fulltime');
    let key = 0;

    const returnWorkExperience = (event: MouseEvent<HTMLElement>) => {
        setWorkHighlights(workHighlights = workExperience.find(e => e.title === event.currentTarget.id)!.highlights);
        setActiveClass(activeClass = event.currentTarget.id);
    }

    return (
        <PageSection title='Experience' id="experienceSection" style={contentStyle} visualMode={visualMode}>
            <div className={styles.experience_content}>
                <div className={`${styles.experience_details} ${styles[props.visualMode]}`}>
                    <ul>{workHighlights.map(e => <li key={key++}>{e}</li>)}</ul>
                </div>
                <div className={styles.experience}>
                    <h3 className={styles.current_header}>Current:</h3>
                    <div className={styles.current_experience}>
                        <button 
                            className={`${styles[props.visualMode]} ${activeClass === 'dev-fulltime' ? `${styles.selected_profession} ${styles[props.visualMode]}` : `${styles.profession}`}`} 
                            id='dev-fulltime'
                            onClick={returnWorkExperience}
                        >
                            Software Developer
                        </button>
                        <button 
                            className={`${styles[props.visualMode]} ${activeClass === 'mentor' ? `${styles.selected_profession} ${styles[props.visualMode]}` : `${styles.profession}`}`} 
                            id='mentor' 
                            onClick={returnWorkExperience}
                        >
                            Code Louisville Mentor
                        </button>
                    </div>

                    <h3 className={styles.past_header}>Previous:</h3>
                    <div className={styles.past_experience}>
                        <button 
                            className={`${styles[props.visualMode]} ${activeClass === 'dev-intern' ? `${styles.selected_profession} ${styles[props.visualMode]}` : `${styles.profession}`}`}
                            id='dev-intern' 
                            onClick={returnWorkExperience}
                        >
                                Software Dev Intern
                        </button>
                        <button 
                            className={`${styles[props.visualMode]} ${activeClass === 'dev-student' ? `${styles.selected_profession} ${styles[props.visualMode]}` : `${styles.profession}`}`}
                            id='dev-student' 
                            onClick={returnWorkExperience}
                        >
                                Code Louisville Student
                        </button> 
                        <button 
                            className={`${styles[props.visualMode]} ${activeClass === 'nurse' ? `${styles.selected_profession} ${styles[props.visualMode]}` : `${styles.profession}`}`}
                            id='nurse' 
                            onClick={returnWorkExperience}
                        >
                                ICU Nurse
                        </button>
                        <button 
                            className={`${styles[props.visualMode]} ${activeClass === 'awards' ? `${styles.selected_profession} ${styles[props.visualMode]}` : `${styles.profession}`}`}
                            id='awards' 
                            onClick={returnWorkExperience}
                        >
                                Awards
                        </button>
                    </div>
                </div>
            </div>
        </PageSection>
    );
}
