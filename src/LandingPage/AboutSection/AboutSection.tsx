import { useLayoutEffect, useRef, useState } from 'react';
import PageSection from '../../GeneralComponents/PageSection';
import styles from './AboutSection.module.css';
import tidbits from '../../assets/tidbits.json'
import elevatorPitch from '../../assets/elevator_pitch.json';

interface Props extends React.HTMLAttributes<HTMLElement>{
    visualMode: string
}

const tibbitAnimation = [
    { transform: "translateX(-650px)" },            // starting position
    { transform: 'translateX(0)', offset: 0.15 },   // Mid pos + pause
    { transform: 'translateX(0)', offset: 0.85 },   // End mid pos pause
    { transform: "translateX(650px)" }              // end pos
];

const fisherYatesShuffle = (array: string[]) => { 
    for (let i = array.length - 1; i > 0; i--) { 
        const j = Math.floor(Math.random() * (i + 1)); 
        [array[i], array[j]] = [array[j], array[i]]; 
    } 
    return array; 
};

export default function AboutSection(props: Props) {
    const [tidbit, setTidbit] = useState('Hello!');
    let key = 0;
    const tidbitRef = useRef<HTMLParagraphElement | null>(null);

    useLayoutEffect(() => {
        let tibditCount = 0;
        let displayedTidbits = tidbits;
        const interval = setInterval(() => {
            let newTidbit = displayedTidbits[tibditCount];
    
            tidbitRef.current?.animate(tibbitAnimation, {duration: 4000}).commitStyles();
            setTidbit(newTidbit);

            if (tibditCount >= (tidbits.length - 1)) {
                displayedTidbits = fisherYatesShuffle(tidbits);
                tibditCount = 1;
            }
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <PageSection title='Jake St. Germain' id="aboutSection" style={{}} visualMode={props.visualMode} header='h1'>
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