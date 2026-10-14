import React from 'react';
import { Link } from 'react-router-dom';
import { 
  PhoneCall, 
  Mail, 
  MapPin, 
  Clock, 
  ExternalLink, 
  ShieldCheck, 
  ArrowRight,
  MessageSquare
} from 'lucide-react';
import { servicesData } from '../../data/services';
import { siteConfig, getWhatsAppLink } from '../../config/siteConfig';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="container-custom">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-5">
            <Link to="/" className="inline-block group" aria-label="VypaarSetu Home">
              <div className="bg-white p-3 sm:p-3.5 rounded-2xl inline-flex items-center shadow-sm group-hover:opacity-95 transition-opacity">
                <img
                  src="/logo.jpeg"
                  alt="VypaarSetu - Your Compliance Partner"
                  className="h-16 sm:h-20 w-auto object-contain"
                />
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed">
              {siteConfig.description}
            </p>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#25D366]/15 hover:bg-[#25D366]/25 text-[#25D366] text-xs font-semibold border border-[#25D366]/30 transition-colors"
              >
                <MessageSquare className="w-4 h-4 fill-[#25D366]" />
                <span>Quick WhatsApp Query</span>
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-semibold border border-white/10 transition-colors"
              >
                <span>Request Callback</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Business Services Links */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-white/90">
              Registration & Licences
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-sm">
              {servicesData.map((service) => (
                <li key={service.id}>
                  <Link
                    to={service.path}
                    className="text-slate-400 hover:text-white transition-colors hover:translate-x-0.5 inline-flex items-center gap-1.5 py-1"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent/60"></span>
                    <span>{service.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-white/90">
              Get in Touch
            </h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <PhoneCall className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <div>
                  <a
                    href={`tel:${siteConfig.phoneRaw}`}
                    className="font-medium text-white hover:text-accent transition-colors"
                  >
                    {siteConfig.phone}
                  </a>
                  <p className="text-xs text-slate-400 mt-0.5">Direct Consulting Helpline</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <div>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-slate-300 hover:text-white transition-colors break-all"
                  >
                    {siteConfig.email}
                  </a>
                  <p className="text-xs text-slate-400 mt-0.5">Written enquiries & documentation</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span className="text-xs leading-relaxed">
                  {siteConfig.workingHours}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span className="text-xs leading-relaxed">
                  {siteConfig.headquarters}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Official Statutory Portal References */}
        <div className="py-6 border-b border-slate-800/80">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">
              <ExternalLink className="w-4 h-4 text-accent" />
              <span>Official Government Regulatory Portals</span>
            </div>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-400">
              {siteConfig.officialPortals.map((portal) => (
                <a
                  key={portal.name}
                  href={portal.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors underline decoration-slate-600 underline-offset-4 flex items-center gap-1"
                >
                  <span>{portal.name}</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Legal Disclaimer & Regulatory Clarity */}
        <div className="py-6 border-b border-slate-800/80 bg-slate-900/40 rounded-2xl p-5 my-6 border border-slate-800">
          <div className="flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-accent shrink-0 mt-0.5" />
            <div className="space-y-1.5 text-xs text-slate-400 leading-relaxed">
              <p className="font-semibold text-slate-300">
                Statutory Notice & Operational Clarification
              </p>
              <p>
                {siteConfig.disclaimer}
              </p>
              <p className="text-[11px] text-slate-400">
                All government processing and statutory registration grants remain under the sole discretion of the respective government authorities. Government charges, where prescribed by statutory rules, are distinct from VpaarSetu professional assistance fees.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Quick Navigation */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {currentYear} {siteConfig.name}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <Link to="/services" className="hover:text-white transition-colors">All Services</Link>
            <Link to="/about" className="hover:text-white transition-colors">About Us</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
