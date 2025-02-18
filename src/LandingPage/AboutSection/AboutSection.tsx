import { useRef, useState } from 'react';
import PageSection from '../../GeneralComponents/PageSection';
import styles from './AboutSection.module.css';
import tidbits from '../../assets/tidbits.json'
import elevatorPitch from '../../assets/elevator_pitch.json';

interface Props extends React.HTMLAttributes<HTMLElement>{
    visualMode: string
}

const contentStyle: React.CSSProperties = { };

const tibbitAnimation = [
    { transform: "translateX(-650px)" },            // starting position
    { transform: 'translateX(0)', offset: 0.15 },   // Mid pos + pause
    { transform: 'translateX(0)', offset: 0.85 },   // End mid pos pause
    { transform: "translateX(650px)" }              // end pos
];

const useInterval = (callback: Function, delay: number) => {
    let [activeInterval, setActiveInterval] = useState(false);
    
    if (!activeInterval) {
        setInterval(callback, delay);
        setActiveInterval(activeInterval = true);
    }
}

export default function AboutSection(props: Props) {
    let [tidbit, setTidbit] = useState('Hello!');
    let key = 0;
    const tidbitRef = useRef<HTMLParagraphElement | null>(null);

    const parseBreak = () => {
        
    }

    useInterval(() => {
        let newTidbit: string;

        do {
            newTidbit = tidbits[Math.floor(Math.random() * tidbits.length)];
        } while (newTidbit === tidbit);

        tidbitRef.current?.animate(tibbitAnimation, {duration: 4000}).commitStyles();
        setTidbit(tidbit = newTidbit);
    }, 4000);

    return (
        <PageSection title='Jake St. Germain' id="aboutSection" style={contentStyle} visualMode={props.visualMode} header='h1'>
            <div className={styles.about_content}>
                <div>placeholder</div>
                <div className={`${styles.elevator_pitch} ${styles[props.visualMode]}`}>
                    <div>
                        {elevatorPitch.paragraphs.map(e => 
                            {
                                if (e === "") {
                                    return <br key={key++} />
                                }

                                return <p key={key++}>
                                    {e}
                                </p>
                            }
                        )}
                    </div>
                    <span className={styles.tidbit}>
                        <p ref={tidbitRef}>{tidbit}</p>
                    </span>
                </div>
            </div>
        </PageSection>
    );
}