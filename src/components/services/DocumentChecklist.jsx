import React from 'react';
import { FileText, Check, Info } from 'lucide-react';

export default function DocumentChecklist({ documents = [] }) {
  if (!documents || documents.length === 0) return null;

  return (
    <section className="py-10">
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-subtle space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary-light text-primary flex items-center justify-center">
            <FileText className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-navy">
              Required Documents Checklist
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Clear list of records needed for verification and electronic filing
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {documents.map((group, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-slate-200 bg-surface/60 p-5 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-sm font-bold text-navy mb-3 pb-2 border-b border-slate-200 flex items-center gap-2">
                  <span className="w-1.5 h-4 bg-primary rounded-full shrink-0" />
                  <span>{group.category}</span>
                </h3>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
                  {group.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-accent-light text-accent-dark flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-100 flex items-start gap-3 text-xs text-blue-900 leading-relaxed">
          <Info className="w-4 h-4 text-primary shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold text-primary">Document Preparation Tip: </span>
            Ensure electricity or utility bills are under 60 days old with the owner’s name clearly legible. Aadhaar cards must be linked to an active mobile number to receive authentication OTPs promptly.
          </div>
        </div>
      </div>
    </section>
  );
}
