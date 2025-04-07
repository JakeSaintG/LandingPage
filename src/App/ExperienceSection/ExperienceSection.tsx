import { MouseEvent, useState } from 'react';
import PageSection from '../General/PageSection';
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

const currentWorkExp: work[] = [];
const prevWorkExp: work[] = [];

workExperience.map( (w: work) => {
    if(w.current) currentWorkExp.push(w);
    if(!w.current) prevWorkExp.push(w);
})

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
                    <ul>{workContributions.map(wc => <li key={details_key++}>{wc}</li>)}</ul>
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
