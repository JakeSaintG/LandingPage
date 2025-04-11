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
    const [visualMode, setVisualMode] = useState("light_mode");

    // TODO: A fade animation between light and dark mode may be less jarring
    const handleModeChange = () =>{ 
        setVisualMode(
            visualMode === "dark_mode" ? "light_mode" : "dark_mode"
        );
    }

    useEffect(() => {
        if (visualMode === "dark_mode") {
            document.body.classList.add(`${styles.dark_mode}`);
            document.body.classList.remove(`${styles.light_mode}`);
        } else {
            document.body.classList.add(`${styles.light_mode}`);
            document.body.classList.remove(`${styles.dark_mode}`);
        }
    }, [visualMode]);

    const dialogRef = useRef<HTMLDialogElement | null>(null);

    const openDialog = () => {
        if (dialogRef.current) dialogRef.current.showModal();
    };
    
    const closeDialog = () => {
        if (dialogRef.current) dialogRef.current.close();
    };

    return (
        //TODO: Animate the transition between page and settings
        <>
            <dialog
                ref={dialogRef}
                className={`${styles.dialog} ${styles[visualMode]}`}
            >
                <div
                    className={`${styles.dialog_contents} ${styles[visualMode]}`}
                >
                    <h2 className={styles.settings_header}>Settings</h2>
                    <div>
                        <SlideToggle
                            value={visualMode}
                            onChange={handleModeChange}
                            visualMode={visualMode}
                            label={`Switch light vs dark mode.`}
                        />
                        <button onClick={() => closeDialog()}>Close</button>
                    </div>
                </div>
            </dialog>
            <Navbar
                toggleSettings={() => openDialog()}
                visualMode={visualMode}
            />
            <main className={`${styles.main_landing_page}`}>
                <AboutSection visualMode={visualMode}/>
                <ExperienceSection visualMode={visualMode}/>
                <ProjectsSection visualMode={visualMode}/>
                <BlogSection visualMode={visualMode}/>
            </main>
            <ContactFooter/>
            <SizeWarning visualMode={visualMode}></SizeWarning>
        </>
    );
}
