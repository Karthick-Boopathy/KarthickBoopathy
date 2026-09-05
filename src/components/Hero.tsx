import React, { useState } from 'react';
import { FileText, ArrowDownRight, Compass, ShieldCheck, Cpu, Wrench, ExternalLink, Mail, Phone } from 'lucide-react';
import { PHOTO_PATH, RESUME_PDF_URL, personalInfo } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const [imgError, setImgError] = useState<boolean>(false);

  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 border-b border-slate-200 bg-cad-grid overflow-hidden">
      {/* Background CAD decorative grid lines */}
      <div className="absolute inset-0 bg-cad-major-grid pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Engineering Status Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-6 mb-8 border-b border-slate-200/80 text-xs font-mono text-slate-500">
          <div className="flex items-center space-x-3">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-slate-100 border border-slate-300 text-slate-700 font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              OPERATOR STATUS: ACTIVE
            </span>
            <span className="hidden sm:inline-block text-slate-300">|</span>
            <span className="hidden sm:flex items-center gap-1">
              <Compass className="w-3.5 h-3.5 text-blueprint-600" />
              {personalInfo.location} [{personalInfo.coordinates}]
            </span>
          </div>
          <div className="text-right tracking-widest text-[11px] text-slate-400">
            SPEC: AUTO-ENG // FULLSTACK // FOUNDER
          </div>
        </div>

        {/* Main Hero Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Narrative & Coordinates */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-blueprint-600 uppercase tracking-wider font-semibold">
                <span className="px-1.5 py-0.5 bg-blue-50 border border-blue-200 rounded">KB-PORTFOLIO</span>
                <span>Automobile Engineering &times; Full-Stack Software</span>
              </div>
              
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                {personalInfo.name}
              </h1>
              
              <p className="font-heading text-lg sm:text-xl text-blueprint-600 font-semibold tracking-tight">
                {personalInfo.title}
              </p>
            </div>

            {/* Core Hook */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
              A hands-on builder operating at the convergence of <span className="text-slate-900 font-medium">vehicle systems engineering</span>, <span className="text-slate-900 font-medium">production software architecture</span>, and <span className="text-slate-900 font-medium">independent enterprise</span>. From ADAS camera calibration and EV powertrains to local LLM trading bots and full-stack e-commerce.
            </p>

            {/* Dual Core Pillars Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="p-3 bg-white border border-slate-200 rounded shadow-2xs flex items-start gap-3">
                <div className="p-2 bg-slate-50 border border-slate-200 rounded text-slate-700">
                  <Wrench className="w-4 h-4 text-blueprint-600" />
                </div>
                <div>
                  <h2 className="font-mono text-xs uppercase font-bold text-slate-900">Automotive & Hardware</h2>
                  <p className="text-xs text-slate-500 mt-0.5">ADAS Calibration, EV battery sizing, Arduino & PLC logic</p>
                </div>
              </div>

              <div className="p-3 bg-white border border-slate-200 rounded shadow-2xs flex items-start gap-3">
                <div className="p-2 bg-slate-50 border border-slate-200 rounded text-slate-700">
                  <Cpu className="w-4 h-4 text-blueprint-600" />
                </div>
                <div>
                  <h2 className="font-mono text-xs uppercase font-bold text-slate-900">Software & Autonomous</h2>
                  <p className="text-xs text-slate-500 mt-0.5">FastAPI, React, Ollama LLM pipelines, Postgres & Canvas</p>
                </div>
              </div>
            </div>

            {/* Call to Actions */}
            <div className="pt-3 flex flex-wrap items-center gap-4">
              <a
                href={RESUME_PDF_URL}
                download="Karthick_Boopathy_Resume.docx"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 hover:bg-blueprint-600 text-white font-mono text-xs uppercase tracking-wider font-semibold rounded transition-all shadow-sm hover:shadow-md"
              >
                <FileText className="w-4 h-4" />
                <span>Download Resume</span>
              </a>

              <a
                href="#experience"
                className="inline-flex items-center gap-2 px-5 py-3 bg-white hover:bg-slate-50 text-slate-800 font-mono text-xs uppercase tracking-wider font-semibold rounded border border-slate-300 hover:border-slate-400 transition-all shadow-2xs"
              >
                <span>View Engineering Work</span>
                <ArrowDownRight className="w-4 h-4 text-blueprint-600" />
              </a>
            </div>

            {/* Direct Contact Pointers */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono text-slate-500 border-t border-slate-200/60">
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-1.5 hover:text-blueprint-600 transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{personalInfo.email}</span>
              </a>
              <span className="text-slate-300">&bull;</span>
              <a
                href={`tel:${personalInfo.phone}`}
                className="inline-flex items-center gap-1.5 hover:text-blueprint-600 transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{personalInfo.phone}</span>
              </a>
            </div>
          </div>

          {/* Right Column: CAD Precision Framed Portrait */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm">
              {/* CAD Corner Fiducial Crosshairs */}
              <div className="absolute -top-3 -left-3 font-mono text-slate-400 text-base leading-none select-none">+</div>
              <div className="absolute -top-3 -right-3 font-mono text-slate-400 text-base leading-none select-none">+</div>
              <div className="absolute -bottom-3 -left-3 font-mono text-slate-400 text-base leading-none select-none">+</div>
              <div className="absolute -bottom-3 -right-3 font-mono text-slate-400 text-base leading-none select-none">+</div>

              {/* Technical Frame Housing */}
              <div className="p-3 bg-white border border-slate-300 rounded shadow-md relative">
                {/* Header specification band */}
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-200 text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                  <span>FIG 1.0 // SUBJECT PORTRAIT</span>
                  <span className="text-blueprint-600 font-semibold">REF: KB-DSR-01</span>
                </div>

                {/* Portrait Display / Engineered Fallback */}
                <figure className="relative aspect-4/5 bg-slate-100 rounded border border-slate-200 overflow-hidden flex items-center justify-center m-0">
                  {!imgError ? (
                    <img
                      src={PHOTO_PATH}
                      alt="Karthick Boopathy - Automobile Engineer & Full-Stack Builder"
                      title="Karthick Boopathy - Engineer & Independent Technical Builder"
                      itemProp="image"
                      loading="eager"
                      onError={() => setImgError(true)}
                      className="w-full h-full object-cover object-top hover:scale-[1.02] transition-transform duration-300"
                    />
                  ) : (
                    /* Engineering Blueprint Fallback Avatar */
                    <div className="w-full h-full p-6 flex flex-col items-center justify-center text-center bg-radial from-slate-50 to-slate-200">
                      {/* Geometric CAD Wireframe Overlay */}
                      <svg className="w-32 h-32 text-blueprint-600/30 mb-4 animate-spin-slow" viewBox="0 0 100 100" fill="none" stroke="currentColor">
                        <circle cx="50" cy="50" r="45" strokeWidth="1" strokeDasharray="4 2" />
                        <circle cx="50" cy="50" r="32" strokeWidth="1.5" />
                        <polygon points="50,18 78,68 22,68" strokeWidth="1" />
                        <line x1="50" y1="5" x2="50" y2="95" strokeWidth="0.75" strokeDasharray="2 2" />
                        <line x1="5" y1="50" x2="95" y2="50" strokeWidth="0.75" strokeDasharray="2 2" />
                      </svg>
                      <div className="w-16 h-16 rounded-full border-2 border-slate-400 bg-white flex items-center justify-center font-heading font-bold text-2xl text-slate-800 shadow-sm mb-2">
                        KB
                      </div>
                      <span className="font-heading font-semibold text-slate-900 text-sm">{personalInfo.name}</span>
                      <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest mt-1">
                        PHOTO_PATH PLACEHOLDER
                      </span>
                      <span className="text-[10px] text-slate-400 mt-2 font-mono max-w-[200px]">
                        Drop headshot into <code className="text-blueprint-600 bg-slate-100 px-1 py-0.5 rounded">/public/images/profile.jpg</code>
                      </span>
                    </div>
                  )}

                  {/* Calibration Overlay Badges */}
                  <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-[9px] font-mono px-2 py-1 bg-white/90 backdrop-blur-xs rounded border border-slate-200 text-slate-600">
                    <span className="flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3 text-emerald-600" />
                      VERIFIED CREDENTIALS
                    </span>
                    <span>COIMBATORE // IND</span>
                  </div>
                </figure>

                {/* Footer Technical Dimensions */}
                <div className="pt-2 mt-2 border-t border-slate-200 flex items-center justify-between text-[9px] font-mono text-slate-400">
                  <span>SCALE: 1:1 NOMINAL</span>
                  <a
                    href={personalInfo.kannanFarmsWebsite}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blueprint-600 hover:underline flex items-center gap-1"
                  >
                    <span>kannanfarms.com</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
