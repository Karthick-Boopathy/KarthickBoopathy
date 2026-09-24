import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, CheckCircle2 } from 'lucide-react';
import { educationList } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-slate-50/50 dark:bg-[#0B0F1A]/90 border-b border-slate-200 dark:border-slate-800/80 overflow-hidden relative">
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
              SHEET 06
            </span>
            <span className="flex items-center gap-1.5">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Academic Qualifications</span>
            </span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Education &amp; Credentials
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-2 text-base">
            Formal automotive engineering foundation coupled with technical certifications.
          </p>
        </motion.div>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {educationList.map((edu, idx) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-white dark:bg-[#111827] rounded-lg border border-slate-200 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-500/40 p-6 flex flex-col justify-between shadow-2xs hover:shadow-md dark:shadow-glow-sm transition-all glow-border"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="p-2.5 rounded bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80">
                    <GraduationCap className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/60 px-2.5 py-1 rounded border border-slate-200 dark:border-slate-700/80">
                    {edu.period}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-white mb-2 leading-snug">
                  {edu.degree}
                </h3>

                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                  {edu.institution}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400 dark:text-slate-500 uppercase">Performance</span>
                <span className="font-mono text-xs font-bold text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-500/15 px-2.5 py-0.5 rounded border border-blue-100 dark:border-blue-500/30">
                  {edu.grade}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Professional Certification Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
          whileHover={{ y: -2, transition: { duration: 0.2 } }}
          className="mt-8 p-5 rounded-lg border border-slate-200 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-500/40 bg-white dark:bg-[#111827] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-2xs hover:shadow-xs dark:shadow-glow-sm transition-all glow-border"
        >
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded bg-amber-50 dark:bg-amber-500/15 border border-amber-200 dark:border-amber-500/30 shrink-0">
              <Award className="w-5 h-5 text-amber-600 dark:text-amber-400" />
            </div>
            <div>
              <h4 className="font-heading font-semibold text-sm text-slate-900 dark:text-white">
                Automotive Skill Development Council (ASDC)
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Certified Automotive Technician — Rigorous practical evaluation &amp; technical viva at Anaamalais Toyota STEP.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-500/15 px-3 py-1.5 rounded border border-emerald-200 dark:border-emerald-500/30 shrink-0 shadow-2xs">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>CERTIFIED TECHNICIAN</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
