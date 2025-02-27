// TODO: Make these icon imports more dynamic/flexible/generic
import styles from './Project.module.css';
import cSharpImg from '../../../assets/img/lang_icons/csharp.png';
import angularImg from '../../../assets/img/lang_icons/angular.png';
import htmlImg from '../../../assets/img/lang_icons/html.png';
import javascriptImg from '../../../assets/img/lang_icons/javascript.png';
import typescriptImg from '../../../assets/img/lang_icons/typescript.png';
import powershellImg from '../../../assets/img/lang_icons/powershell.png';
import dartImg from '../../../assets/img/lang_icons/dart.png';
import rustImg from '../../../assets/img/lang_icons/rust.png';
import sqlImg from '../../../assets/img/lang_icons/sql.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

interface Props extends React.HTMLAttributes<HTMLElement> {
    visualMode: string;
    project: project;
}

export interface project {
    name: string;
    hosted: string | null;
    description: string;
    technologies: string[];
    repo_link: string;
    favorite: boolean;
    eductional: boolean;
}

const langs: Record<string, string> = {
    csharp: cSharpImg,
    javascript: javascriptImg,
    typescript: typescriptImg,
    html: htmlImg,
    angular: angularImg,
    sql: sqlImg,
    powershell: powershellImg,
    dart: dartImg,
    rust: rustImg
}

export default function Project(props: Props) {
    let key = 0;
    let hosted = null;

    if (props.project.hosted) {
        hosted = <a href={props.project.hosted} target='_blank' aria-label='link to hosted page' title='link to hosted page'>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="lg" aria-hidden="true"/>
        </a>
    }

    return (
        <div className={`${styles.project} ${styles[props.visualMode]}`}>
            <div className={`${styles.project_border} ${props.project.favorite ? styles.favorite : ''}`}></div>
            <div className={styles.project_content}>
                <div className={styles.project_header}>

                    <h3>{props.project.name}</h3>
                    <div>
                        <a href={props.project.repo_link} target='_blank' aria-label='link to github repo' title='link to github repo'>
                            <FontAwesomeIcon icon={faGithub} size="xl" aria-hidden="true"/>
                        </a>
                        {hosted}
                    </div>
                </div>
                <p>{props.project.description}</p>
                <span>
                    {props.project.technologies.map((t) => {
                        return <img key={key++} src={langs[t]} alt={`Icon for ${t}`} />;
                    })}
                </span>
            </div>
        </div>
    );
}
