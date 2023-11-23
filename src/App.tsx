import React from 'react';
import './App.css';
import Navbar from './Navbar';
import AboutSection from './AboutSection';
import ProjectSection from './ProjectSection';

function App() {
  return (
    <div className="App">
      <Navbar />
      <AboutSection />
      {/* <ExperienceSection /> */}
      <ProjectSection />
      {/* <AwardsSection /> */}
      {/* <ContactSection /> */}
    </div>
  );
}

export default App;
