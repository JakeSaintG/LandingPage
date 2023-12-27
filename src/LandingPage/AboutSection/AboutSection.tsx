import { useRef, useState } from 'react';
import PageSection from '../../GeneralComponents/PageSection';
import styles from './AboutSection.module.css';
import tidbits from '../../assets/tidbits.json'

interface Props extends React.HTMLAttributes<HTMLElement>{
    visualMode: string
}

const contentStyle: React.CSSProperties = { };

const elevatorPitch = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim 
ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex 
ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

const tibbitAnimation = [
    { transform: "translateX(-450px)" },
    { transform: 'translateX(0)', offset: 0.15 },
    { transform: 'translateX(0)', offset: 0.85 },
    { transform: "translateX(450px)" }
];

export default function AboutSection(props: Props) {
    const { visualMode } = props;
    let aboutVisualMode: string;
    let [tidbit, setTidbit] = useState('Hello!');
    let [tidbitAnimation, setTibAnimation] = useState(`${styles.tidbit_animation}`);
    const tidbitRef = useRef<HTMLParagraphElement | null>(null);

    visualMode === 'dark_mode' ? aboutVisualMode = styles.about_dark : aboutVisualMode = styles.about_light;

    setInterval(() => {
        let newTidbit: string;

        do {
            newTidbit = tidbits[Math.floor(Math.random() * tidbits.length)];
        } while (newTidbit === tidbit);

        // If the text animation was left to run, it would get out of sync in a few minutes.
        // This (hopefully) ensures that it stays in sync.
        tidbitRef.current?.animate(tibbitAnimation, {duration: 3000}).commitStyles();
        setTidbit(tidbit = newTidbit);
    }, 4000);

    return (
        <PageSection title='Jake St. Germain' id="aboutSection" style={contentStyle} visualMode={visualMode}>
            <div className={styles.about_content}>
                <div>placeholder</div>
                <div className={`${styles.elevator_pitch} ${aboutVisualMode}`}>
                    <p>{elevatorPitch}</p>
                    <span className={styles.tidbit}>
                        <p ref={tidbitRef}>{tidbit}</p>
                    </span>
                </div>
            </div>
        </PageSection>
    );
}