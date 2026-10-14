import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, MessageSquare, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import Breadcrumb from '../common/Breadcrumb';
import Badge from '../common/Badge';
import { getWhatsAppLink } from '../../config/siteConfig';

export default function ServiceHero({ service }) {
  const whatsappUrl = getWhatsAppLink(service.name);

  return (
    <section className="bg-gradient-to-b from-white via-surface to-surface pt-6 pb-12 sm:pb-16 border-b border-slate-200/80">
      <div className="container-custom">
        <Breadcrumb
          items={[
            { label: 'Services', to: '/services' },
            { label: service.name },
          ]}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mt-4">
          <div className="lg:col-span-8 space-y-5">
            <div className="flex flex-wrap items-center gap-2.5">
              <Badge variant="primary">{service.category}</Badge>
              <Badge variant="accent">{service.badge}</Badge>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-navy leading-tight">
              {service.name}
            </h1>

            <p className="text-lg sm:text-xl text-primary font-medium leading-snug">
              {service.tagline}
            </p>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed pt-2">
              {service.overview}
            </p>

            {/* CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-4">
              <Link
                to="/contact"
                state={{ preselectedService: service.name }}
                className="btn-primary text-base px-7 py-3.5 shadow-sm"
              >
                <span>Enquire Now</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-base px-6 py-3.5"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Quick Authority & Portal Card */}
          <div className="lg:col-span-4 bg-white rounded-2xl border border-slate-200 p-6 shadow-premium space-y-4">
            <div className="flex items-center gap-2.5 pb-3 border-b border-slate-100">
              <ShieldCheck className="w-5 h-5 text-accent" />
              <h2 className="text-sm font-bold uppercase tracking-wider text-navy">
                Statutory Framework
              </h2>
            </div>

            <div className="space-y-3 text-xs sm:text-sm">
              <div>
                <p className="text-slate-500 text-xs">Governing Regulatory Body:</p>
                <p className="font-semibold text-navy mt-0.5">{service.governingAuthority}</p>
              </div>

              {service.officialPortal && (
                <div>
                  <p className="text-slate-500 text-xs">Statutory Application Portal:</p>
                  <a
                    href={service.officialPortal}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-medium text-primary hover:text-primary-hover mt-0.5 group"
                  >
                    <span>{service.portalName || 'Official Government Portal'}</span>
                    <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              )}

              <div className="pt-2 border-t border-slate-100">
                <p className="text-[11px] text-slate-500 leading-relaxed">
                  VpaarSetu facilitates documentation review, classification, and electronic submission. Registration certificates are issued directly by the statutory body.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-accent-dark bg-accent-light px-3 py-2 rounded-xl">
                <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                <span>100% Digital PAN-India Assistance</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
