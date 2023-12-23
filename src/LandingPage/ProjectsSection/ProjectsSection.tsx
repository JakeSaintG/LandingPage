import styles from './ProjectsSection.module.css'
import PageSection from '../../GeneralComponents/PageSection';

interface Props extends React.HTMLAttributes<HTMLElement>{
    visualMode: string
}

const projects = [
    {
        name: "test",
        hosted: null,
        technologies: [
            "C#"
        ]
    },
    {
        name: "test2",
        hosted: "gh pages link",
        technologies: [
            "Angular"
        ]
    }
];

const contentStyle: React.CSSProperties = { display: 'grid', gridTemplateColumns:'1fr' };

export default function ProjectsSection(props: Props) {
    const { visualMode } = props;
    let key = 0;
    
    return (
        <PageSection title='Projects' id="projectsSection" style={contentStyle} visualMode={visualMode}>
            <div className={styles.projects}>
                {projects.map(e =>
                    <div key={key++} className={styles.project}>
                        {e.name}
                    </div>)
                }
            </div>
        </PageSection>
    );
}
