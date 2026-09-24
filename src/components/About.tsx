import React from 'react';
import { motion } from 'framer-motion';
import { Wrench, Store, Code2, CheckCircle2, Sparkles } from 'lucide-react';
import { aboutSummary, personalInfo } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white/50 dark:bg-[#0B0F1A]/80 border-b border-slate-200 dark:border-slate-800/80 overflow-hidden relative">
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
              SHEET 01
            </span>
            <span>Profile Summary &amp; Systems Intent</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Bridging Physical Engineering &amp; Modern Computing
          </h2>
        </motion.div>

        {/* Core Summary Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Statement (Left / Full verbatim bio) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="p-6 sm:p-8 rounded-lg bg-slate-50 dark:bg-[#111827] border border-slate-200 dark:border-slate-800 relative shadow-2xs dark:shadow-glow-sm">
              <div className="text-xs font-mono text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-3 flex items-center justify-between">
                <span>Architectural Intent &amp; Background</span>
                <span className="text-[10px] text-blue-600 dark:text-blue-400 font-mono">AUTONOMOUS &times; HARDWARE</span>
              </div>
              <p className="text-slate-800 dark:text-slate-200 text-lg sm:text-xl font-normal leading-relaxed font-body">
                {aboutSummary}
              </p>
            </div>

            {/* Core Competency Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <motion.div
                whileHover={{ y: -2, transition: { duration: 0.2 } }}
                className="flex items-start gap-3 p-4 rounded border border-slate-200 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-500/40 bg-white dark:bg-[#111827] transition-all shadow-2xs glow-border"
              >
                <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-mono text-xs uppercase font-bold text-slate-900 dark:text-white">End-to-End Enterprise</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                    Solo operator of{' '}
                    <a
                      href={personalInfo.kannanFarmsWebsite}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 underline font-medium hover:text-blue-500"
                    >
                      Kannan Farms
                    </a>
                    , managing product sourcing, cold supply logistics, web storefront, and fulfillment.
                  </p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -2, transition: { duration: 0.2 } }}
                className="flex items-start gap-3 p-4 rounded border border-slate-200 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-500/40 bg-white dark:bg-[#111827] transition-all shadow-2xs glow-border"
              >
                <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-mono text-xs uppercase font-bold text-slate-900 dark:text-white">Hardware Prototyping</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                    Direct hands-on fabrication with sensors, microcontrollers (Arduino/Raspberry Pi), hydraulic systems, and automotive testing rigs.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Vibe Coding Feature Banner */}
            <motion.div
              whileHover={{ y: -2, transition: { duration: 0.2 } }}
              className="p-4 rounded-lg border border-purple-200 dark:border-purple-800/60 bg-gradient-to-r from-purple-50/80 via-blue-50/50 to-indigo-50/80 dark:from-purple-950/30 dark:via-blue-950/20 dark:to-indigo-950/30 shadow-2xs glow-border flex items-start gap-3.5"
            >
              <div className="p-2 rounded bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 shrink-0">
                <Sparkles className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-mono text-xs uppercase font-bold text-purple-900 dark:text-purple-300">The Vibe Coding Paradigm</h3>
                  <span className="px-2 py-0.5 rounded-full bg-purple-200/80 dark:bg-purple-800/60 text-[9px] font-mono font-bold text-purple-800 dark:text-purple-200">AI-NATIVE 10x</span>
                </div>
                <p className="text-xs text-slate-700 dark:text-slate-300 mt-1 leading-relaxed">
                  Pioneering agentic development workflows: moving from conceptual spark to deployed production software in hours. Leveraging local LLMs (Ollama), AI pair programming, and prompt-driven orchestration while maintaining rigorous automobile-grade standards for testing and persistence.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Dual Architecture Visualizer */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.55, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-5 space-y-4"
          >
            {/* Automotive & Hardware Column */}
            <motion.div
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="p-5 rounded-lg border border-slate-200 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-500/40 bg-white dark:bg-[#111827] transition-all shadow-2xs hover:shadow-xs glow-border"
            >
              <div className="flex items-center gap-3 pb-3 border-b border-slate-100 dark:border-slate-800">
                <div className="p-2 rounded bg-slate-100 dark:bg-slate-800/80 text-slate-800 dark:text-slate-200">
                  <Wrench className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-sm text-slate-900 dark:text-white">Automotive &amp; Systems Rigor</h3>
                  <p className="font-mono text-[10px] text-slate-500 dark:text-slate-400 uppercase">Mechanical Foundation</p>
                </div>
              </div>
              <ul className="mt-3 space-y-2 text-xs text-slate-600 dark:text-slate-400 font-mono">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full"></span>
                  ADAS Intrinsic &amp; Extrinsic Sensor Calibration
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full"></span>
                  EV Powertrain &amp; Battery Efficiency Modeling
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full"></span>
                  CAD Precision Drafting (AutoCAD, CATIA)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full"></span>
                  Industrial PLC Automation &amp; Pneumatics
                </li>
              </ul>
            </motion.div>

            {/* Software & Autonomous Systems Column */}
            <motion.div
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="p-5 rounded-lg border border-slate-200 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-500/40 bg-white dark:bg-[#111827] transition-all shadow-2xs hover:shadow-xs glow-border"
            >
              <div className="flex items-center gap-3 pb-3 border-b border-slate-100 dark:border-slate-800">
                <div className="p-2 rounded bg-slate-100 dark:bg-slate-800/80 text-slate-800 dark:text-slate-200">
                  <Code2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-sm text-slate-900 dark:text-white">Autonomous Software &amp; AI</h3>
                  <p className="font-mono text-[10px] text-slate-500 dark:text-slate-400 uppercase">Modern Software Stack</p>
                </div>
              </div>
              <ul className="mt-3 space-y-2 text-xs text-slate-600 dark:text-slate-400 font-mono">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full"></span>
                  FastAPI &amp; React Full-Stack Architecture
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full"></span>
                  Local LLM Tooling (Ollama) &amp; Automated Signals
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full"></span>
                  PostgreSQL Persistence &amp; Hardened Bot Systems
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full"></span>
                  Firebase Serverless &amp; WhatsApp Integration
                </li>
              </ul>
            </motion.div>

            {/* Enterprise Operator Box */}
            <motion.div
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.2 }}
              className="p-4 rounded-lg bg-blue-50/70 dark:bg-blue-500/10 border border-blue-200/80 dark:border-blue-500/30 flex items-center justify-between text-xs"
            >
              <div className="flex items-center gap-2.5">
                <Store className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                <span className="text-slate-800 dark:text-slate-200 font-medium">
                  Active Founder: Kannan Farms Natural Products
                </span>
              </div>
              <a
                href={personalInfo.kannanFarmsWebsite}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-blue-700 dark:text-blue-400 font-semibold hover:underline"
              >
                Storefront &rarr;
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
