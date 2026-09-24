import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Labs } from './components/Labs';
import { Education } from './components/Education';
import { Activities } from './components/Activities';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-slate-800 selection:bg-blue-100 selection:text-blue-900 relative">
      {/* Top Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-blueprint-600 via-blue-500 to-indigo-600 z-[60] origin-left pointer-events-none"
        style={{ scaleX }}
      />

      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Labs />
        <Education />
        <Activities />
      </main>
      <Footer />
    </div>
  );
};

export default App;

