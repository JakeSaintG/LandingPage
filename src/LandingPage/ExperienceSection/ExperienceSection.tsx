import { MouseEvent, useState } from 'react';
import PageSection from '../../GeneralComponents/PageSection';
import styles from './ExperienceSection.module.css';
import workExperience from '../../assets/experience.json';

interface Props extends React.HTMLAttributes<HTMLElement>{
    visualMode: string
}

interface work {
    title: string;
    id: string;
    current: boolean;
    contributions: string[];
}

// TODO: REFACTOR! I'm sorting the array twice with both of these reduce functions.
// A single function to sort 2 work exp buckets would be better.
const currentWorkExp = workExperience.reduce( (acc, work) => {
    if(work.current) acc.push(work);
    return acc;
}, [] as work[] );

const prevWorkExp = workExperience.reduce( (acc, work) => {
    if(!work.current) acc.push(work);
    return acc;
}, [] as work[] );

export default function ExperienceSection(props: Props) {
    const {visualMode} = props;
    const [workContributions, setWorkContributions] = useState(workExperience[0].contributions);
    const [activeClass, setActiveClass] = useState('dev-fulltime');
    let details_key = 0;
    let previous_key = 0;
    let current_key = 0;

    const returnWorkExperience = (event: MouseEvent<HTMLElement>) => {
        setWorkContributions(workExperience.find(e => e.id === event.currentTarget.id)!.contributions);
        setActiveClass(event.currentTarget.id);
    }

    return (
        <PageSection title='Experience' id="experienceSection" style={{}} visualMode={visualMode}>
            <div className={styles.experience_content}>
                <div className={`${styles.experience_details} ${styles[props.visualMode]}`}>
                    <ul>{workContributions.map(e => <li key={details_key++}>{e}</li>)}</ul>
                </div>
                <div className={styles.experience}>
                    <h3 className={styles.current_header}>Current:</h3>
                    <div className={styles.current_experience}>
                        {currentWorkExp.map((e: work) =>
                            <button 
                                key={current_key++}
                                className={`${styles[props.visualMode]} ${activeClass === e.id ? `${styles.selected_profession} ${styles[props.visualMode]}` : `${styles.profession}`}`}
                                id={e.id}
                                onClick={returnWorkExperience}
                            >
                                    {e.title}
                            </button>
                        )}
                    </div>

                    <h3 className={styles.past_header}>Previous:</h3>
                    <div className={styles.past_experience}>
                        {prevWorkExp.map((e: work) =>
                            <button 
                                key={previous_key++}
                                className={`${styles[props.visualMode]} ${activeClass === e.id ? `${styles.selected_profession} ${styles[props.visualMode]}` : `${styles.profession}`}`}
                                id={e.id}
                                onClick={returnWorkExperience}
                            >
                                    {e.title}
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </PageSection>
    );
}
