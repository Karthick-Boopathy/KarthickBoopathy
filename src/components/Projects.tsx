import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Radio, Wrench, Layers } from 'lucide-react';
import { selectedProjects } from '../data/portfolioData';

export const Projects: React.FC = () => {
  const getProjectIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Radio className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
      case 1:
        return <Cpu className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
      default:
        return <Wrench className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
    }
  };

  return (
    <section id="projects" className="py-20 bg-slate-50/50 dark:bg-[#0B0F1A]/90 border-b border-slate-200 dark:border-slate-800/80 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Engineering Sheet Callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="max-w-3xl mb-12"
        >
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400 font-semibold mb-2">
            <span className="px-1.5 py-0.5 rounded bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/30 text-[10px]">
              SHEET 04
            </span>
            <span className="flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5" />
              <span>Featured Engineering Hardware</span>
            </span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Selected Projects
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-2 text-base">
            Autonomous vehicle sensing prototypes and low-cost analog hardware guidance systems.
          </p>
        </motion.div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
          {selectedProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
              whileHover={{ y: -5, transition: { duration: 0.25 } }}
              className="bg-white dark:bg-[#111827] rounded-lg border border-slate-200 dark:border-slate-800 hover:border-blue-400 dark:hover:border-blue-500/40 transition-all duration-200 p-6 flex flex-col justify-between shadow-2xs hover:shadow-lg dark:shadow-glow-sm relative group glow-border"
            >
              {/* Corner fiducials */}
              <div className="absolute top-2 right-2 font-mono text-slate-300 dark:text-slate-700 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors text-xs select-none">+</div>
              <div className="absolute bottom-2 left-2 font-mono text-slate-300 dark:text-slate-700 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors text-xs select-none">+</div>

              <div>
                {/* Header metadata */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="p-2.5 rounded bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 group-hover:border-blue-300 dark:group-hover:border-blue-500/30 transition-colors">
                    {getProjectIcon(index)}
                  </div>
                  <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/60 px-2.5 py-1 rounded border border-slate-200 dark:border-slate-700/80">
                    {project.durationOrType}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-xl text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Technical Specifications Table */}
                <div className="bg-slate-50 dark:bg-slate-800/40 rounded border border-slate-100 dark:border-slate-800 p-3 mb-6 space-y-2 group-hover:border-slate-200 dark:group-hover:border-slate-700 transition-colors">
                  <div className="text-[10px] font-mono uppercase text-slate-400 dark:text-slate-500 tracking-wider">
                    Engineering Specs
                  </div>
                  {project.specs.map((spec) => (
                    <div key={spec.label} className="flex items-center justify-between text-xs font-mono">
                      <span className="text-slate-500 dark:text-slate-400">{spec.label}:</span>
                      <span className="text-slate-800 dark:text-slate-200 font-semibold">{spec.val}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Architecture & Tech Stack */}
              <div>
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                  <div className="flex flex-wrap gap-1.5">
                    {project.architecture.map((tech, tIdx) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.25, delay: tIdx * 0.04 }}
                        whileHover={{ scale: 1.05 }}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-blue-50/70 dark:bg-blue-500/10 text-blue-700 dark:text-blue-300 border border-blue-100 dark:border-blue-500/30 font-medium select-none cursor-default shadow-2xs"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
