import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, PhoneCall, ArrowRight, ShieldCheck, Clock } from 'lucide-react';
import { siteConfig, getWhatsAppLink } from '../../config/siteConfig';

export default function CTASection({
  title = "Ready to Register Your Business the Right Way?",
  description = "Get expert clarity on legal structures, document readiness, and compliance requirements without hidden jargon.",
  serviceName = "",
  primaryButtonText = "Talk to a Specialist",
  showWhatsApp = true,
  className = "",
}) {
  const whatsappUrl = getWhatsAppLink(serviceName);

  return (
    <section className={`relative overflow-hidden my-12 sm:my-16 ${className}`}>
      <div className="container-custom">
        <div className="relative rounded-3xl bg-gradient-to-br from-navy via-navy-light to-navy p-8 sm:p-12 lg:p-16 text-white shadow-premium overflow-hidden border border-slate-800">
          {/* Subtle background visual accents */}
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary/20 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-accent/20 blur-3xl pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-accent-light text-xs sm:text-sm font-medium backdrop-blur-sm mb-6 border border-white/10">
              <ShieldCheck className="w-4 h-4 text-accent" />
              <span>Transparent Advisory • Pan-India Regulatory Assistance</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white mb-4 leading-tight">
              {title}
            </h2>

            <p className="text-slate-300 text-base sm:text-lg mb-8 leading-relaxed max-w-2xl">
              {description}
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-4 mb-8">
              <Link
                to="/contact"
                className="btn-accent text-base px-7 py-3.5 shadow-lg shadow-accent/20 hover:shadow-accent/30"
              >
                <span>{primaryButtonText}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              {showWhatsApp && (
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp text-base px-6 py-3.5"
                >
                  <MessageSquare className="w-4 h-4 fill-white" />
                  <span>Chat on WhatsApp</span>
                </a>
              )}

              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/15 transition-all text-sm sm:text-base"
              >
                <PhoneCall className="w-4 h-4 text-slate-300" />
                <span>{siteConfig.phone}</span>
              </a>
            </div>

            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm text-slate-400">
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-accent" />
                <span>Operating Hours: {siteConfig.workingHours}</span>
              </span>
              <span>•</span>
              <span>No spam, no aggressive sales calls</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
