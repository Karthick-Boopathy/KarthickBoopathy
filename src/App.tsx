import React from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
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
  const { scrollY, scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  // Layered parallax grid drift
  const gridY1 = useTransform(scrollY, [0, 5000], [0, -120]);
  const gridY2 = useTransform(scrollY, [0, 5000], [0, -280]);

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] dark:bg-[#0B0F1A] text-slate-800 dark:text-slate-200 relative selection:bg-blue-100 selection:text-blue-900 dark:selection:bg-blue-900/40 dark:selection:text-blue-200 noise-overlay transition-colors duration-300">
      {/* Top Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-blue-600 via-cyan-400 to-indigo-500 dark:from-blue-500 dark:via-cyan-400 dark:to-indigo-400 z-[60] origin-left pointer-events-none shadow-glow-sm"
        style={{ scaleX }}
      />

      {/* Layer 1 Parallax Subgrid */}
      <motion.div
        style={{ y: gridY1 }}
        className="fixed inset-0 bg-cad-grid pointer-events-none opacity-60 dark:opacity-40 z-0"
      />

      {/* Layer 2 Parallax Major Grid */}
      <motion.div
        style={{ y: gridY2 }}
        className="fixed inset-0 bg-cad-major-grid pointer-events-none opacity-40 dark:opacity-30 z-0"
      />

      {/* Ambient Gradient Mesh Lighting (Atmospheric Depth) */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-[20%] -left-[10%] w-[60vw] h-[60vw] rounded-full bg-blue-500/5 dark:bg-blue-600/10 blur-[120px]" />
        <div className="absolute top-[35%] -right-[15%] w-[50vw] h-[50vw] rounded-full bg-cyan-500/5 dark:bg-cyan-600/8 blur-[140px]" />
        <div className="absolute top-[70%] left-[5%] w-[55vw] h-[55vw] rounded-full bg-indigo-500/5 dark:bg-indigo-600/8 blur-[130px]" />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
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
    </div>
  );
};

export default App;
