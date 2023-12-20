import { useEffect, useRef, useState } from 'react';
import styles from './App.module.css';
import Navbar from './Navbar';
import AboutSection from './LandingPage/AboutSection';
import ProjectsSection from './LandingPage/ProjectsSection';
import ExperienceSection from './LandingPage/ExperienceSection';
import ContactSection from './LandingPage/ContactSection';
import SlideToggle from './GeneralComponents/SlideToggle';

export default function App() {
    let [settingsVisibility, setSettingsVisibility] = useState(false);
    let [pageState, setDialog] = useState('default');
    let [pageVisualMode, setPageVisualMode] = useState('light_mode');
    const dialogRef = useRef<HTMLDialogElement | null>(null);

    const openDialog = () => {
        if (dialogRef.current) dialogRef.current.showModal();
    };

    const closeDialog = () => {
        if (dialogRef.current) dialogRef.current.close();
    };

    const toggleSettingsMenu = () => {
        setSettingsVisibility((settingsVisibility = !settingsVisibility));
        setDialog(
            settingsVisibility
                ? (pageState = 'show_settings')
                : (pageState = 'show_landing_page')
        );

        pageState === 'show_settings' ? openDialog() : closeDialog();
    };

    // TODO: A fade animation between light and dark mode may be less jarring
    const handleModeChange = () => {
        setPageVisualMode(
            pageVisualMode === 'dark_mode'
                ? (pageVisualMode = 'light_mode')
                : (pageVisualMode = 'dark_mode')
        );

        if (pageVisualMode === 'dark_mode') {
            document.body.classList.add(`${styles.dark_mode}`);
            document.body.classList.remove(`${styles.light_mode}`);
        } else {
            document.body.classList.add(`${styles.light_mode}`);
            document.body.classList.remove(`${styles.dark_mode}`);
        }
    };

    useEffect(() => {
        document.body.classList.add(`${styles.light_mode}`);
    });

    return (
        //TODO: Animate the transition between page and settings
        //TODO: Move dialog to own component openDialog()/closeDialog() may make that tricky
        <div>
            <dialog
                ref={dialogRef}
                className={styles[`dialog_${pageVisualMode}`]}
            >
                <div
                    className={`${styles.dialog_contents} ${
                        styles[`dialog_contents_${pageVisualMode}`]
                    }`}
                >
                    <h2>Settings</h2>
                    <div>
                        <SlideToggle
                            value={pageVisualMode}
                            onChange={handleModeChange}
                        />
                        <p>None yet!</p>
                        <button onClick={toggleSettingsMenu}>Close</button>
                    </div>
                </div>
            </dialog>
            <Navbar
                toggleSettings={toggleSettingsMenu}
                visualMode={pageVisualMode}
            />
            <div className={`${styles[pageState]} ${styles.main_landing_page}`}>
                <AboutSection visualMode={pageVisualMode} />
                <ExperienceSection visualMode={pageVisualMode} />
                <ProjectsSection visualMode={pageVisualMode} />
                <ContactSection visualMode={pageVisualMode} />
            </div>
        </div>
    );
}
