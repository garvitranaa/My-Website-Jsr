import React, { useState } from 'react';
import {
  Navigation,
  Footer,
  Main,
  Expertise,
  Timeline,
  Project,
  Contact
} from './components';
import FadeIn from './components/FadeIn';

function App() {
  const [mode, setMode] = useState<'light' | 'dark'>('light');

  const handleModeChange = () => {
    setMode(prevMode => prevMode === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`App ${mode}-mode`}>
      <Navigation parentToChild={{mode}} modeChange={handleModeChange} />
      <FadeIn>
        <Main />
      </FadeIn>
      <FadeIn>
        <Expertise />
      </FadeIn>
      <FadeIn>
        <Timeline />
      </FadeIn>
      <FadeIn>
        <Project />
      </FadeIn>
      <FadeIn>
        <Contact />
      </FadeIn>
      <Footer />
    </div>
  );
}

export default App;
