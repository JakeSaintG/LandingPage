import styles from './Project.module.css'

interface Props extends React.HTMLAttributes<HTMLElement>{
    visualMode: string,
    project: project
}

export interface project {
    name: string
    hosted: string | null
    technologies: string[]
}

const contentStyle: React.CSSProperties = { display: 'flex', flexDirection: 'column' };

export default function Project(props: Props) {
    const { project, visualMode } = props;

    const name = project.name;
    const technologies = project.technologies;
    const hosted = project.hosted;

    return (
        <div className={styles.project} style={contentStyle}>
            <h3>{name}</h3>
            <a href='example.com'>{hosted}</a>
            {technologies.join(', ')}
        </div>
    );
}
