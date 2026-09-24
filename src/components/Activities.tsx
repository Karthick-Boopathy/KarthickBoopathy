import React from 'react';
import { motion } from 'framer-motion';
import { Presentation, Users, Trophy, Languages, Heart, Sparkles } from 'lucide-react';
import { eventsAndActivities, personalProfile } from '../data/portfolioData';

export const Activities: React.FC = () => {
  const getActivityIcon = (type: string) => {
    if (type.includes('Conference')) return <Presentation className="w-4 h-4 text-blue-600 dark:text-blue-400" />;
    if (type.includes('Community')) return <Users className="w-4 h-4 text-blue-600 dark:text-blue-400" />;
    return <Trophy className="w-4 h-4 text-blue-600 dark:text-blue-400" />;
  };

  return (
    <section className="py-20 bg-white/50 dark:bg-[#0B0F1A]/80 border-b border-slate-200 dark:border-slate-800/80 overflow-hidden relative">
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
              SHEET 07
            </span>
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Contributions &amp; Personal Profile</span>
            </span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Events, Leadership &amp; Personal Dimensions
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-2 text-base">
            Technical symposium presentations, community initiatives, language proficiencies, and personal pursuits.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Events & Activities (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="font-mono text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold mb-2">
              Key Events &amp; Initiatives
            </h3>
            {eventsAndActivities.map((event, idx) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: idx * 0.08, ease: [0.21, 0.47, 0.32, 0.98] }}
                whileHover={{ y: -2, transition: { duration: 0.2 } }}
                className="p-5 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-[#111827] hover:bg-white dark:hover:bg-[#161F30] hover:border-blue-300 dark:hover:border-blue-500/40 transition-all shadow-2xs hover:shadow-xs dark:shadow-glow-sm flex items-start gap-4 glow-border"
              >
                <div className="p-2.5 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shrink-0">
                  {getActivityIcon(event.type)}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-mono text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-500/15 px-2 py-0.5 rounded border border-blue-100 dark:border-blue-500/30 font-medium">
                      {event.type}
                    </span>
                  </div>
                  <h4 className="font-heading font-semibold text-slate-900 dark:text-white text-base">
                    {event.title}
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mt-1 leading-relaxed">
                    {event.context}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column: Languages & Interests (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Languages Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="p-6 rounded-lg border border-slate-200 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-500/40 bg-white dark:bg-[#111827] shadow-2xs hover:shadow-xs dark:shadow-glow-sm transition-all glow-border"
            >
              <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-slate-100 dark:border-slate-800">
                <Languages className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <h3 className="font-heading font-semibold text-base text-slate-900 dark:text-white">
                  Languages
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {personalProfile.languages.map((lang) => (
                  <motion.div
                    key={lang}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1.5 rounded bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 text-xs font-mono text-slate-800 dark:text-slate-200 font-medium cursor-default select-none shadow-2xs"
                  >
                    {lang} (Fluent)
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Interests Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="p-6 rounded-lg border border-slate-200 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-500/40 bg-white dark:bg-[#111827] shadow-2xs hover:shadow-xs dark:shadow-glow-sm transition-all glow-border"
            >
              <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-slate-100 dark:border-slate-800">
                <Heart className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <h3 className="font-heading font-semibold text-base text-slate-900 dark:text-white">
                  Interests &amp; Pursuits
                </h3>
              </div>
              <ul className="space-y-2.5">
                {personalProfile.interests.map((interest) => (
                  <li key={interest} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 shadow-glow-sm"></span>
                    <span>{interest}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
