import React from 'react';
import { Cpu, Radio, Gamepad2, Wrench, Layers } from 'lucide-react';
import { selectedProjects } from '../data/portfolioData';

export const Projects: React.FC = () => {
  const getProjectIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Radio className="w-5 h-5 text-blueprint-600" />;
      case 1:
        return <Cpu className="w-5 h-5 text-blueprint-600" />;
      case 2:
        return <Gamepad2 className="w-5 h-5 text-blueprint-600" />;
      default:
        return <Wrench className="w-5 h-5 text-blueprint-600" />;
    }
  };

  return (
    <section id="projects" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-blueprint-600 font-semibold mb-2">
            <Layers className="w-3.5 h-3.5" />
            <span>Featured Engineering Work</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Selected Projects
          </h2>
          <p className="text-slate-600 mt-2 text-base">
            Autonomous vehicle sensing prototypes, analog hardware guidance systems, and physics flight simulation.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {selectedProjects.map((project, index) => (
            <div
              key={project.title}
              className="bg-white rounded-lg border border-slate-200 hover:border-blueprint-400 transition-all duration-200 p-6 flex flex-col justify-between shadow-2xs hover:shadow-md relative group"
            >
              {/* Corner fiducials */}
              <div className="absolute top-2 right-2 font-mono text-slate-300 text-xs select-none">+</div>
              <div className="absolute bottom-2 left-2 font-mono text-slate-300 text-xs select-none">+</div>

              <div>
                {/* Header metadata */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="p-2.5 rounded bg-slate-50 border border-slate-200">
                    {getProjectIcon(index)}
                  </div>
                  <span className="text-[11px] font-mono text-slate-500 bg-slate-100 px-2.5 py-1 rounded border border-slate-200">
                    {project.durationOrType}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-xl text-slate-900 mb-3 group-hover:text-blueprint-600 transition-colors">
                  {project.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Technical Specifications Table */}
                <div className="bg-slate-50 rounded border border-slate-100 p-3 mb-6 space-y-2">
                  <div className="text-[10px] font-mono uppercase text-slate-400 tracking-wider">
                    Engineering Specs
                  </div>
                  {project.specs.map((spec) => (
                    <div key={spec.label} className="flex items-center justify-between text-xs font-mono">
                      <span className="text-slate-500">{spec.label}:</span>
                      <span className="text-slate-800 font-semibold">{spec.val}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Architecture & Tech Stack */}
              <div>
                <div className="pt-4 border-t border-slate-100">
                  <div className="flex flex-wrap gap-1.5">
                    {project.architecture.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-blue-50/60 text-blueprint-700 border border-blue-100 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
