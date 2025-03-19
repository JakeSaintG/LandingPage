import { MouseEvent, useState } from 'react';
import PageSection from '../../GeneralComponents/PageSection';
import styles from './ExperienceSection.module.css';
import workExperience from '../../assets/experience.json';
import Experience from './Experience/Experience';

interface Props extends React.HTMLAttributes<HTMLElement>{
    visualMode: string
}

export interface work {
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
                    <Experience 
                        visualMode={props.visualMode}
                        activeClass={activeClass}
                        setWorkExperience={returnWorkExperience}
                        workExperience={currentWorkExp}
                        experienceTitle='Current'
                    >
                    </Experience>
                    <Experience 
                        visualMode={props.visualMode}
                        activeClass={activeClass}
                        setWorkExperience={returnWorkExperience}
                        workExperience={prevWorkExp}
                        experienceTitle='Previous'
                    >
                    </Experience>
                </div>
            </div>
        </PageSection>
    );
}
