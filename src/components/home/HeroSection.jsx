import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  MessageSquare, 
  ShieldCheck, 
  CheckCircle, 
  Building, 
  ReceiptText, 
  FileCheck,
  Building2,
  Sparkles
} from 'lucide-react';
import { siteConfig, getWhatsAppLink } from '../../config/siteConfig';

export default function HeroSection() {
  const whatsappUrl = getWhatsAppLink();

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-16 lg:pb-24 bg-gradient-to-b from-white via-surface to-surface">
      {/* Decorative gradient glow elements */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Headline & Copy */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-light border border-primary/20 text-primary text-xs sm:text-sm font-semibold">
              <Sparkles className="w-4 h-4 text-primary" />
              <span>India Business Registration & Compliance Facilitation</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-navy leading-[1.12]">
              Your Business.{' '}
              <span className="text-primary block sm:inline">Your Vision.</span>{' '}
              <span className="bg-gradient-to-r from-navy via-primary to-accent bg-clip-text text-transparent block">
                Our Guidance.
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl">
              From business registration to essential licences and compliance, VpaarSetu helps entrepreneurs navigate the paperwork and take the next step with confidence.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-4">
              <Link
                to="/services"
                className="btn-primary text-base px-7 py-4 shadow-md shadow-primary/20 hover:shadow-primary/30"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-5 h-5" />
              </Link>

              <Link
                to="/contact"
                className="btn-secondary text-base px-7 py-4"
              >
                <span>Talk to Us</span>
              </Link>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-sm px-4 py-4 sm:hidden"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Trust highlights without fake metrics */}
            <div className="pt-6 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs sm:text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-accent shrink-0" />
                <span className="font-medium text-navy">Zero Hidden Fees</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-accent shrink-0" />
                <span className="font-medium text-navy">100% Digital Workflow</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-accent shrink-0" />
                <span className="font-medium text-navy">Pan-India Coverage</span>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Visual Card */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-premium relative z-10">
                <div className="flex items-center justify-between pb-5 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <img
                      src="/logo.jpeg"
                      alt="VypaarSetu"
                      className="w-11 h-11 rounded-xl object-contain bg-white border border-slate-200 p-0.5 shadow-xs"
                    />
                    <div>
                      <h3 className="font-bold text-sm text-navy">Registration Roadmap</h3>
                      <p className="text-xs text-slate-400">Statutory Readiness Index</p>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-accent bg-accent-light px-2.5 py-1 rounded-full border border-accent/20">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Verified Portals
                  </span>
                </div>

                {/* Simulated service milestones */}
                <div className="py-5 space-y-3.5">
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-primary-light text-primary flex items-center justify-center">
                        <Building className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-navy">Entity Incorporation</p>
                        <p className="text-[11px] text-slate-500">Pvt Ltd / OPC / LLP / Partnership</p>
                      </div>
                    </div>
                    <span className="text-[11px] font-semibold text-primary bg-primary-light px-2 py-0.5 rounded">
                      MCA Portal
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                        <ReceiptText className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-navy">GSTIN Allocation</p>
                        <p className="text-[11px] text-slate-500">Goods & Services Tax Registration</p>
                      </div>
                    </div>
                    <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                      GSTN Active
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                        <Building2 className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-navy">MSME Udyam Certification</p>
                        <p className="text-[11px] text-slate-500">Priority Credit & Delayed Payment Law</p>
                      </div>
                    </div>
                    <span className="text-[11px] font-semibold text-blue-700 bg-blue-100 px-2 py-0.5 rounded">
                      Permanent ID
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center">
                        <FileCheck className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-navy">Sectoral Licences</p>
                        <p className="text-[11px] text-slate-500">FSSAI FoSCoS Food Safety Licence</p>
                      </div>
                    </div>
                    <span className="text-[11px] font-semibold text-amber-700 bg-amber-100 px-2 py-0.5 rounded">
                      14-Digit Code
                    </span>
                  </div>
                </div>

                {/* Bottom Card Summary */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span>Pan-India Regulatory Filing</span>
                  <Link to="/contact" className="font-semibold text-primary hover:underline flex items-center gap-1">
                    <span>Ask a Question</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>

              {/* Decorative floating badge */}
              <div className="hidden sm:flex items-center gap-2.5 absolute -bottom-4 -left-6 bg-navy text-white px-4 py-2.5 rounded-2xl shadow-premium z-20 border border-slate-700">
                <ShieldCheck className="w-5 h-5 text-accent shrink-0" />
                <div className="text-left">
                  <p className="text-xs font-bold text-white">Direct Advisory</p>
                  <p className="text-[10px] text-slate-300">No Automated Call Centers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
