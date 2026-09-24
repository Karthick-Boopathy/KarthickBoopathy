import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, ExternalLink, Instagram, Calendar, ChevronDown, ChevronUp, Layers, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';
import { experiences } from '../data/portfolioData';

export const Experience: React.FC = () => {
  const [expandedStudies, setExpandedStudies] = useState<Record<string, boolean>>({
    'kannan-farms': true, // Auto-expand flagship project
  });

  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [prevIndex, setPrevIndex] = useState<number>(0);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      // Trigger threshold: 38% from the top of the viewport (reading focus line)
      const triggerY = window.innerHeight * 0.38;

      let currentIdx = 0;
      for (let i = 0; i < itemRefs.current.length; i++) {
        const el = itemRefs.current[i];
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        // If the card top has scrolled up to or past the trigger line
        if (rect.top <= triggerY) {
          currentIdx = i;
        }
      }

      setActiveIndex((prev) => {
        if (prev !== currentIdx) {
          setPrevIndex(prev);
        }
        return currentIdx;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleCaseStudy = (id: string) => {
    setExpandedStudies((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const scrollToMilestone = (index: number) => {
    const target = itemRefs.current[index];
    if (target) {
      const topOffset = target.getBoundingClientRect().top + window.scrollY - 140;
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
    }
  };

  return (
    <section id="experience" className="py-20 bg-white/50 dark:bg-[#0B0F1A]/80 border-b border-slate-200 dark:border-slate-800/80 relative">
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

        {/* Mobile Sticky Tracker Bar (Sticky on mobile only) */}
        <div className="lg:hidden sticky top-16 z-30 mb-8 p-3 rounded-xl bg-white/95 dark:bg-[#0B0F1A]/95 backdrop-blur-md border-2 border-blue-500/60 shadow-lg dark:shadow-glow-sm flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Animated Rolling Number Box */}
            <div className="w-10 h-10 rounded-lg border-2 border-blue-500 bg-blue-50 dark:bg-blue-950/50 flex items-center justify-center font-mono text-base font-bold text-blue-600 dark:text-blue-400 relative overflow-hidden shrink-0">
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.span
                  key={activeIndex}
                  initial={{ y: activeIndex > prevIndex ? 22 : -22, opacity: 0, scale: 0.8 }}
                  animate={{ y: 0, opacity: 1, scale: 1 }}
                  exit={{ y: activeIndex > prevIndex ? -22 : 22, opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute"
                >
                  {String(activeIndex + 1).padStart(2, '0')}
                </motion.span>
              </AnimatePresence>
            </div>
            <div>
              <div className="text-[10px] font-mono text-blue-600 dark:text-blue-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                STAGE {activeIndex + 1} OF {experiences.length}
              </div>
              <div className="text-xs font-heading font-bold text-slate-900 dark:text-white truncate max-w-[180px]">
                {experiences[activeIndex].role}
              </div>
            </div>
          </div>

          {/* Quick Step Indicators */}
          <div className="flex items-center gap-1">
            {experiences.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => scrollToMilestone(i)}
                className={`h-2.5 rounded-full transition-all ${
                  i === activeIndex
                    ? 'w-5 bg-blue-500'
                    : i < activeIndex
                    ? 'w-2 bg-blue-400/60 dark:bg-blue-600/60'
                    : 'w-2 bg-slate-300 dark:bg-slate-700'
                }`}
                title={`Jump to Milestone ${i + 1}`}
                aria-label={`Jump to Milestone ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Dual Column Layout: Left Sticky HUD Tracker + Right Timeline Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Sticky Interactive Tracker Box (Desktop) */}
          <div className="hidden lg:block lg:col-span-4 sticky top-28 space-y-6">
            <div className="p-6 rounded-2xl bg-white dark:bg-[#111827] border-2 border-blue-500/50 dark:border-blue-500/40 shadow-xl dark:shadow-glow-md relative overflow-hidden glow-border">
              {/* Top Status Header */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100 dark:border-slate-800 text-xs font-mono">
                <span className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold uppercase tracking-wider text-[11px]">
                  <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse shadow-[0_0_8px_#3B82F6]" />
                  SCROLLING TRACKER
                </span>
                <span className="text-slate-400 dark:text-slate-500 text-[10px]">
                  LIVE HUD // ACTIVE
                </span>
              </div>

              {/* Giant Animated Rolling Number Display */}
              <div className="flex items-center gap-4 my-2">
                <div className="w-20 h-20 rounded-xl border-2 border-blue-500 dark:border-blue-400 bg-blue-50/60 dark:bg-blue-950/40 flex items-center justify-center font-mono font-bold text-4xl text-blue-600 dark:text-blue-400 relative overflow-hidden shadow-inner shrink-0">
                  <AnimatePresence mode="popLayout" initial={false}>
                    <motion.span
                      key={activeIndex}
                      initial={{
                        y: activeIndex > prevIndex ? 40 : -40,
                        opacity: 0,
                        filter: 'blur(4px)',
                        scale: 0.8,
                      }}
                      animate={{
                        y: 0,
                        opacity: 1,
                        filter: 'blur(0px)',
                        scale: 1,
                      }}
                      exit={{
                        y: activeIndex > prevIndex ? -40 : 40,
                        opacity: 0,
                        filter: 'blur(4px)',
                        scale: 0.8,
                      }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute"
                    >
                      {String(activeIndex + 1).padStart(2, '0')}
                    </motion.span>
                  </AnimatePresence>

                  {/* Corner CAD fiducial markers */}
                  <span className="absolute top-1 left-1.5 font-mono text-[9px] text-blue-400/80 leading-none select-none">+</span>
                  <span className="absolute top-1 right-1.5 font-mono text-[9px] text-blue-400/80 leading-none select-none">+</span>
                  <span className="absolute bottom-1 left-1.5 font-mono text-[9px] text-blue-400/80 leading-none select-none">+</span>
                  <span className="absolute bottom-1 right-1.5 font-mono text-[9px] text-blue-400/80 leading-none select-none">+</span>
                </div>

                <div className="space-y-1">
                  <div className="text-[11px] font-mono text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                    CURRENT FOCUS
                  </div>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeIndex}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.2 }}
                      className="font-heading font-bold text-lg text-slate-900 dark:text-white leading-tight"
                    >
                      {experiences[activeIndex].role}
                    </motion.div>
                  </AnimatePresence>
                  <div className="text-xs font-semibold text-blue-600 dark:text-blue-400 truncate">
                    {experiences[activeIndex].organization}
                  </div>
                </div>
              </div>

              {/* Chronological Period Badge */}
              <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 text-xs font-mono flex items-center justify-between text-slate-600 dark:text-slate-300 my-4">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-blue-500" />
                  <span>Timeline Frame:</span>
                </span>
                <span className="font-semibold text-slate-900 dark:text-white">
                  {experiences[activeIndex].period}
                </span>
              </div>

              {/* Clickable 7-Step Progression Meter */}
              <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 dark:text-slate-500">
                  <span>PROGRESSION TRACK</span>
                  <span className="font-bold text-blue-600 dark:text-blue-400">
                    STAGE {activeIndex + 1} OF 07
                  </span>
                </div>
                <div className="grid grid-cols-7 gap-1.5">
                  {experiences.map((exp, idx) => {
                    const isPassed = idx < activeIndex;
                    const isCurrent = idx === activeIndex;

                    return (
                      <button
                        key={exp.id}
                        type="button"
                        onClick={() => scrollToMilestone(idx)}
                        className={`h-7 rounded-md font-mono text-[10px] font-bold flex items-center justify-center transition-all ${
                          isCurrent
                            ? 'bg-blue-600 text-white shadow-glow-sm scale-105 ring-2 ring-blue-400/50'
                            : isPassed
                            ? 'bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800/60'
                            : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                        }`}
                        title={`Jump to ${exp.role} (${exp.number})`}
                      >
                        {exp.number}
                      </button>
                    );
                  })}
                </div>
                <div className="text-[10px] font-mono text-slate-400 text-center pt-1">
                  Click any number above to jump directly
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Timeline Cards (#1 to #7) */}
          <div className="lg:col-span-8 relative space-y-12">
            {experiences.map((exp, idx) => {
              const isExpanded = !!expandedStudies[exp.id];
              const isActive = activeIndex === idx;

              return (
                <div
                  key={exp.id}
                  ref={(el) => (itemRefs.current[idx] = el)}
                  className="relative scroll-mt-28"
                >
                  {/* Experience Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.5, delay: 0.05, ease: [0.21, 0.47, 0.32, 0.98] }}
                    whileHover={{ y: -2, transition: { duration: 0.2 } }}
                    className={`p-6 sm:p-8 rounded-xl border transition-all duration-300 shadow-2xs glow-border ${
                      isActive
                        ? 'border-blue-500 dark:border-blue-400 bg-white dark:bg-[#111827] shadow-xl dark:shadow-glow-md ring-2 ring-blue-500/20'
                        : 'border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-[#111827]/90 hover:border-slate-300 dark:hover:border-slate-700'
                    }`}
                  >
                    {/* Header Row */}
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-4 mb-4 border-b border-slate-100 dark:border-slate-800">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className={`px-2 py-0.5 rounded font-mono text-xs font-bold transition-colors ${
                            isActive
                              ? 'bg-blue-600 text-white shadow-xs'
                              : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                          }`}>
                            STAGE {exp.number} // 07
                          </span>
                          {isActive && (
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 font-mono text-[10px] font-bold">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping inline-block" />
                              IN VIEW
                            </span>
                          )}
                        </div>

                        <h3 className="font-heading font-bold text-2xl text-slate-900 dark:text-white">
                          {exp.role}
                        </h3>

                        <div className="flex flex-wrap items-center gap-2 mt-1.5">
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

                      <div className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/60 px-3 py-1 rounded border border-slate-200 dark:border-slate-700/80 shrink-0">
                        <Calendar className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    {/* Bullets (Verbatim content) */}
                    <ul className="space-y-3">
                      {exp.bullets.map((bullet, bIdx) => (
                        <li
                          key={bIdx}
                          className="flex items-start gap-2.5 text-slate-700 dark:text-slate-300 text-sm leading-relaxed font-body"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 mt-2 shrink-0"></span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Expandable Case Study Button */}
                    {exp.caseStudy && (
                      <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80">
                        <button
                          type="button"
                          onClick={() => toggleCaseStudy(exp.id)}
                          className="w-full flex items-center justify-between p-3.5 rounded-lg bg-blue-50/70 hover:bg-blue-100/70 dark:bg-blue-500/10 dark:hover:bg-blue-500/20 border border-blue-200/80 dark:border-blue-500/30 text-blue-700 dark:text-blue-300 font-mono text-xs uppercase tracking-wider font-semibold transition-all group/btn"
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
                    <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center gap-1.5">
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
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
