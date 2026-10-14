import React from 'react';
import { Compass, FileSearch, Scale, CheckCircle2 } from 'lucide-react';

export default function BrandIntro() {
  const pillars = [
    {
      icon: Compass,
      title: 'Structural Direction',
      description: 'We help you evaluate shareholder liability, capitalization, and investor requirements before choosing an entity type.',
    },
    {
      icon: FileSearch,
      title: 'Document Scrutiny',
      description: 'Pre-verifying utility bills, lease NOCs, and director proofs to prevent delays and queries from Registrar officers.',
    },
    {
      icon: Scale,
      title: 'Statutory Transparency',
      description: 'Clear segregation between statutory government fees and our professional consulting charges on every engagement.',
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-white border-y border-slate-200/80">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider">
            <span>About VpaarSetu</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight">
            Building the Bridge Between Your Commercial Ambition and Regulatory Compliance
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            In Hindi, <span className="font-semibold text-navy">Vpaar</span> signifies commerce and enterprise, while <span className="font-semibold text-primary">Setu</span> represents a dependable bridge. VpaarSetu exists to demystify complex corporate legislation, tax registrations, and statutory licensing for Indian founders so you can build with peace of mind.
          </p>
        </div>

        {/* Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-surface border border-slate-200/80 hover:border-primary/30 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white text-primary flex items-center justify-center shadow-subtle mb-6 border border-slate-200/60">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-navy mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
