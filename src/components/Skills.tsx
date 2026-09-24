import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Wrench, Terminal, Layers } from 'lucide-react';
import { technicalSkills } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const getCategoryIcon = (category: string) => {
    if (category.includes('Software')) return <Code2 className="w-5 h-5 text-blueprint-600" />;
    if (category.includes('Automotive')) return <Wrench className="w-5 h-5 text-blueprint-600" />;
    return <Terminal className="w-5 h-5 text-blueprint-600" />;
  };

  return (
    <section id="skills" className="py-20 bg-slate-50 border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="max-w-3xl mb-12"
        >
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-blueprint-600 font-semibold mb-2">
            <Layers className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Skills &amp; Engineering Disciplines
          </h2>
          <p className="text-slate-600 mt-2 text-base">
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
                className={`bg-white rounded-lg border transition-all duration-200 p-6 flex flex-col justify-between ${
                  isSelected
                    ? 'border-blueprint-600 shadow-md ring-1 ring-blueprint-600/20'
                    : 'border-slate-200 shadow-2xs hover:border-slate-300'
                }`}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 rounded bg-slate-50 border border-slate-200 shrink-0">
                      {getCategoryIcon(cluster.category)}
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-lg text-slate-900 leading-snug">
                        {cluster.category}
                      </h3>
                      <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider">
                        {cluster.skills.length} core competencies
                      </span>
                    </div>
                  </div>

                  {/* Category Tagline */}
                  <p className="text-xs text-slate-500 mb-6 leading-relaxed">
                    {cluster.tagline}
                  </p>

                  {/* Skills Tag Matrix */}
                  <div className="flex flex-wrap gap-2">
                    {cluster.skills.map((skill) => (
                      <motion.span
                        key={skill}
                        whileHover={{ scale: 1.05, y: -1 }}
                        whileTap={{ scale: 0.96 }}
                        className="inline-flex items-center px-2.5 py-1 rounded text-xs font-mono bg-slate-50 hover:bg-blueprint-50 text-slate-700 hover:text-blueprint-700 border border-slate-200 hover:border-blueprint-200 transition-colors cursor-default select-none"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Sub-Card Spec Bar */}
                <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-[10px] font-mono text-slate-400">
                  <span>DISCIPLINE SPEC</span>
                  <span className="text-slate-600 font-medium">HANDS-ON VERIFIED</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

