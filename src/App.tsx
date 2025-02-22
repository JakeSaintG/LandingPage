import { useEffect, useRef, useState } from 'react';
import styles from './App.module.css';

import Navbar from './Navbar';
import AboutSection from './LandingPage/AboutSection';
import ProjectsSection from './LandingPage/ProjectsSection';
import ExperienceSection from './LandingPage/ExperienceSection';
import ContactSection from './ContactSection';
import SlideToggle from './GeneralComponents/SlideToggle';
import BlogSection from './LandingPage/BlogSection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';

export default function App() {
    let [settingsVisibility, setSettingsVisibility] = useState(false);

    // TODO: retain visual mode in local storage.
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
        settingsVisibility ? openDialog() : closeDialog();
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
                    <h2 className={styles.settings_header}>Settings</h2>
                    <div>
                        <p>The only setting that matters!</p>

                        <SlideToggle
                            value={pageVisualMode}
                            onChange={handleModeChange}
                            visualMode={pageVisualMode}
                        />
                        <button onClick={toggleSettingsMenu}>Close</button>
                    </div>
                </div>
            </dialog>
            <Navbar
                toggleSettings={toggleSettingsMenu}
                visualMode={pageVisualMode}
            />
            <div className={`${styles.main_landing_page}`}>
                <AboutSection visualMode={pageVisualMode} />
                <ExperienceSection visualMode={pageVisualMode} />
                <ProjectsSection visualMode={pageVisualMode} />
                <BlogSection visualMode={pageVisualMode} />
            </div>
            <ContactSection visualMode={pageVisualMode} />
            <div className={`${styles.size_warning} ${styles[pageVisualMode]}`}>
                <FontAwesomeIcon icon={faTriangleExclamation} size='xl'/>
                <p>
                    Heads up! Your window sizing may not give you the best experience on this page. Please consider expanding the window a little.
                </p>
            </div>
        </div>
    );
}
