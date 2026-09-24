import React, { useState } from 'react';
import { motion, type Variants } from 'framer-motion';
import { FileText, ArrowDownRight, Compass, ShieldCheck, Cpu, Wrench, ExternalLink, Mail, Phone } from 'lucide-react';
import { PHOTO_PATH, RESUME_PDF_URL, personalInfo } from '../data/portfolioData';
import { useMagneticCursor } from '../hooks/useMagneticCursor';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.21, 0.47, 0.32, 0.98],
    },
  },
};

export const Hero: React.FC = () => {
  const [imgError, setImgError] = useState<boolean>(false);
  const primaryMagnetic = useMagneticCursor<HTMLAnchorElement>({ strength: 0.25, radius: 100 });
  const secondaryMagnetic = useMagneticCursor<HTMLAnchorElement>({ strength: 0.2, radius: 100 });

  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 border-b border-slate-200 dark:border-slate-800/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Engineering Status Bar */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="flex flex-wrap items-center justify-between gap-3 pb-6 mb-8 border-b border-slate-200/80 dark:border-slate-800/80 text-xs font-mono text-slate-500 dark:text-slate-400"
        >
          <div className="flex items-center space-x-3">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800/90 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-semibold shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_#10B981]" />
              OPERATOR STATUS: ACTIVE
            </span>
            <span className="hidden sm:inline-block text-slate-300 dark:text-slate-700">|</span>
            <a
              href={personalInfo.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group cursor-pointer"
              title="Open coordinates in Google Maps"
            >
              <Compass className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 group-hover:rotate-45 transition-transform shrink-0" />
              <span>
                {personalInfo.location}{' '}
                <span className="underline underline-offset-2 decoration-blue-300 dark:decoration-blue-600 group-hover:decoration-blue-500">
                  [{personalInfo.coordinates}]
                </span>
              </span>
            </a>
          </div>
          <div className="text-right tracking-widest text-[11px] text-slate-400 dark:text-slate-500 spec-label">
            SPEC: AUTOMOBILE ENG // SYSTEMS // ENTERPRISE
          </div>
        </motion.div>

        {/* Main Hero Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Narrative & Massive Hierarchy */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-6"
          >
            <motion.div variants={itemVariants} className="space-y-3">
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono uppercase tracking-wider font-semibold">
                <span className="px-2 py-0.5 bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/30 rounded text-[11px] text-blue-600 dark:text-blue-400">KB-PORTFOLIO // V3</span>
                <span className="px-2.5 py-0.5 rounded bg-blue-50 dark:bg-blue-500/15 border border-blue-200 dark:border-blue-500/30 text-blue-700 dark:text-blue-300 text-[11px] font-bold flex items-center gap-1.5 shadow-2xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-ping inline-block" />
                  AUTOMOBILE ENG &times; SYSTEMS BUILDER
                </span>
              </div>

              {/* Bold Massive Hero Title */}
              <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-[5.25rem] xl:text-[6.25rem] font-bold tracking-tight text-slate-900 dark:text-white leading-[0.95]">
                <span className="text-shimmer">{personalInfo.name}</span>
              </h1>

              {/* Spec Label Role */}
              <p className="spec-label text-xs sm:text-sm text-blue-600 dark:text-blue-400 font-semibold tracking-wider">
                // {personalInfo.title}
              </p>
            </motion.div>

            {/* Core Hook Statement */}
            <motion.p variants={itemVariants} className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl font-normal">
              An <span className="text-slate-900 dark:text-white font-medium">automobile engineer</span> and hands-on systems builder operating at the convergence of{' '}
              <span className="text-slate-900 dark:text-white font-medium">vehicle systems engineering</span>,{' '}
              <span className="text-slate-900 dark:text-white font-medium">high-velocity software architecture</span>, and{' '}
              <span className="text-slate-900 dark:text-white font-medium">independent enterprise</span>. Rapidly converting engineering principles into production-grade systems — from ADAS camera calibration and EV powertrains to quantitative trading bots and full-stack e-commerce.
            </motion.p>

            {/* Dual Core Pillars Badges */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <motion.div
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="p-3.5 bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-500/40 rounded shadow-2xs hover:shadow-xs transition-colors flex items-start gap-3 glow-border"
              >
                <div className="p-2 bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 rounded text-slate-700 dark:text-slate-300">
                  <Wrench className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h2 className="font-mono text-xs uppercase font-bold text-slate-900 dark:text-slate-100">Automotive &amp; Hardware</h2>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">ADAS Calibration, EV battery sizing, Arduino &amp; PLC logic</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="p-3.5 bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-500/40 rounded shadow-2xs hover:shadow-xs transition-colors flex items-start gap-3 glow-border"
              >
                <div className="p-2 bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800/60 rounded text-blue-700 dark:text-blue-300">
                  <Cpu className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h2 className="font-mono text-xs uppercase font-bold text-slate-900 dark:text-slate-100 flex items-center gap-1.5">
                    <span>Software &amp; Intelligent Systems</span>
                    <span className="px-1.5 py-0.2 rounded bg-blue-100 dark:bg-blue-900/60 text-[9px] text-blue-700 dark:text-blue-300 font-mono">10x</span>
                  </h2>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">FastAPI, React, local Ollama LLMs, agentic tooling &amp; automation</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Call to Actions with Magnetic Pull */}
            <motion.div variants={itemVariants} className="pt-3 flex flex-wrap items-center gap-4">
              <motion.a
                ref={primaryMagnetic.ref}
                style={{ x: primaryMagnetic.x, y: primaryMagnetic.y }}
                href={RESUME_PDF_URL}
                download="Karthick_Boopathy_Resume.docx"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-500 text-white font-mono text-xs uppercase tracking-wider font-semibold rounded transition-all shadow-sm dark:shadow-glow-md"
              >
                <FileText className="w-4 h-4" />
                <span>Download Resume</span>
              </motion.a>

              <motion.a
                ref={secondaryMagnetic.ref}
                style={{ x: secondaryMagnetic.x, y: secondaryMagnetic.y }}
                href="#experience"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-5 py-3 bg-white hover:bg-slate-50 dark:bg-[#111827] dark:hover:bg-slate-800/60 text-slate-800 dark:text-slate-200 font-mono text-xs uppercase tracking-wider font-semibold rounded border border-slate-300 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-600 transition-colors shadow-2xs"
              >
                <span>View Engineering Work</span>
                <ArrowDownRight className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              </motion.a>
            </motion.div>

            {/* Direct Contact Pointers */}
            <motion.div variants={itemVariants} className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono text-slate-500 dark:text-slate-400 border-t border-slate-200/60 dark:border-slate-800/60">
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-1.5 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{personalInfo.email}</span>
              </a>
              <span className="text-slate-300 dark:text-slate-700">&bull;</span>
              <a
                href={`tel:${personalInfo.phone}`}
                className="inline-flex items-center gap-1.5 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{personalInfo.phone}</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column: CAD Precision Framed Portrait */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-sm"
            >
              {/* CAD Corner Fiducial Crosshairs */}
              <div className="absolute -top-3 -left-3 font-mono text-slate-400 dark:text-slate-600 text-base leading-none select-none">+</div>
              <div className="absolute -top-3 -right-3 font-mono text-slate-400 dark:text-slate-600 text-base leading-none select-none">+</div>
              <div className="absolute -bottom-3 -left-3 font-mono text-slate-400 dark:text-slate-600 text-base leading-none select-none">+</div>
              <div className="absolute -bottom-3 -right-3 font-mono text-slate-400 dark:text-slate-600 text-base leading-none select-none">+</div>

              {/* Technical Frame Housing with Glow Border */}
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
                className="p-3 bg-white dark:bg-[#111827] border border-slate-300 dark:border-slate-800 rounded shadow-md dark:shadow-glow-sm hover:shadow-lg dark:hover:shadow-glow-md transition-all relative glow-border"
              >
                {/* Header specification band */}
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-200 dark:border-slate-800 text-[10px] font-mono text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                  <span>FIG 1.0 // SUBJECT PORTRAIT</span>
                  <span className="text-blue-600 dark:text-blue-400 font-semibold">REF: KB-DSR-01</span>
                </div>

                {/* Portrait Display with Duotone Blueprint Effect */}
                <figure className="relative aspect-4/5 bg-slate-100 dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-800 overflow-hidden flex items-center justify-center m-0 group">
                  {!imgError ? (
                    <>
                      <img
                        src={PHOTO_PATH}
                        alt="Karthick Boopathy - Automobile Engineer & Full-Stack Builder"
                        title="Karthick Boopathy - Engineer & Independent Technical Builder"
                        itemProp="image"
                        loading="eager"
                        onError={() => setImgError(true)}
                        className="w-full h-full object-cover object-top photo-duotone group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                      />
                      {/* Blueprint color tint overlay (dark mode only) */}
                      <div className="photo-duotone-overlay hidden dark:block" />
                    </>
                  ) : (
                    /* Engineering Blueprint Fallback Avatar */
                    <div className="w-full h-full p-6 flex flex-col items-center justify-center text-center bg-radial from-slate-50 to-slate-200 dark:from-slate-900 dark:to-[#0B0F1A]">
                      <svg className="w-32 h-32 text-blue-600/30 mb-4 animate-spin-slow" viewBox="0 0 100 100" fill="none" stroke="currentColor">
                        <circle cx="50" cy="50" r="45" strokeWidth="1" strokeDasharray="4 2" />
                        <circle cx="50" cy="50" r="32" strokeWidth="1.5" />
                        <polygon points="50,18 78,68 22,68" strokeWidth="1" />
                        <line x1="50" y1="5" x2="50" y2="95" strokeWidth="0.75" strokeDasharray="2 2" />
                        <line x1="5" y1="50" x2="95" y2="50" strokeWidth="0.75" strokeDasharray="2 2" />
                      </svg>
                      <div className="w-16 h-16 rounded-full border-2 border-slate-400 dark:border-slate-700 bg-white dark:bg-slate-800 flex items-center justify-center font-heading font-bold text-2xl text-slate-800 dark:text-white shadow-sm mb-2">
                        KB
                      </div>
                      <span className="font-heading font-semibold text-slate-900 dark:text-white text-sm">{personalInfo.name}</span>
                      <span className="font-mono text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-widest mt-1">
                        PHOTO_PATH
                      </span>
                    </div>
                  )}

                  {/* Calibration Overlay Badges */}
                  <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-[9px] font-mono px-2 py-1 bg-white/90 dark:bg-[#0B0F1A]/90 backdrop-blur-xs rounded border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 shadow-2xs">
                    <span className="flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                      VERIFIED CREDENTIALS
                    </span>
                    <span>COIMBATORE // IND</span>
                  </div>
                </figure>

                {/* Footer Technical Dimensions */}
                <div className="pt-2 mt-2 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-[9px] font-mono text-slate-400 dark:text-slate-500">
                  <span>SCALE: 1:1 NOMINAL</span>
                  <a
                    href={personalInfo.kannanFarmsWebsite}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
                  >
                    <span>kannanfarms.com</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
