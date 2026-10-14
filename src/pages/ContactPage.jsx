import React from 'react';
import { useLocation } from 'react-router-dom';
import { 
  PhoneCall, 
  Mail, 
  Clock, 
  MapPin, 
  MessageSquare, 
  ShieldCheck, 
  Code2, 
  CheckCircle2, 
  AlertCircle 
} from 'lucide-react';
import SEO from '../components/common/SEO';
import Breadcrumb from '../components/common/Breadcrumb';
import ContactForm from '../components/forms/ContactForm';
import FAQAccordion from '../components/common/FAQAccordion';
import { siteConfig, getWhatsAppLink } from '../config/siteConfig';

export default function ContactPage() {
  const location = useLocation();
  const preselectedService = location.state?.preselectedService || '';

  const contactFAQs = [
    {
      question: "How quickly will an advisor respond to my enquiry?",
      answer: "During regular operating hours (Monday to Saturday, 9:30 AM to 6:30 PM IST), enquiries are typically reviewed and acknowledged within 2 to 4 business hours via phone or email.",
    },
    {
      question: "Can I receive initial guidance over WhatsApp?",
      answer: "Yes. You can click any WhatsApp link on our website to initiate a conversation with our advisory desk for fast preliminary questions regarding document checklists or structural fit.",
    },
    {
      question: "Do you offer in-person consultations?",
      answer: "Our operations are built to be 100% digital for maximum client convenience across all states and Union Territories. However, clients in Lucknow and Uttar Pradesh can also visit our registered desk or schedule an in-person consultation by prior appointment.",
    },
    {
      question: "How are confidential KYC documents handled?",
      answer: "We treat client documents (PAN, Aadhaar, bank records) with strict confidentiality. All records are transmitted over encrypted protocols and accessed solely by the assigned compliance associate for filing purposes.",
    },
  ];

  return (
    <>
      <SEO
        title="Contact VpaarSetu | Talk to a Business Compliance Advisor"
        description="Get in touch with VpaarSetu for expert guidance on company registration, GST, MSME Udyam, or FSSAI licences. Connect via phone, WhatsApp, or online enquiry."
      />

      <div className="bg-gradient-to-b from-white via-surface to-surface pt-6 pb-12 sm:pb-16 border-b border-slate-200/80">
        <div className="container-custom">
          <Breadcrumb items={[{ label: 'Contact Us' }]} />

          <div className="max-w-3xl space-y-4 mt-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-light text-primary text-xs font-bold uppercase tracking-wider">
              <span>Connect With Our Team</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy tracking-tight">
              Talk to Our Business Advisory Team
            </h1>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Have questions about legal structures, document readiness, or government portal procedures? Reach out through any of our direct communication channels.
            </p>
          </div>
        </div>
      </div>

      <div className="container-custom py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Contact Channels & Office Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-subtle space-y-6">
              <h2 className="text-xl font-bold text-navy pb-3 border-b border-slate-100">
                Direct Contact Channels
              </h2>

              <ul className="space-y-5 text-sm">
                <li className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-accent-light text-accent flex items-center justify-center shrink-0">
                    <PhoneCall className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Telephone Helpline
                    </p>
                    <a
                      href={`tel:${siteConfig.phoneRaw}`}
                      className="text-base font-bold text-navy hover:text-primary transition-colors mt-0.5 block"
                    >
                      {siteConfig.phone}
                    </a>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Direct line to our compliance coordinators
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#25D366]/15 text-[#25D366] flex items-center justify-center shrink-0">
                    <MessageSquare className="w-5 h-5 fill-[#25D366]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      WhatsApp Instant Chat
                    </p>
                    <a
                      href={getWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-bold text-[#25D366] hover:underline mt-0.5 block"
                    >
                      Chat with an Advisor
                    </a>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Fastest channel for quick document checks ({siteConfig.phone})
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-primary-light text-primary flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Email Inquiries
                    </p>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-sm font-semibold text-navy hover:text-primary transition-colors mt-0.5 block break-all"
                    >
                      {siteConfig.email}
                    </a>
                    <p className="text-xs text-slate-500 mt-0.5">
                      For detailed briefs and document reviews
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Operating Hours
                    </p>
                    <p className="text-sm font-semibold text-navy mt-0.5">
                      {siteConfig.workingHours}
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Sunday closed • Digital enquiries accepted 24/7
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Office Locations */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-subtle space-y-5">
              <h3 className="text-lg font-bold text-navy flex items-center gap-2">
                <MapPin className="w-5 h-5 text-accent" />
                <span>Operational Office</span>
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="p-4 rounded-2xl bg-surface border border-slate-200/60">
                  <p className="font-bold text-navy text-sm">VpaarSetu Head Office (Lucknow)</p>
                  <p className="text-slate-700 mt-1.5 leading-relaxed font-medium">
                    02 Infront Of Ram Kishore Inter College, Jankipuram extension, Lucknow, Uttar Pradesh 226021
                  </p>
                </div>

                <p className="text-xs text-slate-500 leading-relaxed italic">
                  {siteConfig.panIndiaNote}
                </p>
              </div>
            </div>

            {/* Developer / CRM Endpoint Integration Documentation Alert */}
            <div className="bg-slate-900 text-slate-300 rounded-3xl p-6 border border-slate-800 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-accent">
                <Code2 className="w-4 h-4" />
                <span>Backend API Integration Architecture</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                This frontend features comprehensive client-side React Hook Form validation. To attach your real production CRM or mailer service (e.g., SendGrid, Nodemailer, HubSpot, or Webhook), dispatch payloads to your chosen endpoint in <code className="text-amber-300 bg-slate-800 px-1 py-0.5 rounded">src/components/forms/ContactForm.jsx</code> at <code className="text-amber-300 bg-slate-800 px-1 py-0.5 rounded">onSubmit</code>.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <ContactForm preselectedService={preselectedService} />
          </div>
        </div>

        {/* Contact FAQs */}
        <section className="mt-20 pt-16 border-t border-slate-200/80">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="text-center space-y-2">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy">
                Consultation & Enquiries FAQ
              </h2>
              <p className="text-slate-600 text-sm">
                Common questions about initiating work with VpaarSetu
              </p>
            </div>

            <FAQAccordion items={contactFAQs} />
          </div>
        </section>
      </div>
    </>
  );
}
