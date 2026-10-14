import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Target, 
  Eye, 
  HeartHandshake, 
  Compass, 
  ArrowRight, 
  CheckCircle2, 
  Building2,
  Users2,
  Scale
} from 'lucide-react';
import SEO from '../components/common/SEO';
import Breadcrumb from '../components/common/Breadcrumb';
import CTASection from '../components/common/CTASection';

export default function AboutPage() {
  const values = [
    {
      icon: Scale,
      title: 'Procedural Rigour & Authenticity',
      description: 'We do not take shortcuts. Every entity charter, partnership deed, and tax filing is cross-examined against current statutory guidelines before digital submission.',
    },
    {
      icon: ShieldCheck,
      title: 'Radical Fee Transparency',
      description: 'We believe trust is earned through clarity. Government statutory challans and stamp duties are kept distinct from our professional consultation fees.',
    },
    {
      icon: HeartHandshake,
      title: 'Empathy for First-Generation Founders',
      description: 'Starting a venture can be daunting. We replace confusing bureaucratic jargon with actionable clarity, guiding entrepreneurs with patient, step-by-step counsel.',
    },
    {
      icon: Compass,
      title: 'Long-Term Compliance Horizon',
      description: 'Obtaining a registration certificate is merely day one. We orient businesses on ongoing compliance obligations to protect them from statutory fines.',
    },
  ];

  return (
    <>
      <SEO
        title="About VpaarSetu | Our Mission, Vision & Values"
        description="Learn about VpaarSetu, an independent business services and compliance advisory brand built to help Indian entrepreneurs navigate corporate registrations with clarity."
      />

      <div className="bg-gradient-to-b from-white via-surface to-surface pt-6 pb-12 sm:pb-16 border-b border-slate-200/80">
        <div className="container-custom">
          <Breadcrumb items={[{ label: 'About Us' }]} />

          <div className="max-w-3xl space-y-4 mt-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-light text-primary text-xs font-bold uppercase tracking-wider">
              <span>Our Identity & Mission</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy tracking-tight">
              Building the Compliance Bridge for India’s Ambitious Enterprises
            </h1>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              VpaarSetu is an independent consulting brand dedicated to simplifying corporate formation, indirect taxation registrations, and statutory licensing across India.
            </p>
          </div>
        </div>
      </div>

      <div className="container-custom py-16 space-y-16">
        {/* Brand Story Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary">
              <span>The Brand Story</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight">
              Why We Founded VpaarSetu
            </h2>

            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              <p>
                India is experiencing unprecedented entrepreneurial momentum. From fast-growing ventures in Lucknow and Uttar Pradesh to tech startups in Bengaluru and specialty culinary brands across Delhi, more individuals are launching businesses than ever before.
              </p>
              <p>
                Yet, navigating the official paperwork—such as the Ministry of Corporate Affairs (MCA) SPICe+ system, Goods and Services Tax (GSTN) verification rules, Ministry of MSME classifications, and FSSAI FoSCoS licensing—often feels fragmented, opaque, and intimidating for first-time founders.
              </p>
              <p>
                Too often, business owners face misleading claims, aggressive sales calls, hidden government fee markups, or generic templates that cause filing rejections.
              </p>
              <p>
                <strong className="text-navy">VpaarSetu</strong> was established to change that experience. As a dedicated bridge between enterprise ambition and regulatory standards, we provide professional, ethical, and transparent guidance so entrepreneurs can focus on what they do best: building their business.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 bg-navy text-white rounded-3xl p-8 sm:p-10 border border-slate-800 shadow-premium space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-primary/20 rounded-full blur-2xl pointer-events-none" />

            <h3 className="text-xl font-bold text-white flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-accent" />
              <span>The Meaning of VpaarSetu</span>
            </h3>

            <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <p className="font-bold text-accent mb-1">Vpaar (व्यापार)</p>
                <p className="text-xs text-slate-300">
                  Trade, commercial exchange, and enterprise value creation that drives economic prosperity.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <p className="font-bold text-primary-subtle mb-1">Setu (सेतु)</p>
                <p className="text-xs text-slate-300">
                  A resilient, dependable bridge spanning the divide between statutory requirements and entrepreneurial execution.
                </p>
              </div>
            </div>

            <div className="pt-2 border-t border-white/10 text-xs text-slate-400">
              Independent consulting firm operating across all states and Union Territories in India.
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-subtle space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-primary-light text-primary flex items-center justify-center">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-navy">Our Mission</h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              To empower entrepreneurs, MSMEs, and growing companies in India with straightforward, ethical, and high-accuracy business registration and compliance facilitation—eliminating procedural anxiety and enabling seamless formal commerce.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-subtle space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-accent-light text-accent flex items-center justify-center">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-navy">Our Vision</h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              To become India's most respected compliance advisory brand, recognized not for aggressive automated volume, but for deep advisory care, transparent practices, and enduring partnerships with the ventures we support.
            </p>
          </div>
        </section>

        {/* Values & Approach */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy">
              Our Core Values & Operating Approach
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              The foundational standards that guide every consultation, document review, and portal submission.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div
                  key={i}
                  className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-subtle hover:border-primary/20 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-slate-100 text-primary flex items-center justify-center mb-5">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-navy mb-2.5">
                      {v.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {v.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* How VpaarSetu Supports Businesses */}
        <section className="bg-surface rounded-3xl p-8 sm:p-12 border border-slate-200/80 space-y-6">
          <div className="max-w-2xl space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy">
              How VpaarSetu Supports Your Journey
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              We provide structured support across all key milestones of your commercial lifecycle:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="bg-white rounded-2xl p-6 border border-slate-200/70 space-y-3">
              <div className="text-accent font-bold text-xs uppercase tracking-wider">Milestone 1</div>
              <h3 className="font-bold text-base text-navy">Pre-Incorporation Advisory</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Evaluating co-founder agreements, naming availability against trademark databases, and selecting optimal share capital structures.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200/70 space-y-3">
              <div className="text-primary font-bold text-xs uppercase tracking-wider">Milestone 2</div>
              <h3 className="font-bold text-base text-navy">Statutory Filing & Licences</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Coordinating digital signatures (DSC), drafting MoA/AoA/LLP agreements, submitting SPICe+ forms, and securing GST & FSSAI certificates.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200/70 space-y-3">
              <div className="text-emerald-700 font-bold text-xs uppercase tracking-wider">Milestone 3</div>
              <h3 className="font-bold text-base text-navy">Operational Onboarding</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Facilitating corporate bank account documentation, INC-20A business commencement filing, and Udyam MSME priority registration.
              </p>
            </div>
          </div>
        </section>

        {/* Multidisciplinary Team Structure Notice */}
        <section className="bg-white rounded-3xl p-8 border border-slate-200/80 text-center max-w-3xl mx-auto space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-primary-light text-primary flex items-center justify-center mx-auto">
            <Users2 className="w-6 h-6" />
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-navy">
            Our Multidisciplinary Consulting Network
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            Our casework is managed by a dedicated network of corporate compliance professionals, legal practitioners, and secretarial associates across India. We believe in letting our rigorous output speak for itself rather than publishing fabricated executive bios.
          </p>
        </section>
      </div>

      {/* CTA to Explore Services */}
      <CTASection
        title="Ready to Start Your Journey with VpaarSetu?"
        description="Explore our complete catalog of business registrations or consult directly with our compliance advisory desk."
        primaryButtonText="Explore All Services"
      />
    </>
  );
}
