import styles from './Project.module.css';
import test from '../../assets/img/lang_icons/csharp.png';

interface Props extends React.HTMLAttributes<HTMLElement> {
    visualMode: string;
    project: project;
}

export interface project {
    name: string;
    hosted: string | null;
    description: string;
    technologies: string[];
}

const contentStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
};

export default function Project(props: Props) {
    const { project, visualMode } = props;
    let key = 0;

    project.technologies.forEach((t) => {

        console.log(t)
        // return <img key={key++} src={require(`../../../assets/img/lang_icons/${t}.png`)} alt={`Icon for ${t}`} />
    });

    return (
        <div className={styles.project} style={contentStyle}>
            <h3>{project.name}</h3>
            <a href="example.com">{project.hosted}</a>
            <div>
                {project.technologies.map((t) => {
                    return <img key={key++} src={require(`../../../assets/img/lang_icons/${t}.png`)} alt={`Icon for ${t}`} />;
                })}
            </div>
            <p>{project.description}</p>
        </div>
    );
}
