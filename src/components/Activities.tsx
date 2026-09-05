import React from 'react';
import { Presentation, Users, Trophy, Languages, Heart, Sparkles } from 'lucide-react';
import { eventsAndActivities, personalProfile } from '../data/portfolioData';

export const Activities: React.FC = () => {
  const getActivityIcon = (type: string) => {
    if (type.includes('Conference')) return <Presentation className="w-4 h-4 text-blueprint-600" />;
    if (type.includes('Community')) return <Users className="w-4 h-4 text-blueprint-600" />;
    return <Trophy className="w-4 h-4 text-blueprint-600" />;
  };

  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-blueprint-600 font-semibold mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Contributions &amp; Personal Profile</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Events, Leadership &amp; Personal Dimensions
          </h2>
          <p className="text-slate-600 mt-2 text-base">
            Technical symposium presentations, community initiatives, language proficiencies, and personal pursuits.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Events & Activities (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="font-mono text-xs uppercase tracking-wider text-slate-500 font-bold mb-2">
              Key Events &amp; Initiatives
            </h3>
            {eventsAndActivities.map((event) => (
              <div
                key={event.title}
                className="p-5 rounded-lg border border-slate-200 bg-slate-50/50 hover:bg-white transition-colors shadow-2xs flex items-start gap-4"
              >
                <div className="p-2.5 rounded bg-white border border-slate-200 shrink-0">
                  {getActivityIcon(event.type)}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-mono text-blueprint-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-100 font-medium">
                      {event.type}
                    </span>
                  </div>
                  <h4 className="font-heading font-semibold text-slate-900 text-base">
                    {event.title}
                  </h4>
                  <p className="text-slate-600 text-sm mt-1 leading-relaxed">
                    {event.context}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Languages & Interests (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Languages Card */}
            <div className="p-6 rounded-lg border border-slate-200 bg-white shadow-2xs">
              <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-slate-100">
                <Languages className="w-4 h-4 text-blueprint-600" />
                <h3 className="font-heading font-semibold text-base text-slate-900">
                  Languages
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {personalProfile.languages.map((lang) => (
                  <div
                    key={lang}
                    className="px-3 py-1.5 rounded bg-slate-50 border border-slate-200 text-xs font-mono text-slate-800 font-medium"
                  >
                    {lang} (Fluent)
                  </div>
                ))}
              </div>
            </div>

            {/* Interests Card */}
            <div className="p-6 rounded-lg border border-slate-200 bg-white shadow-2xs">
              <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-slate-100">
                <Heart className="w-4 h-4 text-blueprint-600" />
                <h3 className="font-heading font-semibold text-base text-slate-900">
                  Interests &amp; Pursuits
                </h3>
              </div>
              <ul className="space-y-2.5">
                {personalProfile.interests.map((interest) => (
                  <li key={interest} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-blueprint-600"></span>
                    <span>{interest}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
