import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Video, ShoppingBag, FlaskConical, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import { exploratoryProjects } from '../data/portfolioData';

export const Labs: React.FC = () => {
  const [activePreview, setActivePreview] = useState<string | null>(null);

  const getIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />;
      case 1:
        return <Video className="w-4 h-4 text-blue-600 dark:text-blue-400" />;
      case 2:
        return <ShoppingBag className="w-4 h-4 text-blue-600 dark:text-blue-400" />;
      default:
        return <FlaskConical className="w-4 h-4 text-blue-600 dark:text-blue-400" />;
    }
  };

  const togglePreview = (title: string) => {
    setActivePreview((prev) => (prev === title ? null : title));
  };

  return (
    <section className="py-16 bg-white/50 dark:bg-[#0B0F1A]/80 border-b border-slate-200 dark:border-slate-800/80 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Engineering Sheet Callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="max-w-3xl mb-10"
        >
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400 font-semibold mb-2">
            <span className="px-1.5 py-0.5 rounded bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/30 text-[10px]">
              SHEET 05
            </span>
            <span className="flex items-center gap-1.5">
              <FlaskConical className="w-3.5 h-3.5" />
              <span>Experimental Prototypes &amp; Labs</span>
            </span>
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Also Building / Labs
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-1 text-sm">
            Independent experiments spanning generative canvas graphics, AI workflow pipelines, and e-commerce architectures.
          </p>
        </motion.div>

        {/* Explorations 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {exploratoryProjects.map((item, idx) => {
            const hasPreview = !!item.caseStudy;
            const isPreviewOpen = activePreview === item.title;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="p-5 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-[#111827] hover:bg-white dark:hover:bg-[#161F30] hover:border-blue-300 dark:hover:border-blue-500/40 transition-all duration-200 shadow-2xs hover:shadow-md dark:shadow-glow-sm flex flex-col justify-between glow-border"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="p-2 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                      {getIcon(idx)}
                    </div>
                    <span className="text-[10px] font-mono text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-500/15 px-2 py-0.5 rounded border border-blue-100 dark:border-blue-500/30 font-medium">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="font-heading font-semibold text-base text-slate-900 dark:text-white mb-2">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-800 space-y-2">
                  <div className="flex items-center justify-between">
                    {item.url && (
                      <motion.a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ x: 2 }}
                        className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:underline transition-colors"
                      >
                        <span>View Live Build</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </motion.a>
                    )}

                    {hasPreview && (
                      <button
                        type="button"
                        onClick={() => togglePreview(item.title)}
                        className="inline-flex items-center gap-1 text-[11px] font-mono font-medium text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors ml-auto"
                      >
                        <span>{isPreviewOpen ? 'Hide' : 'Screenshot'}</span>
                        {isPreviewOpen ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                      </button>
                    )}
                  </div>

                  {/* Expandable Preview Screenshot */}
                  <AnimatePresence>
                    {isPreviewOpen && item.caseStudy && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                        className="overflow-hidden pt-2 space-y-2"
                      >
                        <figure className="rounded border border-slate-200 dark:border-slate-700 overflow-hidden shadow-xs">
                          <img
                            src={item.caseStudy.screenshot}
                            alt={item.caseStudy.screenshotAlt}
                            loading="lazy"
                            className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                          />
                        </figure>
                        <p className="text-[10px] font-mono text-slate-500 dark:text-slate-400 leading-tight">
                          {item.caseStudy.screenshotCaption}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
