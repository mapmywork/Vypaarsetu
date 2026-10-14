import React from 'react';
import { Route, CheckCircle } from 'lucide-react';

export default function ProcessTimeline({ steps = [] }) {
  if (!steps || steps.length === 0) return null;

  return (
    <section className="py-10">
      <div className="space-y-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-accent-light text-accent flex items-center justify-center">
            <Route className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-navy">
              Step-by-Step Registration Workflow
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              How VpaarSetu coordinates with you from initial consultation to final statutory approval
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-subtle flex flex-col justify-between relative group hover:border-primary/40 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-9 h-9 rounded-xl bg-primary-light text-primary font-extrabold text-sm flex items-center justify-center">
                    0{step.step || idx + 1}
                  </div>
                  {idx === steps.length - 1 && (
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-accent bg-accent-light px-2 py-0.5 rounded-full">
                      <CheckCircle className="w-3 h-3" />
                      Grant
                    </span>
                  )}
                </div>

                <h3 className="text-sm font-bold text-navy mb-2 leading-snug group-hover:text-primary transition-colors">
                  {step.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-semibold text-slate-400">
                Phase {idx + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
