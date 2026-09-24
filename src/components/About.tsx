import React from 'react';
import { motion } from 'framer-motion';
import { Wrench, Store, Code2, CheckCircle2 } from 'lucide-react';
import { aboutSummary, personalInfo } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="max-w-3xl mb-12"
        >
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-blueprint-600 font-semibold mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blueprint-600"></span>
            Profile Summary
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
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
            <div className="p-6 sm:p-8 rounded-lg bg-slate-50 border border-slate-200 relative shadow-2xs">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
                Architectural Intent &amp; Background
              </div>
              <p className="text-slate-800 text-lg sm:text-xl font-normal leading-relaxed font-body">
                {aboutSummary}
              </p>
            </div>

            {/* Core Competency Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <motion.div
                whileHover={{ y: -2, transition: { duration: 0.2 } }}
                className="flex items-start gap-3 p-4 rounded border border-slate-200 hover:border-blueprint-300 bg-white transition-colors shadow-2xs"
              >
                <CheckCircle2 className="w-5 h-5 text-blueprint-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-mono text-xs uppercase font-bold text-slate-900">End-to-End Enterprise</h3>
                  <p className="text-xs text-slate-600 mt-1">
                    Solo operator of{' '}
                    <a
                      href={personalInfo.kannanFarmsWebsite}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blueprint-600 underline font-medium"
                    >
                      Kannan Farms
                    </a>
                    , managing product sourcing, cold supply logistics, web storefront, and fulfillment.
                  </p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -2, transition: { duration: 0.2 } }}
                className="flex items-start gap-3 p-4 rounded border border-slate-200 hover:border-blueprint-300 bg-white transition-colors shadow-2xs"
              >
                <CheckCircle2 className="w-5 h-5 text-blueprint-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-mono text-xs uppercase font-bold text-slate-900">Hardware Prototyping</h3>
                  <p className="text-xs text-slate-600 mt-1">
                    Direct hands-on fabrication with sensors, microcontrollers (Arduino/Raspberry Pi), hydraulic systems, and automotive testing rigs.
                  </p>
                </div>
              </motion.div>
            </div>
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
              className="p-5 rounded-lg border border-slate-200 hover:border-blueprint-300 bg-white transition-colors shadow-2xs hover:shadow-xs"
            >
              <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                <div className="p-2 rounded bg-slate-100 text-slate-800">
                  <Wrench className="w-4 h-4 text-blueprint-600" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-sm text-slate-900">Automotive &amp; Systems Rigor</h3>
                  <p className="font-mono text-[10px] text-slate-500 uppercase">Mechanical Foundation</p>
                </div>
              </div>
              <ul className="mt-3 space-y-2 text-xs text-slate-600 font-mono">
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-blueprint-600 rounded-full"></span>
                  ADAS Intrinsic &amp; Extrinsic Sensor Calibration
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-blueprint-600 rounded-full"></span>
                  EV Powertrain &amp; Battery Efficiency Modeling
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-blueprint-600 rounded-full"></span>
                  CAD Precision Drafting (AutoCAD, CATIA)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-blueprint-600 rounded-full"></span>
                  Industrial PLC Automation &amp; Pneumatics
                </li>
              </ul>
            </motion.div>

            {/* Software & Autonomous Systems Column */}
            <motion.div
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="p-5 rounded-lg border border-slate-200 hover:border-blueprint-300 bg-white transition-colors shadow-2xs hover:shadow-xs"
            >
              <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                <div className="p-2 rounded bg-slate-100 text-slate-800">
                  <Code2 className="w-4 h-4 text-blueprint-600" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-sm text-slate-900">Autonomous Software &amp; AI</h3>
                  <p className="font-mono text-[10px] text-slate-500 uppercase">Modern Software Stack</p>
                </div>
              </div>
              <ul className="mt-3 space-y-2 text-xs text-slate-600 font-mono">
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-blueprint-600 rounded-full"></span>
                  FastAPI &amp; React Full-Stack Architecture
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-blueprint-600 rounded-full"></span>
                  Local LLM Tooling (Ollama) &amp; Automated Signals
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-blueprint-600 rounded-full"></span>
                  PostgreSQL Persistence &amp; Hardened Bot Systems
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-blueprint-600 rounded-full"></span>
                  Firebase Serverless &amp; WhatsApp Integration
                </li>
              </ul>
            </motion.div>

            {/* Enterprise Operator Box */}
            <motion.div
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.2 }}
              className="p-4 rounded-lg bg-blue-50/60 border border-blue-200/80 flex items-center justify-between text-xs"
            >
              <div className="flex items-center gap-2.5">
                <Store className="w-4 h-4 text-blueprint-600 shrink-0" />
                <span className="text-slate-800 font-medium">
                  Active Founder: Kannan Farms Natural Products
                </span>
              </div>
              <a
                href={personalInfo.kannanFarmsWebsite}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-blueprint-700 font-semibold hover:underline"
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

