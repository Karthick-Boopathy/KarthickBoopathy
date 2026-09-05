import React from 'react';
import { Briefcase, ExternalLink, Instagram, Calendar } from 'lucide-react';
import { experiences } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-blueprint-600 font-semibold mb-2">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Chronological Track</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Professional &amp; Field Experience
          </h2>
          <p className="text-slate-600 mt-2 text-base">
            Reverse-chronological progression across technical enterprise, software development, ADAS engineering, and automotive systems.
          </p>
        </div>

        {/* Timeline Sequence Container */}
        <div className="relative border-l-2 border-slate-200 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative group">
              {/* Chronological Sequence Marker */}
              <div className="absolute -left-[35px] sm:-left-[51px] top-0 w-8 h-8 sm:w-9 sm:h-9 rounded border-2 border-slate-300 group-hover:border-blueprint-600 bg-white flex items-center justify-center font-mono text-xs font-bold text-slate-700 group-hover:text-blueprint-600 transition-colors shadow-2xs">
                {exp.number}
              </div>

              {/* Experience Card */}
              <div className="p-6 sm:p-7 rounded-lg border border-slate-200 bg-white hover:border-slate-300 transition-all duration-200 shadow-2xs hover:shadow-xs">
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-4 mb-4 border-b border-slate-100">
                  <div>
                    <h3 className="font-heading font-bold text-xl text-slate-900">
                      {exp.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 mt-1">
                      <span className="font-semibold text-blueprint-700 text-sm">
                        {exp.organization}
                      </span>
                      {exp.website && (
                        <a
                          href={exp.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-mono text-blueprint-600 hover:underline px-2 py-0.5 rounded bg-blue-50"
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
                          className="inline-flex items-center gap-1 text-xs font-mono text-slate-600 hover:text-pink-600 px-2 py-0.5 rounded bg-slate-100 hover:bg-pink-50"
                        >
                          <Instagram className="w-3 h-3" />
                          <span>Instagram</span>
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-500 bg-slate-50 px-2.5 py-1 rounded border border-slate-200 shrink-0">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Bullets (Verbatim content) */}
                <ul className="space-y-2.5">
                  {exp.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-slate-700 text-sm leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-blueprint-600 mt-2 shrink-0"></span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech & Domain Badges */}
                <div className="mt-5 pt-4 border-t border-slate-100 flex flex-wrap items-center gap-1.5">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[11px] font-mono text-slate-600 bg-slate-100 border border-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
