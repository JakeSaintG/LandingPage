import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from 'react';
import PageSection from '../../GeneralComponents/PageSection';
import styles from './AboutSection.module.css';
import tidbits from '../../assets/tidbits.json'
import elevatorPitch from '../../assets/elevator_pitch.json';

interface Props extends React.HTMLAttributes<HTMLElement>{
    visualMode: string
}

const contentStyle: React.CSSProperties = { };

const tibbitAnimation = [
    { transform: "translateX(-550px)" },
    { transform: 'translateX(0)', offset: 0.15 },
    { transform: 'translateX(0)', offset: 0.85 },
    { transform: "translateX(550px)" }
];

const useInterval = (callback: Function, delay: number) => {
    let [test, setTest] = useState(false);
    
    if (!test) {
        setInterval(callback, delay);
        setTest(test = true);
    }
}

export default function AboutSection(props: Props) {
    const { visualMode } = props;
    let aboutVisualMode: string;
    let [tidbit, setTidbit] = useState('Hello!');
    let key = 0;
    const tidbitRef = useRef<HTMLParagraphElement | null>(null);

    visualMode === 'dark_mode' ? aboutVisualMode = styles.about_dark : aboutVisualMode = styles.about_light;

    useInterval(() => {
        let newTidbit: string;

        do {
            newTidbit = tidbits[Math.floor(Math.random() * tidbits.length)];
        } while (newTidbit === tidbit);

        tidbitRef.current?.animate(tibbitAnimation, {duration: 4000}).commitStyles();
        setTidbit(tidbit = newTidbit);
    }, 4000);

    return (
        <PageSection title='Jake St. Germain' id="aboutSection" style={contentStyle} visualMode={visualMode}>
            <div className={styles.about_content}>
                <div>placeholder</div>
                <div className={`${styles.elevator_pitch} ${aboutVisualMode}`}>
                    <div>
                        {elevatorPitch.map(e => 
                            <p key={key++} className={styles.project}>
                                {e}
                            </p>
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