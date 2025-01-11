// TODO: Make these icon imports more dynamic/flexible/generic
import styles from './Project.module.css';
import cSharpImg from '../../../assets/img/lang_icons/csharp.png';
import angularImg from '../../../assets/img/lang_icons/angular.png';
import htmlImg from '../../../assets/img/lang_icons/html.png';
import javascriptImg from '../../../assets/img/lang_icons/javascript.png';
import typescriptImg from '../../../assets/img/lang_icons/typescript.png';
import sqlImg from '../../../assets/img/lang_icons/sql.png';

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

const langs: Record<string, string> = {
    csharp: cSharpImg,
    javascript: javascriptImg,
    typescript: typescriptImg,
    html: htmlImg,
    angular: angularImg,
    sql: sqlImg
}

export default function Project(props: Props) {
    let key = 0;

    return (
        <div className={`${styles.project} ${styles[props.visualMode]}`}>

            <div className={styles.project_header}>
                <h3>{props.project.name}</h3>
                <div>
                    {props.project.technologies.map((t) => {
                        return <img key={key++} src={langs[t]} alt={`Icon for ${t}`} />;
                    })}
                </div>

            </div>

            <a href="example.com">{props.project.hosted}</a>
            <p>{props.project.description}</p>
        </div>
    );
}
