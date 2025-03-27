import { useLayoutEffect, useEffect, useRef, useState } from 'react';
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
    const [isLoaded, setIsLoaded] = useState(true);

    const tidbitRef = useRef<HTMLParagraphElement | null>(null);
    const aboutContentRef = useRef<HTMLDivElement | null>(null);

    let key = 0;

    useEffect(() => {
        // https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
        const observer = new IntersectionObserver(
            ([entry]: IntersectionObserverEntry[]) => setIsLoaded(entry.isIntersecting)
        );
        
        if (aboutContentRef.current) observer.observe(aboutContentRef.current);
        
        return () => {
            if (aboutContentRef.current) observer.unobserve(aboutContentRef.current);
        };
    }, []);

    // TODO: the text can be a little jumpy when scrolling back to it
    useLayoutEffect(() => {
        let interval: NodeJS.Timeout;
        
        if (isLoaded) {
            let tibditCount = 0;
            let displayedTidbits = tidbits;
            interval = setInterval(() => {
                const newTidbit = displayedTidbits[tibditCount++];

                tidbitRef.current?.animate(tibbitAnimation, {duration: 4000}).commitStyles();
                setTidbit(newTidbit);
                
                if (tibditCount >= (tidbits.length - 1)) {
                    displayedTidbits = fisherYatesShuffle(tidbits);
                    tibditCount = 0;
                    // TODO: If it so happens that arr[0] equals arr[last] after shuffling, then skip it.
                }
            }, 4000);
        }

        return () => clearInterval(interval);
    }, [isLoaded]);
    
    return (
        <PageSection title='Jake St. Germain' id="aboutSection" style={{}} visualMode={props.visualMode} header='h1'>
            <div ref={aboutContentRef} className={styles.about_content}>
                <div>placeholder</div>
                <div className={`${styles.elevator_pitch} ${styles[props.visualMode]}`}>
                    <div>
                        {elevatorPitch.paragraphs.map(pitch => {
                                if (pitch === "") return <br key={key++}/>

                                return <p key={key++}>{pitch}</p>
                        })}
                    </div>
                    <span className={styles.tidbit}>
                        <p ref={tidbitRef}>{tidbit}</p>
                    </span>
                </div>
            </div>
        </PageSection>
    );
}
