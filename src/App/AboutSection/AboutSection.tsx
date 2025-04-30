import { useLayoutEffect, useEffect, useRef, useState } from 'react';
import PageSection from '../General/PageSection';
import styles from './AboutSection.module.css';
import tidbitsJson from '../../assets/tidbits.json'
import elevatorPitchJson from '../../assets/elevator_pitch.json';
import decorativeImgJson from '../../assets/decorative_imgs.json';

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
    const [decorativeImgIndex, setDecorativeImgIndex] = useState(0);
    
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
        let imageCount = 0;
        let displayedTidbits = fisherYatesShuffle(tidbitsJson);

        if (isLoaded) {
            // TODO: This interval is handling two things that should be their own functions
            interval = setInterval(() => {
                // Handle the decorative img
                imageCount++;
                if (imageCount > (decorativeImgJson.length - 1)) imageCount = 0;
                setDecorativeImgIndex(imageCount);
                
                // Handle the rotating tidbit
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
                    src={(`./assets/img/decorative/${decorativeImgJson[decorativeImgIndex].img_location}`)}

                    // Images here are purely decorative and assistive technologies should ignore them
                    // https://www.w3.org/WAI/tutorials/images/decorative/
                    alt=""
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
