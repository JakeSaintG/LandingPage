import { useLayoutEffect, useEffect, useRef, useState } from 'react';
import PageSection from '../General/PageSection';
import styles from './AboutSection.module.css';
import tidbitsJson from '../../assets/tidbits.json'
import elevatorPitchJson from '../../assets/elevator_pitch.json';
import showcaseImgJson from '../../assets/showcase_imgs.json';

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

const showCasePath = './src/assets/img/showcase';

export default function AboutSection(props: Props) {
    const [showCaseImgIndex, setShowCaseImgIndex] = useState(0);
    
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
            if (aboutContentRef!.current) observer.unobserve(aboutContentRef!.current);
        };
    }, []);

    useLayoutEffect(() => {
        let interval: NodeJS.Timeout;
        let tibditCount = 0;
        let displayedTidbits = fisherYatesShuffle(tidbitsJson);

        if (isLoaded) {
            interval = setInterval(() => {
                const newTidbit = displayedTidbits[tibditCount++];

                tidbitRef.current?.animate(tibbitAnimation, {duration: 4000}).commitStyles();
                setTidbit(newTidbit);
                
                if (tibditCount >= (tidbitsJson.length - 1)) {

                    displayedTidbits = fisherYatesShuffle(tidbitsJson);
                    tibditCount = 0;

                    // If it happens that the last quip is the same as the first one (repeat) after shuffling, skip it.
                    if (newTidbit === displayedTidbits[0])  tibditCount = 1;
                }
            }, 4000);
        }

        return () => clearInterval(interval);
    }, [isLoaded]);
    
    return (
        <PageSection title='Jake St. Germain' id="aboutSection" style={{}} visualMode={props.visualMode} header='h1'>
            <div ref={aboutContentRef} className={styles.about_content}>
                <img 
                    className={styles.showcaseImg}
                    src={`${showCasePath}/${showcaseImgJson[showCaseImgIndex].img_location}`}
                    alt={`${showCasePath}/${showcaseImgJson[showCaseImgIndex].alt_text}`}
                    // TODO: more accessibility!
                />
                <div className={`${styles.elevator_pitch} ${styles[props.visualMode]}`}>
                    <div>
                        {elevatorPitchJson.paragraphs.map(pitch => {
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
