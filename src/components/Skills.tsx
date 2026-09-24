import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Wrench, Terminal, Layers } from 'lucide-react';
import { technicalSkills } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const getCategoryIcon = (category: string) => {
    if (category.includes('Software')) return <Code2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
    if (category.includes('Automotive')) return <Wrench className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
    return <Terminal className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
  };

  return (
    <section id="skills" className="py-20 bg-slate-50/50 dark:bg-[#0B0F1A]/90 border-b border-slate-200 dark:border-slate-800/80 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading with Engineering Sheet Callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="max-w-3xl mb-12"
        >
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400 font-semibold mb-2">
            <span className="px-1.5 py-0.5 rounded bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/30 text-[10px]">
              SHEET 02
            </span>
            <span className="flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5" />
              <span>Technical Capabilities</span>
            </span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Skills &amp; Engineering Disciplines
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-2 text-base">
            Systematic domain breakdown across software architecture, physical automotive systems, and operational platforms.
          </p>
        </motion.div>

        {/* Skill Clusters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {technicalSkills.map((cluster, idx) => {
            const isSelected = selectedCategory === cluster.category;
            return (
              <motion.div
                key={cluster.category}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                onMouseEnter={() => setSelectedCategory(cluster.category)}
                onMouseLeave={() => setSelectedCategory(null)}
                className={`bg-white dark:bg-[#111827] rounded-lg border transition-all duration-200 p-6 flex flex-col justify-between glow-border ${
                  isSelected
                    ? 'border-blue-600 dark:border-blue-500 shadow-md dark:shadow-glow-sm ring-1 ring-blue-600/20'
                    : 'border-slate-200 dark:border-slate-800 shadow-2xs hover:border-slate-300 dark:hover:border-slate-700'
                }`}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 rounded bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 shrink-0">
                      {getCategoryIcon(cluster.category)}
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-lg text-slate-900 dark:text-white leading-snug">
                        {cluster.category}
                      </h3>
                      <span className="font-mono text-[10px] text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                        {cluster.skills.length} core competencies
                      </span>
                    </div>
                  </div>

                  {/* Category Tagline */}
                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">
                    {cluster.tagline}
                  </p>

                  {/* Skills Tag Matrix with Staggered Entrance */}
                  <div className="flex flex-wrap gap-2">
                    {cluster.skills.map((skill, sIdx) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: sIdx * 0.04 }}
                        whileHover={{ scale: 1.05, y: -1 }}
                        whileTap={{ scale: 0.96 }}
                        className="inline-flex items-center px-2.5 py-1 rounded text-xs font-mono bg-slate-50 dark:bg-slate-800/60 hover:bg-blue-50 dark:hover:bg-blue-500/20 text-slate-700 dark:text-slate-300 hover:text-blue-700 dark:hover:text-blue-300 border border-slate-200 dark:border-slate-700/80 hover:border-blue-200 dark:hover:border-blue-500/40 transition-colors cursor-default select-none shadow-2xs"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Sub-Card Spec Bar */}
                <div className="mt-8 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[10px] font-mono text-slate-400 dark:text-slate-500">
                  <span>DISCIPLINE SPEC</span>
                  <span className="text-slate-600 dark:text-slate-400 font-medium">HANDS-ON VERIFIED</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
