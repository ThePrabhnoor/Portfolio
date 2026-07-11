import { LenisProvider } from './components/LenisProvider';
import { Background } from './components/Background';
import { ScrollProgress } from './components/ScrollProgress';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { DevelopmentJourney } from './components/DevelopmentJourney';
import { HowIBuild } from './components/HowIBuild';
import { Interests } from './components/Interests';
import { TechStack } from './components/TechStack';
import { FeaturedProjects } from './components/FeaturedProjects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Loader } from './components/Loader';
import { useState } from 'react';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <Loader onComplete={() => setIsLoading(false)} />}
      <ScrollProgress />
      <Background />
      <Navbar />
      <LenisProvider>
        <main style={{ opacity: isLoading ? 0 : 1, transition: 'opacity 0.8s ease' }}>
          <Hero />
          <About />
          <DevelopmentJourney />
          <HowIBuild />
          <Interests />
          <TechStack />
          <FeaturedProjects />
          <Contact />
          <Footer />
        </main>
      </LenisProvider>
    </>
  );
}

export default App;
