import PageSection from '../../GeneralComponents/PageSection';
import styles from './AboutSection.module.css';

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

export default function AboutSection(props: Props) {
    const { visualMode } = props;
    let aboutVisualMode: string;

    visualMode === 'dark_mode' ? aboutVisualMode = styles.about_dark : aboutVisualMode = styles.about_light;

    return (
        <PageSection title='Jake St. Germain' id="aboutSection" style={contentStyle} visualMode={visualMode}>
            <div className={styles.about_content}>
                <div>placeholder</div>
                <div className={`${styles.elevator_pitch} ${aboutVisualMode}`}>
                    <p>{elevatorPitch}</p>

                    {/* TODO: make this a rotating tidbit or saying "carosel"
                        "Registered nurse and registered nerd."
                        "Cat enthusiast"
                        "Nurse with a byte: Where empathy meets elegant code."
                        "Cats, code, and compassion: My purr-fect trifecta."
                        "'fsdkfjfdscjvjkldjs' - my cat on my keyboard"
                        "Software "architect" and healthcare advocate – shaping a healthier future one line at a time."
                        "Caring for patients and crafting clean code – because attention to detail is my professional hallmark."
                    */}
                    <p>tidbit</p>
                </div>
            </div>
        </PageSection>
    );
}