import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Instagram, ExternalLink, FileText, ArrowUp, Compass } from 'lucide-react';
import { personalInfo, GITHUB_URL, LINKEDIN_URL, KANNAN_FARMS_INSTAGRAM_URL, RESUME_PDF_URL } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contact Docket Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          {/* Main Dossier Column */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded border border-slate-700 bg-slate-800 flex items-center justify-center font-mono text-xs font-bold text-white">
                KB
              </div>
              <span className="font-heading font-bold text-xl text-white tracking-tight">
                {personalInfo.name}
              </span>
            </div>

            <p className="text-sm text-slate-400 max-w-md font-body leading-relaxed">
              Automobile engineering graduate &amp; independent technical builder based in {personalInfo.location}. Open for technical collaborations, systems engineering roles, and innovative ventures.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs font-mono text-slate-400">
              <Compass className="w-3.5 h-3.5 text-blueprint-500" />
              <span>COORDINATES: {personalInfo.coordinates}</span>
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
                  className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-blueprint-400 shrink-0" />
                  <span className="truncate">{personalInfo.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-blueprint-400 shrink-0" />
                  <span>{personalInfo.phone}</span>
                </a>
              </li>
              <li className="flex items-center gap-2 text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-blueprint-400 shrink-0" />
                <span>{personalInfo.location}</span>
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
                  className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
                >
                  <Instagram className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span>Kannan Farms Instagram</span>
                  <ExternalLink className="w-2.5 h-2.5 ml-auto text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href={RESUME_PDF_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blueprint-400 hover:text-blueprint-300 transition-colors font-semibold"
                >
                  <FileText className="w-3.5 h-3.5 shrink-0" />
                  <span>Download Curriculum Vitae</span>
                  <ExternalLink className="w-2.5 h-2.5 ml-auto text-blueprint-500" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back-to-Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div className="flex items-center gap-2">
            <span>&copy; {new Date().getFullYear()} Karthick Boopathy.</span>
            <span>All rights reserved.</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors border border-slate-700 focus:outline-hidden focus:ring-2 focus:ring-blueprint-500"
            aria-label="Scroll back to top"
          >
            <span>Top of Page</span>
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>
      </div>
    </footer>
  );
};
