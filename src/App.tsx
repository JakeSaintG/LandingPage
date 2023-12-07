import React, { useRef, useState } from 'react';
import './App.css';
import Navbar from './Navbar';
import AboutSection from './LandingPage/AboutSection';
import ProjectsSection from './LandingPage/ProjectsSection';
import ExperienceSection from './LandingPage/ExperienceSection';
import ContactSection from './LandingPage/ContactSection';

export default function App() {
    let [settingsState, setSettingsMenu] = useState(false);
    let [pageState, setDialog] = useState('default');
    const dialogRef = useRef<HTMLDialogElement | null>(null);

    const openDialog = () => {
        if (dialogRef.current) dialogRef.current.showModal();
    };

    const closeDialog = () => {
        if (dialogRef.current) dialogRef.current.close();
    };

    const toggleSettingsMenu = () => {
        setSettingsMenu((settingsState = !settingsState));
        setDialog(
            settingsState
                ? (pageState = 'showSettings')
                : (pageState = 'showLandingPage')
        );

        pageState === 'showSettings' ? openDialog() : closeDialog();
    };

    return (
        //TODO: Animate the transition between page and settings
        //TODO: Move dialog to own component openDialog()/closeDialog() may make that tricky
        <>
            <dialog id="dialog" ref={dialogRef}>
                <div className="dialogContents">
                    <h2>Settings</h2>
                    <div>
                        <p>None yet!</p>
                        <button id="close" onClick={toggleSettingsMenu}>
                            Close
                        </button>
                    </div>
                </div>
            </dialog>
            <Navbar toggleSettings={toggleSettingsMenu} />
            <div className={`${pageState} main-landing-page`}>
                <AboutSection />
                <ExperienceSection />
                <ProjectsSection />
                <ContactSection />
            </div>
        </>
    );
}
