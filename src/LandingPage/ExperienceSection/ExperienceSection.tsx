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
            "Sought additional training certifications in Pediatric Advanced Life Support (PALS) as well as training in PRISMA.",
            "Managed life support equipment and worked with multidisciplinary teammates to deliver compassionate care for families and critically ill patients with debilitating conditions or injuries.",
            "Assessed conditions, symptoms, diagnostic tests, and behaviors of pediatric patients to monitor for life-altering changes, responded using quick critical thinking skills, and worked well with multi-disciplinary teams.",
            "Responded to rapid changes in patient condition, worked well under pressure, and exercised excellent time management skills with multiple patient assignments.",
            "Lead a Council of my peers to innovate and improve nursing practice.",
            "Followed policies and procedures regarding patient privacy and information detailed in HIPAA.",
            "Adapted quickly to new patient populations, hospital, policies, and procedures to provide support for staff at another (adult) hospital in the same system while they were stretched thin during the COVID-19 pandemic.",
            "Aided in hospital logistics including moving patients, closing units, and arrangement of nursing assignments."
        ]
    },
    {
        title: "dev-intern",
        highlights: [
            "Updated a large production application from Angular 10 to Angular 12 in a timely manner.",
            "Implemented a quality-of-life update by adding a REST API endpoint to return information on previously added sets of data. This would auto-populate a picklist on load and allow the user to more easily add relevant codes to a value set.",
            "Gained experience working in Azure DevOps, Snowflake Data Cloud, and Azure services. ",
            "Collaborated with a team of software engineers by pairing on projects, reviewing code, and working through solutions to difficult healthcare-related problems"
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
    let [activeClass, setActiveClass] = useState('dev-fulltime');
    let key = 0;

    visualMode === 'dark_mode' ? detailsVisualMode = styles.dark_mode_details : detailsVisualMode = styles.light_mode_details;

    const returnWorkExperience = (event: MouseEvent<HTMLElement>) => {
        setWorkHighlights(workHighlights = workExperience.find(e => e.title === event.currentTarget.id)!.highlights);
        setActiveClass(activeClass = event.currentTarget.id);
    }

    return (
        <PageSection title='Experience' id="experienceSection" style={contentStyle} visualMode={visualMode}>
            <div className={`${styles.experience_details} ${detailsVisualMode}`}>
                <ul>{workHighlights.map(e => <li key={key++}>{e}</li>)}</ul>
            </div>
            <div className={styles.experience}>
                <h3>Current:</h3>
                <button className={`${activeClass === 'dev-fulltime' ? `${styles.selected_profession}` : `${styles.profession}`}`} id='dev-fulltime' onClick={returnWorkExperience}>Software Developer</button>
                <button className={`${activeClass === 'mentor' ? `${styles.selected_profession}` : `${styles.profession}`}`} id='mentor' onClick={returnWorkExperience}>Code Louisville Mentor</button>
                <h3>Previous:</h3>
                <button className={`${activeClass === 'dev-intern' ? `${styles.selected_profession}` : `${styles.profession}`}`} id='dev-intern' onClick={returnWorkExperience}>Software Developer Intern</button>
                <button className={`${activeClass === 'dev-student' ? `${styles.selected_profession}` : `${styles.profession}`}`} id='dev-student' onClick={returnWorkExperience}>Code Louisville Student</button>
                <button className={`${activeClass === 'nurse' ? `${styles.selected_profession}` : `${styles.profession}`}`} id='nurse' onClick={returnWorkExperience}>ICU Nurse</button>
                <button className={`${activeClass === 'awards' ? `${styles.selected_profession}` : `${styles.profession}`}`} id='awards' onClick={returnWorkExperience}>Awards</button>
            </div>
        </PageSection>
    );
}
