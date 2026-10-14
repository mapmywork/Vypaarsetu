import React from 'react';
import { CheckCircle2, Users } from 'lucide-react';

export default function EligibilitySection({ whoIsItFor = [] }) {
  if (!whoIsItFor || whoIsItFor.length === 0) return null;

  return (
    <section className="py-10">
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-subtle">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-primary-light text-primary flex items-center justify-center">
            <Users className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-navy">
              Who This Service Is For
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Criteria, thresholds, and operational scenarios that mandate or benefit from this registration
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {whoIsItFor.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-3 p-4 rounded-2xl bg-surface border border-slate-200/60 hover:border-slate-300 transition-colors"
            >
              <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
              <p className="text-sm text-slate-700 leading-relaxed">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
