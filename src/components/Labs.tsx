import React from 'react';
import { Sparkles, Video, ShoppingBag, FlaskConical, ExternalLink } from 'lucide-react';
import { exploratoryProjects } from '../data/portfolioData';

export const Labs: React.FC = () => {
  const getIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Sparkles className="w-4 h-4 text-blueprint-600" />;
      case 1:
        return <Video className="w-4 h-4 text-blueprint-600" />;
      case 2:
        return <ShoppingBag className="w-4 h-4 text-blueprint-600" />;
      default:
        return <FlaskConical className="w-4 h-4 text-blueprint-600" />;
    }
  };

  return (
    <section className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-blueprint-600 font-semibold mb-2">
            <FlaskConical className="w-3.5 h-3.5" />
            <span>Currently Tinkering &amp; Exploring</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Also Building / Labs
          </h2>
          <p className="text-slate-600 mt-1 text-sm">
            Independent experiments spanning generative canvas graphics, AI workflow pipelines, and e-commerce architectures.
          </p>
        </div>

        {/* Explorations 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {exploratoryProjects.map((item, idx) => (
            <div
              key={item.title}
              className="p-5 rounded-lg border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-slate-300 transition-all duration-200 shadow-2xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="p-2 rounded bg-white border border-slate-200">
                    {getIcon(idx)}
                  </div>
                  <span className="text-[10px] font-mono text-blueprint-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-100 font-medium">
                    {item.tag}
                  </span>
                </div>

                <h3 className="font-heading font-semibold text-base text-slate-900 mb-2">
                  {item.title}
                </h3>

                <p className="text-slate-600 text-xs leading-relaxed">
                  {item.description}
                </p>
              </div>

              {item.url && (
                <div className="mt-4 pt-3 border-t border-slate-100">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-blueprint-600 hover:text-blueprint-800 hover:underline transition-colors"
                  >
                    <span>View Live Build</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
