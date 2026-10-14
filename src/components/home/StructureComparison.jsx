import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Table, Check, Info } from 'lucide-react';
import { entityComparisonData } from '../../data/comparisons';

export default function StructureComparison({ isEmbedded = false }) {
  const [activeTab, setActiveTab] = useState('pvtltd');

  const structures = [
    { key: 'pvtltd', label: 'Private Limited Company', path: '/private-limited-company-registration', badge: 'Investor Favorite' },
    { key: 'opc', label: 'One Person Company (OPC)', path: '/opc-registration', badge: 'Solo Founders' },
    { key: 'llp', label: 'Limited Liability Partnership', path: '/llp-registration', badge: 'Low Compliance' },
    { key: 'partnership', label: 'Partnership Firm', path: '/partnership-firm-registration', badge: 'Traditional Trade' },
  ];

  return (
    <section className={`py-16 sm:py-24 ${isEmbedded ? 'bg-transparent' : 'bg-white border-b border-slate-200/80'}`}>
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-light text-primary text-xs font-bold uppercase tracking-wider">
            <Table className="w-3.5 h-3.5" />
            <span>Comparative Legal Analysis</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight">
            Business Registration Structure Comparison
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Not sure which legal entity best protects your assets and aligns with your growth plans? Compare key statutory provisions under Indian law.
          </p>
        </div>

        {/* Mobile / Tablet Friendly Card-Selector View */}
        <div className="block lg:hidden space-y-6">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
            {structures.map((s) => (
              <button
                key={s.key}
                type="button"
                onClick={() => setActiveTab(s.key)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                  activeTab === s.key
                    ? 'bg-navy text-white shadow-sm'
                    : 'bg-surface text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>

          {/* Active entity mobile card */}
          {(() => {
            const currentStructure = structures.find((s) => s.key === activeTab) || structures[0];
            return (
              <div className="bg-surface rounded-3xl p-6 border border-slate-200/90 shadow-subtle space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full">
                      {currentStructure.badge}
                    </span>
                    <h3 className="text-lg font-bold text-navy mt-1.5">
                      {currentStructure.label}
                    </h3>
                  </div>
                  <Link
                    to={currentStructure.path}
                    className="btn-primary text-xs px-3.5 py-2"
                  >
                    <span>View Page</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>

                <div className="space-y-3 divide-y divide-slate-100 text-xs sm:text-sm">
                  {entityComparisonData.rows.map((row, idx) => (
                    <div key={idx} className="pt-2.5 first:pt-0">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                        {row.criterion}
                      </p>
                      <p className="font-semibold text-navy mt-0.5">
                        {row[activeTab]}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })()}
        </div>

        {/* Desktop Full Comparison Table */}
        <div className="hidden lg:block bg-white rounded-3xl border border-slate-200/90 shadow-premium overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/80 border-b border-slate-200 text-xs uppercase tracking-wider text-slate-600">
                  <th className="py-5 px-6 font-bold w-1/4">Parameter</th>
                  <th className="py-5 px-6 font-bold w-1/4 bg-primary-light/40 text-primary border-x border-primary/20">
                    <div className="flex items-center justify-between">
                      <span>Private Limited</span>
                      <span className="text-[10px] bg-primary text-white px-2 py-0.5 rounded font-bold">Recommended for Startups</span>
                    </div>
                  </th>
                  <th className="py-5 px-6 font-bold w-1/6">One Person Co. (OPC)</th>
                  <th className="py-5 px-6 font-bold w-1/6">LLP</th>
                  <th className="py-5 px-6 font-bold w-1/6">Partnership Firm</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm text-slate-700">
                {entityComparisonData.rows.map((row, index) => (
                  <tr
                    key={index}
                    className="hover:bg-slate-50/60 transition-colors"
                  >
                    <td className="py-4 px-6 font-bold text-navy text-xs sm:text-sm">
                      {row.criterion}
                    </td>
                    <td className="py-4 px-6 font-semibold text-navy bg-primary-light/20 border-x border-primary/10">
                      {row.pvtltd}
                    </td>
                    <td className="py-4 px-6 text-slate-600">
                      {row.opc}
                    </td>
                    <td className="py-4 px-6 text-slate-600">
                      {row.llp}
                    </td>
                    <td className="py-4 px-6 text-slate-600">
                      {row.partnership}
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="bg-slate-50 border-t border-slate-200 text-xs">
                  <td className="py-4 px-6 font-bold text-slate-400 uppercase">
                    Action
                  </td>
                  <td className="py-4 px-6 bg-primary-light/30 border-x border-primary/10">
                    <Link
                      to="/private-limited-company-registration"
                      className="font-bold text-primary hover:text-primary-hover flex items-center gap-1.5"
                    >
                      <span>Explore Pvt Ltd</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </td>
                  <td className="py-4 px-6">
                    <Link
                      to="/opc-registration"
                      className="font-bold text-slate-700 hover:text-primary flex items-center gap-1.5"
                    >
                      <span>Explore OPC</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </td>
                  <td className="py-4 px-6">
                    <Link
                      to="/llp-registration"
                      className="font-bold text-slate-700 hover:text-primary flex items-center gap-1.5"
                    >
                      <span>Explore LLP</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </td>
                  <td className="py-4 px-6">
                    <Link
                      to="/partnership-firm-registration"
                      className="font-bold text-slate-700 hover:text-primary flex items-center gap-1.5"
                    >
                      <span>Explore Partnership</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center">
          <Link
            to="/company-registration"
            className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline"
          >
            <Info className="w-4 h-4" />
            <span>Read our complete guide to Company Registration in India</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
