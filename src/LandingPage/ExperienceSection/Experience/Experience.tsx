import styles from './Experience.module.css';
import { work } from '../ExperienceSection'
import { MouseEvent } from 'react';

interface Props extends React.HTMLAttributes<HTMLElement>{
    visualMode: string
    workExperience: work[]
    activeClass: string
    experienceTitle: string
    setWorkExperience: (event: MouseEvent<HTMLElement>) => void
}

export default function Experience(props: Props) {
    let key = 0;

    return (
        <div>
            <h3 className={styles.experience_title}>
                {props.experienceTitle}:
            </h3>
            <div className={styles.experience_list}>
                {props.workExperience.map((e: work) =>
                    <button 
                        key={key++}
                        className={`${styles[props.visualMode]} ${props.activeClass === e.id ? `${styles.selected_profession} ${styles[props.visualMode]}` : `${styles.profession}`}`}
                        id={e.id}
                        onClick={props.setWorkExperience}
                    >
                            {e.title}
                    </button>
                )}
            </div>
        </div>
    )
}
