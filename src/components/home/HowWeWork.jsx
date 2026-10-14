import React from 'react';
import { MessagesSquare, FileSearch, Send, Award } from 'lucide-react';

export default function HowWeWork() {
  const steps = [
    {
      step: '01',
      icon: MessagesSquare,
      title: 'Discovery & Entity Advisory',
      description: 'We listen to your commercial objectives, co-founder dynamics, and funding vision to pinpoint the legally appropriate structure.',
    },
    {
      step: '02',
      icon: FileSearch,
      title: 'Pre-Filing Document Audit',
      description: 'Our team verifies promoter KYC, premises utility bills, NOC wording, and trademark conflicts before any portal fee is spent.',
    },
    {
      step: '03',
      icon: Send,
      title: 'Direct Portal Submission',
      description: 'We draft statutory charters (MoA, AoA, Deeds) and submit applications directly to official MCA, GSTN, Udyam, or FoSCoS servers.',
    },
    {
      step: '04',
      icon: Award,
      title: 'Certificate Handover & Next Steps',
      description: 'You receive your verified registration certificate, entity PAN/TAN, and a clear compliance roadmap for bank account setup and tax duties.',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-surface border-b border-slate-200/80">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-light text-primary text-xs font-bold uppercase tracking-wider">
            <span>Engagement Process</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight">
            How We Work With You
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            A structured, four-phase engagement designed to eliminate confusion, avoid portal rejections, and save you valuable time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-3xl p-7 border border-slate-200/80 shadow-subtle hover:shadow-premium hover:border-primary/20 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-black text-slate-300 group-hover:text-primary transition-colors">
                      {item.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-surface group-hover:bg-primary-light text-navy group-hover:text-primary flex items-center justify-center transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-navy mb-2.5 leading-snug group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-xs font-semibold text-slate-400">
                  <span>Phase {index + 1} of 4</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
