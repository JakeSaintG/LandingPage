import { MouseEvent, useState } from 'react';
import PageSection from '../../GeneralComponents/PageSection';
import styles from './ExperienceSection.module.css';

interface Props extends React.HTMLAttributes<HTMLElement>{
    visualMode: string
}

let detailsVisualMode: string;
const contentStyle: React.CSSProperties = { display: 'grid', gridTemplateColumns:'1fr 1fr' };

const workExperience = [
    {
        title: "dev-fulltime",
        highlights: [
            "Wrote code",
            "Reviewed code",
            "Was humbled by my team's senior dev"
        ]
    },
    {
        title: "mentor",
        highlights: [
            "taught code",
            "Reviewed code"
        ]
    },
    {
        title: "nurse",
        highlights: [
            "Critical thinking",
            "Saved lives",
            "Did my best"
        ]
    },
    {
        title: "dev-intern",
        highlights: [
            "Learned things",
            "Migration",
            "Updated our apps (ng and .net)"
        ]
    },
    {
        title: "dev-student",
        highlights: [
            "Learned things",
            "Wrote (bad) code",
            "Made a pokemon app or two"
        ]
    },
    {
        title: "awards",
        highlights: [
            "Pokemon Master",
            "Nurse of the Year Finalist"
        ]
    },
];

export default function ExperienceSection(props: Props) {
    const { visualMode } = props;
    let [workHighlights, setWorkHighlights] = useState(workExperience[0].highlights);
    let key = 0;

    visualMode === 'dark_mode' ? detailsVisualMode = styles.dark_mode_details : detailsVisualMode = styles.light_mode_details;

    const returnWorkExperience = (event: MouseEvent<HTMLElement>) => {
        setWorkHighlights(workHighlights = workExperience.find(e => e.title === event.currentTarget.id)!.highlights);
    }

    return (
        <PageSection title='Experience' id="experienceSection" style={contentStyle} visualMode={visualMode}>
            <div className={`${styles.experience_details} ${detailsVisualMode}`}>
                <ul>{workHighlights.map(e => <li key={key++}>{e}</li>)}</ul>
            </div>
            <div className={styles.experience}>
                <h3>Current:</h3>
                <button id='dev-fulltime' onClick={returnWorkExperience}>Software Developer</button>
                <button id='mentor' onClick={returnWorkExperience}>Code Louisville Mentor</button>
                
                <h3>Previous:</h3>
                <button id='dev-intern' onClick={returnWorkExperience}>Software Developer Intern</button>
                <button id='dev-student' onClick={returnWorkExperience}>Code Louisville Student</button>
                <button id='nurse' onClick={returnWorkExperience}>ICU Nurse</button>
                <button id='awards' onClick={returnWorkExperience}>Awards</button>
            </div>
        </PageSection>
    );
}
