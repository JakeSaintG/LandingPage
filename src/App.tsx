import React from 'react';
import './App.css';
import Navbar from './Navbar';
import AboutSection from './AboutSection';
import ProjectSection from './ProjectSection';
import AwardsSection from './AwardsSection';
import ExperienceSection from './ExperienceSection';

function App() {
  return (
    <div className="App">
      <Navbar />
      <AboutSection />
      <ExperienceSection />
      <ProjectSection />
      <AwardsSection />
      {/* <ContactSection /> */}
    </div>
  );
}

export default App;
