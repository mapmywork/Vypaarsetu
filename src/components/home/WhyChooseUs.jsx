import React from 'react';
import { 
  ShieldCheck, 
  HelpCircle, 
  FileCheck2, 
  UserCheck, 
  Zap, 
  Lock 
} from 'lucide-react';

export default function WhyChooseUs() {
  const points = [
    {
      icon: ShieldCheck,
      title: 'No False Guarantees or Timelines',
      description: 'We respect statutory reality. Government portal approvals depend on Registrar scrutiny. We guarantee thorough, accurate document preparation rather than making impossible "2-hour incorporation" promises.',
    },
    {
      icon: FileCheck2,
      title: 'Transparent Fee Separation',
      description: 'You will always see statutory government fees (challans, stamp duties, portal fees) clearly separated from our professional facilitation charges. Zero surprise invoices.',
    },
    {
      icon: HelpCircle,
      title: 'Plain-Language Advisory',
      description: 'Indian corporate law has extensive nuances. We explain terms like authorized capital, designated partners, HSN codes, and FSMS plans in straightforward, actionable language.',
    },
    {
      icon: UserCheck,
      title: 'Dedicated Single Point of Contact',
      description: 'You speak with an assigned compliance specialist who tracks your file from name reservation to final certificate handover, not an impersonal IVR call center.',
    },
    {
      icon: Lock,
      title: 'Data Confidentiality & DSC Security',
      description: 'Personal KYC records, bank statements, and digital signature tokens (DSC) are processed strictly for authorized portal submissions under stringent security protocols.',
    },
    {
      icon: Zap,
      title: 'Post-Registration Readiness',
      description: 'Our assistance does not vanish once the certificate arrives. We guide you on mandatory next steps like INC-20A business commencement, GST return calendars, and bank KYC.',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-light text-accent-dark text-xs font-bold uppercase tracking-wider">
            <span>The VpaarSetu Standard</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight">
            Why Discerning Founders Choose VpaarSetu
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            In an industry crowded with misleading guarantees and hidden costs, we stand for integrity, procedural diligence, and authentic legal craftsmanship.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {points.map((point, index) => {
            const Icon = point.icon;
            return (
              <div
                key={index}
                className="bg-surface rounded-3xl p-7 border border-slate-200/70 hover:border-primary/20 hover:shadow-subtle transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white text-primary flex items-center justify-center shadow-subtle mb-6 border border-slate-200/60">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-navy mb-3">
                    {point.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {point.description}
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
