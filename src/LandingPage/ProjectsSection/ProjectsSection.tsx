import styles from './ProjectsSection.module.css'
import PageSection from '../../GeneralComponents/PageSection';
import projects from '../../assets/projects.json'
import Project from './Project/Project';
import { project } from './Project/Project';

interface Props extends React.HTMLAttributes<HTMLElement>{
    visualMode: string
}

// TODO: Need to remember why I did this and it doesn't work in the css......
const contentStyle: React.CSSProperties = { display: 'flex', flexDirection: 'column' };

export default function ProjectsSection(props: Props) {
    let key = 0;
    
    return (
        <PageSection title='Projects' id="projectsSection" style={contentStyle} visualMode={props.visualMode}>
            <div className={styles.projects_desc}>
                <p>I like to stay busy! Especially when something I find something challenging, new, or intresting to work on. You'll find projects with all kinds of different technologies, languages, or applications here! I also called out some of my favorites.</p>
                <p>Also, Katas (link? Something?)</p>
            </div>
            <div className={`${styles.projects} ${styles[props.visualMode]}`}>
                {projects.map((e: project) =>
                    <Project visualMode={props.visualMode} key={key++} project={e}/>
                )}
            </div>
        </PageSection>
    );
}
