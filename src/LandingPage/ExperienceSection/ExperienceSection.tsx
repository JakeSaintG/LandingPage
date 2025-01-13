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
    let details_key = 0;
    let previous_key = 0;
    let current_key = 0;

    // TODO: Do these need to be in a useState()? Probably?
    const currentWorkExp = workExperience.reduce( (acc, work) => {
        if(work.current) acc.push(work);
        return acc;
    }, [] as any[] );

    const prevWorkExp = workExperience.reduce( (acc, work) => {
        if(!work.current) acc.push(work);
        return acc;
    }, [] as any[] );

    const returnWorkExperience = (event: MouseEvent<HTMLElement>) => {
        setWorkHighlights(workHighlights = workExperience.find(e => e.id === event.currentTarget.id)!.highlights);
        setActiveClass(activeClass = event.currentTarget.id);
    }

    return (
        <PageSection title='Experience' id="experienceSection" style={contentStyle} visualMode={visualMode}>
            <div className={styles.experience_content}>
                <div className={`${styles.experience_details} ${styles[props.visualMode]}`}>
                    <ul>{workHighlights.map(e => <li key={details_key++}>{e}</li>)}</ul>
                </div>
                <div className={styles.experience}>
                    <h3 className={styles.current_header}>Current:</h3>
                    <div className={styles.current_experience}>
                        {currentWorkExp.map((e: any) =>
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

                    <h3 className={styles.past_header}>Previous:</h3>
                    <div className={styles.past_experience}>
                        {prevWorkExp.map((e: any) =>
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
