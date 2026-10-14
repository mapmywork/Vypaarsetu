import React from 'react';
import { Link } from 'react-router-dom';
import { HelpCircle, ArrowRight } from 'lucide-react';
import { homeFAQs } from '../../data/faqs';
import FAQAccordion from '../common/FAQAccordion';

export default function HomeFAQ() {
  return (
    <section className="py-16 sm:py-24 bg-surface">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-5 lg:sticky lg:top-28">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-light text-primary text-xs font-bold uppercase tracking-wider">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Common Questions</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight leading-tight">
              Frequently Asked Questions
            </h2>

            <p className="text-slate-600 text-base leading-relaxed">
              Clear answers regarding how business registration, compliance facilitation, and government portal submissions work in India.
            </p>

            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-subtle space-y-3">
              <h3 className="font-bold text-sm text-navy">
                Have a specific question about your business?
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Every business scenario is unique. Reach out to our consulting team for personalized guidance without sales pressure.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-primary-hover"
              >
                <span>Ask our team directly</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7">
            <FAQAccordion items={homeFAQs} />
          </div>
        </div>
      </div>
    </section>
  );
}
