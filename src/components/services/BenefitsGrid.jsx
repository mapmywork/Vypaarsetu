import React from 'react';
import { Sparkles, AlertCircle } from 'lucide-react';

export default function BenefitsGrid({ benefits = [], considerations = [] }) {
  return (
    <section className="py-10">
      <div className="space-y-8">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl bg-accent-light text-accent flex items-center justify-center">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-navy">
                Key Benefits & Strategic Advantages
              </h2>
              <p className="text-xs sm:text-sm text-slate-500">
                How this registration empowers your operational scale, banking, and legal protection
              </p>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-subtle hover:shadow-premium hover:border-primary/20 transition-all space-y-2"
            >
              <h3 className="text-base sm:text-lg font-bold text-navy flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                <span>{benefit.title}</span>
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed pl-4">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Important Considerations Box */}
        {considerations && considerations.length > 0 && (
          <div className="rounded-2xl bg-amber-50/70 border border-amber-200/80 p-6 space-y-3">
            <div className="flex items-center gap-2.5 text-amber-900 font-bold text-sm">
              <AlertCircle className="w-5 h-5 text-amber-600 shrink-0" />
              <span>Important Compliance Considerations & Duties</span>
            </div>
            <ul className="space-y-2 pl-7 list-disc text-xs sm:text-sm text-amber-950/80 leading-relaxed">
              {considerations.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
