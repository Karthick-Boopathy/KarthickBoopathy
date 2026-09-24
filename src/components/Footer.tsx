import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Instagram, ExternalLink, FileText, ArrowUp, Compass } from 'lucide-react';
import { personalInfo, GITHUB_URL, LINKEDIN_URL, KANNAN_FARMS_INSTAGRAM_URL, RESUME_PDF_URL } from '../data/portfolioData';
import { useMagneticCursor } from '../hooks/useMagneticCursor';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const topMagnetic = useMagneticCursor<HTMLButtonElement>({ strength: 0.3, radius: 80 });

  return (
    <footer id="contact" className="bg-[#090D16] dark:bg-[#050811] text-slate-300 pt-16 pb-12 border-t border-slate-200 dark:border-slate-800/80 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Contact Docket Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80"
        >
          {/* Main Dossier Column */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded border border-slate-700 bg-slate-800/90 flex items-center justify-center font-mono text-xs font-bold text-white shadow-2xs">
                KB
              </div>
              <span className="font-heading font-bold text-xl text-white tracking-tight">
                {personalInfo.name}
              </span>
            </div>

            <p className="text-sm text-slate-400 max-w-md font-body leading-relaxed">
              Automobile engineering graduate &amp; independent technical builder based in {personalInfo.location}. Open for technical collaborations, systems engineering roles, and innovative ventures.
            </p>

            <div className="pt-2">
              <a
                href={personalInfo.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-white transition-colors group"
                title="View coordinates on Google Maps"
              >
                <Compass className="w-3.5 h-3.5 text-blue-400 group-hover:rotate-45 transition-transform shrink-0" />
                <span>COORDINATES: <span className="underline underline-offset-2 decoration-slate-600 group-hover:decoration-blue-400">{personalInfo.coordinates}</span></span>
              </a>
            </div>
          </div>

          {/* Direct Communication Channels */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-mono uppercase text-slate-400 tracking-wider font-semibold">
              Direct Contact
            </div>
            <ul className="space-y-2 text-xs font-mono">
              <li>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-2 text-slate-300 hover:text-blue-400 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span className="truncate">{personalInfo.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="flex items-center gap-2 text-slate-300 hover:text-blue-400 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span>{personalInfo.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={personalInfo.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors group"
                  title="View location on Google Maps"
                >
                  <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span className="group-hover:underline underline-offset-2">{personalInfo.location}</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Links & Affiliations */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-mono uppercase text-slate-400 tracking-wider font-semibold">
              Profiles &amp; Enterprise
            </div>
            <ul className="space-y-2 text-xs font-mono">
              <li>
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
                >
                  <Github className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span>GitHub Profile</span>
                  <ExternalLink className="w-2.5 h-2.5 ml-auto text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span>LinkedIn Profile</span>
                  <ExternalLink className="w-2.5 h-2.5 ml-auto text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href={personalInfo.kannanFarmsWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span>Kannan Farms Store</span>
                  <ExternalLink className="w-2.5 h-2.5 ml-auto text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href={KANNAN_FARMS_INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-300 hover:text-pink-400 transition-colors"
                >
                  <Instagram className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span>Kannan Farms Instagram</span>
                  <ExternalLink className="w-2.5 h-2.5 ml-auto text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href={RESUME_PDF_URL}
                  download="Karthick_Boopathy_Resume.docx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors font-semibold"
                >
                  <FileText className="w-3.5 h-3.5 shrink-0" />
                  <span>Download Curriculum Vitae</span>
                  <ExternalLink className="w-2.5 h-2.5 ml-auto text-blue-500" />
                </a>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Bottom Bar: Copyright & Back-to-Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-2">
            <span>&copy; {new Date().getFullYear()} Karthick Boopathy.</span>
            <span>All rights reserved.</span>
          </div>

          <motion.button
            ref={topMagnetic.ref}
            style={{ x: topMagnetic.x, y: topMagnetic.y }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-slate-800/80 hover:bg-blue-600 text-slate-300 hover:text-white transition-all border border-slate-700 hover:border-blue-500 shadow-2xs hover:shadow-glow-sm cursor-pointer"
            aria-label="Scroll back to top"
          >
            <span>Top of Page</span>
            <ArrowUp className="w-3 h-3" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};
