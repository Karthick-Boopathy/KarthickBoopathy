import React, { useState, useEffect } from 'react';
import { FileText, Github, Linkedin, Menu, X, Terminal } from 'lucide-react';
import { GITHUB_URL, LINKEDIN_URL, RESUME_PDF_URL, personalInfo } from '../data/portfolioData';

export const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['about', 'skills', 'experience', 'projects', 'education', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            return;
          }
        }
      }
      if (window.scrollY < 300) {
        setActiveSection('hero');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm'
          : 'bg-[#F8FAFC]/90 backdrop-blur-sm border-b border-slate-200/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Monogram */}
          <a
            href="#"
            className="flex items-center space-x-3 group focus-visible:ring-2 focus-visible:ring-blueprint-600 rounded px-1 py-0.5"
            aria-label="Karthick Boopathy - Return to top"
          >
            <div className="w-8 h-8 rounded border border-slate-300 bg-white flex items-center justify-center font-mono text-xs font-bold text-slate-900 group-hover:border-blueprint-600 group-hover:text-blueprint-600 transition-colors shadow-2xs">
              KB
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-semibold text-sm tracking-tight text-slate-900 group-hover:text-blueprint-600 transition-colors">
                {personalInfo.name}
              </span>
              <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block animate-pulse"></span>
                ENG // TECH_OP
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-1.5 rounded text-xs font-medium transition-colors font-mono uppercase tracking-wider ${
                    isActive
                      ? 'text-blueprint-600 bg-blueprint-50 font-semibold'
                      : 'text-slate-600 hover:text-slate-950 hover:bg-slate-100'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action Cluster */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded border border-transparent hover:border-slate-200 transition-colors"
              title="GitHub Profile"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded border border-transparent hover:border-slate-200 transition-colors"
              title="LinkedIn Profile"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={RESUME_PDF_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium font-mono uppercase tracking-wider text-white bg-slate-900 hover:bg-blueprint-600 rounded transition-all shadow-xs"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center space-x-2">
            <a
              href={RESUME_PDF_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-mono uppercase tracking-wider text-white bg-slate-900 rounded"
              aria-label="Download Resume"
            >
              <FileText className="w-3 h-3" />
              <span>CV</span>
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded border border-slate-200 text-slate-700 hover:bg-slate-100 focus:outline-hidden focus:ring-2 focus:ring-blueprint-600"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white/98 backdrop-blur-md px-4 pt-2 pb-6 space-y-2 shadow-lg">
          <div className="text-[11px] font-mono text-slate-400 uppercase tracking-widest px-2 pt-2 pb-1 border-b border-slate-100">
            Navigation Index
          </div>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-3 py-2 rounded text-sm font-mono text-slate-800 hover:bg-slate-50 hover:text-blueprint-600 transition-colors"
            >
              <span>{link.label}</span>
              <Terminal className="w-3.5 h-3.5 text-slate-400" />
            </a>
          ))}
          <div className="pt-4 border-t border-slate-100 flex items-center justify-between px-2">
            <div className="flex items-center space-x-3">
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-slate-600 hover:text-slate-900 rounded border border-slate-200"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-slate-600 hover:text-slate-900 rounded border border-slate-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
            <a
              href={RESUME_PDF_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-mono uppercase tracking-wider text-white bg-blueprint-600 rounded"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
