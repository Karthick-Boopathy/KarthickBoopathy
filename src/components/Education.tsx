import React from 'react';
import { GraduationCap, Award, CheckCircle2 } from 'lucide-react';
import { educationList } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-blueprint-600 font-semibold mb-2">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Qualifications</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Education &amp; Credentials
          </h2>
          <p className="text-slate-600 mt-2 text-base">
            Formal automotive engineering foundation coupled with technical certifications.
          </p>
        </div>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {educationList.map((edu) => (
            <div
              key={edu.degree}
              className="bg-white rounded-lg border border-slate-200 p-6 flex flex-col justify-between shadow-2xs hover:border-slate-300 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="p-2.5 rounded bg-slate-50 border border-slate-200">
                    <GraduationCap className="w-5 h-5 text-blueprint-600" />
                  </div>
                  <span className="text-xs font-mono text-slate-500 bg-slate-100 px-2.5 py-1 rounded">
                    {edu.period}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-lg text-slate-900 mb-2 leading-snug">
                  {edu.degree}
                </h3>

                <p className="text-slate-600 text-sm mb-4">
                  {edu.institution}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400 uppercase">Performance</span>
                <span className="font-mono text-xs font-bold text-blueprint-700 bg-blue-50 px-2.5 py-0.5 rounded border border-blue-100">
                  {edu.grade}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Professional Certification Banner */}
        <div className="mt-8 p-5 rounded-lg border border-slate-200 bg-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-2xs">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded bg-amber-50 border border-amber-200 shrink-0">
              <Award className="w-5 h-5 text-amber-600" />
            </div>
            <div>
              <h4 className="font-heading font-semibold text-sm text-slate-900">
                Automotive Skill Development Council (ASDC)
              </h4>
              <p className="text-xs text-slate-500">
                Certified Automotive Technician — Rigorous practical evaluation &amp; technical viva at Anaamalais Toyota STEP.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded border border-emerald-200 shrink-0">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>CERTIFIED TECHNICIAN</span>
          </div>
        </div>
      </div>
    </section>
  );
};
