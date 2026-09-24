import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, ExternalLink, Instagram, Calendar, ChevronDown, ChevronUp, Layers, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';
import { experiences } from '../data/portfolioData';

export const Experience: React.FC = () => {
  const [expandedStudies, setExpandedStudies] = useState<Record<string, boolean>>({
    'kannan-farms': true, // Auto-expand flagship project
  });

  const toggleCaseStudy = (id: string) => {
    setExpandedStudies((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="experience" className="py-20 bg-white/50 dark:bg-[#0B0F1A]/80 border-b border-slate-200 dark:border-slate-800/80 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Engineering Sheet Callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="max-w-3xl mb-16"
        >
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400 font-semibold mb-2">
            <span className="px-1.5 py-0.5 rounded bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/30 text-[10px]">
              SHEET 03
            </span>
            <span className="flex items-center gap-1.5">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Chronological Track &amp; Flagship Case Studies</span>
            </span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Professional &amp; Field Experience
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-2 text-base">
            Reverse-chronological progression across technical enterprise, software development, ADAS engineering, and automotive systems.
          </p>
        </motion.div>

        {/* Timeline Sequence Container */}
        <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {experiences.map((exp, idx) => {
            const isExpanded = !!expandedStudies[exp.id];

            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: idx * 0.05, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="relative group"
              >
                {/* Chronological Sequence Marker */}
                <div className="absolute -left-[35px] sm:-left-[51px] top-0 w-8 h-8 sm:w-9 sm:h-9 rounded border-2 border-slate-300 dark:border-slate-700 group-hover:border-blue-500 bg-white dark:bg-[#111827] flex items-center justify-center font-mono text-xs font-bold text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:scale-105 transition-all duration-200 shadow-2xs group-hover:shadow-glow-sm">
                  {exp.number}
                </div>

                {/* Experience Card */}
                <motion.div
                  whileHover={{ y: -2, transition: { duration: 0.2 } }}
                  className="p-6 sm:p-7 rounded-lg border border-slate-200 dark:border-slate-800 group-hover:border-slate-300 dark:group-hover:border-slate-700 bg-white dark:bg-[#111827] transition-all duration-200 shadow-2xs hover:shadow-md dark:shadow-glow-sm glow-border"
                >
                  {/* Header row */}
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-4 mb-4 border-b border-slate-100 dark:border-slate-800">
                    <div>
                      <h3 className="font-heading font-bold text-xl text-slate-900 dark:text-white">
                        {exp.role}
                      </h3>
                      <div className="flex flex-wrap items-center gap-2 mt-1">
                        <span className="font-semibold text-blue-700 dark:text-blue-400 text-sm">
                          {exp.organization}
                        </span>
                        {exp.website && (
                          <a
                            href={exp.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs font-mono text-blue-600 dark:text-blue-400 hover:underline px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-500/10 border border-blue-200/50 dark:border-blue-500/30"
                          >
                            <span>Storefront</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        )}
                        {exp.instagram && (
                          <a
                            href={exp.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs font-mono text-slate-600 dark:text-slate-400 hover:text-pink-600 dark:hover:text-pink-400 px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 hover:bg-pink-50 dark:hover:bg-pink-500/10"
                          >
                            <Instagram className="w-3 h-3" />
                            <span>Instagram</span>
                          </a>
                        )}
                      </div>
                    </div>

                    <div className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/60 px-2.5 py-1 rounded border border-slate-200 dark:border-slate-700/80 shrink-0">
                      <Calendar className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Bullets (Verbatim content) */}
                  <ul className="space-y-2.5">
                    {exp.bullets.map((bullet, bIdx) => (
                      <motion.li
                        key={bIdx}
                        initial={{ opacity: 0, x: -8 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: bIdx * 0.05 }}
                        className="flex items-start gap-2.5 text-slate-700 dark:text-slate-300 text-sm leading-relaxed"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 mt-2 shrink-0"></span>
                        <span>{bullet}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Expandable Case Study Button */}
                  {exp.caseStudy && (
                    <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800/80">
                      <button
                        type="button"
                        onClick={() => toggleCaseStudy(exp.id)}
                        className="w-full flex items-center justify-between p-3 rounded-md bg-blue-50/70 hover:bg-blue-100/70 dark:bg-blue-500/10 dark:hover:bg-blue-500/20 border border-blue-200/80 dark:border-blue-500/30 text-blue-700 dark:text-blue-300 font-mono text-xs uppercase tracking-wider font-semibold transition-all group/btn"
                      >
                        <span className="flex items-center gap-2">
                          <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                          <span>{isExpanded ? 'Hide Architectural Case Study & Screenshot' : 'View Deep Case Study & Production Screenshot'}</span>
                        </span>
                        {isExpanded ? (
                          <ChevronUp className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-blue-600 dark:text-blue-400 group-hover/btn:translate-y-0.5 transition-transform" />
                        )}
                      </button>

                      {/* Expandable Case Study Drawer */}
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                            className="overflow-hidden mt-4 space-y-5"
                          >
                            {/* Tagline */}
                            <div className="p-3 rounded bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 text-xs font-mono text-blue-600 dark:text-blue-400 font-semibold uppercase">
                              // {exp.caseStudy.tagline}
                            </div>

                            {/* Problem & Approach Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div className="p-4 rounded-lg bg-amber-500/5 border border-amber-500/20 space-y-1.5">
                                <div className="flex items-center gap-1.5 font-mono text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider">
                                  <AlertCircle className="w-3.5 h-3.5" />
                                  <span>Problem &amp; Challenge</span>
                                </div>
                                <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-body">
                                  {exp.caseStudy.problem}
                                </p>
                              </div>

                              <div className="p-4 rounded-lg bg-blue-500/5 border border-blue-500/20 space-y-1.5">
                                <div className="flex items-center gap-1.5 font-mono text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                                  <CheckCircle2 className="w-3.5 h-3.5" />
                                  <span>Engineering Approach</span>
                                </div>
                                <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-body">
                                  {exp.caseStudy.approach}
                                </p>
                              </div>
                            </div>

                            {/* Key Technical Execution Points */}
                            <div className="space-y-2">
                              <div className="font-mono text-[11px] uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold flex items-center gap-1.5">
                                <Layers className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                                <span>Architecture Specifications</span>
                              </div>
                              <ul className="space-y-1.5 pl-1">
                                {exp.caseStudy.architectureDetails.map((detail, dIdx) => (
                                  <li key={dIdx} className="text-xs text-slate-600 dark:text-slate-300 font-mono flex items-start gap-2">
                                    <span className="text-blue-600 dark:text-blue-400">&bull;</span>
                                    <span>{detail}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* High-Fidelity Screenshot Display with Ken Burns Zoom */}
                            <div className="space-y-2">
                              <div className="font-mono text-[11px] uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold">
                                Production Interface Screenshot
                              </div>
                              <figure className="relative rounded-lg border border-slate-300 dark:border-slate-700/80 overflow-hidden bg-slate-900 group/img shadow-md dark:shadow-glow-sm">
                                <div className="aspect-16/10 overflow-hidden">
                                  <img
                                    src={exp.caseStudy.screenshot}
                                    alt={exp.caseStudy.screenshotAlt}
                                    loading="lazy"
                                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover/img:scale-105"
                                  />
                                </div>
                                <figcaption className="p-3 bg-slate-900/90 dark:bg-[#0B0F1A]/95 backdrop-blur-xs border-t border-slate-800 text-[11px] font-mono text-slate-300 flex items-center justify-between">
                                  <span>{exp.caseStudy.screenshotCaption}</span>
                                  <span className="text-blue-400 text-[10px] hidden sm:inline">HIGH RESOLUTION VIEW</span>
                                </figcaption>
                              </figure>
                            </div>

                            {/* Metrics Strip */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1">
                              {exp.caseStudy.metrics.map((metric) => (
                                <div key={metric.label} className="p-2.5 rounded bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 text-center font-mono">
                                  <div className="text-[10px] uppercase text-slate-400 dark:text-slate-500">{metric.label}</div>
                                  <div className="text-xs font-bold text-slate-900 dark:text-white mt-0.5">{metric.val}</div>
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )}

                  {/* Tech & Domain Badges */}
                  <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center gap-1.5">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded text-[11px] font-mono text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 hover:border-slate-300 dark:hover:border-slate-600 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
