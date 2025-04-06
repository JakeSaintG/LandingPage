import { useEffect, useRef, useState } from "react";
import styles from "./App.module.css";
import Navbar from "./App/Navbar";
import SlideToggle from "./App/General/SlideToggle";
import AboutSection from "./App/AboutSection";
import ProjectsSection from "./App/ProjectsSection";
import ExperienceSection from "./App/ExperienceSection";
import BlogSection from "./App/BlogSection";
import ContactFooter from "./App/ContactFooter";
import SizeWarning from "./App/General/SizeWarning";

export default function App() {
    // TODO: retain visual mode in local storage.
    const [pageVisualMode, setPageVisualMode] = useState("light_mode");

    // TODO: A fade animation between light and dark mode may be less jarring
    const handleModeChange = () =>
        setPageVisualMode(
            pageVisualMode === "dark_mode" ? "light_mode" : "dark_mode"
        );

    useEffect(() => {
        if (pageVisualMode === "dark_mode") {
            document.body.classList.add(`${styles.dark_mode}`);
            document.body.classList.remove(`${styles.light_mode}`);
        } else {
            document.body.classList.add(`${styles.light_mode}`);
            document.body.classList.remove(`${styles.dark_mode}`);
        }
    }, [pageVisualMode]);

    const [settingsDialogOpen, setSettingsDialogOpen] = useState(false);
    const dialogRef = useRef<HTMLDialogElement | null>(null);

    const openDialog = () => {
        if (dialogRef.current) dialogRef.current.showModal();
    };

    const closeDialog = () => {
        if (dialogRef.current) dialogRef.current.close();
    };

    useEffect(
        () => (settingsDialogOpen ? openDialog() : closeDialog()),
        [settingsDialogOpen]
    );

    return (
        //TODO: Animate the transition between page and settings
        <>
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
                        <button onClick={() => setSettingsDialogOpen(!settingsDialogOpen)}>Close</button>
                    </div>
                </div>
            </dialog>
            <Navbar
                toggleSettings={() => setSettingsDialogOpen(!settingsDialogOpen)}
                visualMode={pageVisualMode}
            />
            <main className={`${styles.main_landing_page}`}>
                <AboutSection visualMode={pageVisualMode}/>
                <ExperienceSection visualMode={pageVisualMode}/>
                <ProjectsSection visualMode={pageVisualMode}/>
                <BlogSection visualMode={pageVisualMode}/>
            </main>
            <ContactFooter/>
            <SizeWarning visualMode={pageVisualMode}></SizeWarning>
        </>
    );
}
