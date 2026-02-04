
import React, { useEffect, useState } from 'react';
import { Hero } from './components/Hero';
import { InputSection } from './components/InputSection';
import { ProcessingSection } from './components/ProcessingSection';
import { OutputSection } from './components/OutputSection';
import { VisionSection } from './components/VisionSection';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    const sections = ['hero', 'input', 'processing', 'output', 'vision'];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar activeSection={activeSection} />
      <main>
        <Hero />
        <InputSection />
        <ProcessingSection />
        <OutputSection />
        <VisionSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
