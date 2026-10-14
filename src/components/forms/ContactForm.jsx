import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { 
  Send, 
  CheckCircle2, 
  PhoneCall, 
  Mail, 
  User, 
  Building2, 
  MessageSquare, 
  AlertCircle,
  Clock,
  ArrowRight
} from 'lucide-react';
import { servicesData } from '../../data/services';
import { siteConfig, getWhatsAppLink } from '../../config/siteConfig';

export default function ContactForm({ preselectedService = '', className = '' }) {
  const [submittedData, setSubmittedData] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      service: preselectedService || '',
      message: '',
    },
  });

  const onSubmit = (data) => {
    setIsSubmitting(true);
    // Simulate real frontend validation handling & client-side capture
    // Note: In production, this integrates with your real backend/CRM endpoint (e.g., fetch('/api/enquiries', { method: 'POST', body: JSON.stringify(data) }))
    setTimeout(() => {
      setSubmittedData(data);
      setIsSubmitting(false);
      reset();
    }, 700);
  };

  const handleResetForm = () => {
    setSubmittedData(null);
  };

  if (submittedData) {
    const whatsappEnquiryLink = getWhatsAppLink(submittedData.service || 'Business Services');

    return (
      <div className={`bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-premium ${className}`}>
        <div className="text-center max-w-md mx-auto space-y-4">
          <div className="w-16 h-16 bg-accent-light text-accent rounded-full flex items-center justify-center mx-auto shadow-sm">
            <CheckCircle2 className="w-9 h-9" />
          </div>
          
          <h3 className="text-2xl font-bold text-navy">
            Enquiry Details Received!
          </h3>

          <p className="text-slate-600 text-sm leading-relaxed">
            Thank you, <span className="font-semibold text-navy">{submittedData.name}</span>. Your enquiry for <span className="font-semibold text-primary">{submittedData.service || 'Business Advisory'}</span> has been captured.
          </p>

          <div className="bg-surface rounded-2xl p-4 text-left border border-slate-200/80 space-y-2 text-xs sm:text-sm">
            <div className="flex justify-between py-1 border-b border-slate-200/60">
              <span className="text-slate-500">Contact Phone:</span>
              <span className="font-medium text-navy">{submittedData.phone}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-200/60">
              <span className="text-slate-500">Email Address:</span>
              <span className="font-medium text-navy">{submittedData.email}</span>
            </div>
            <div className="flex justify-between py-1">
              <span className="text-slate-500">Service:</span>
              <span className="font-medium text-primary">{submittedData.service || 'General Business Inquiry'}</span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-primary-light/60 border border-primary/20 text-xs text-slate-700 leading-relaxed text-left flex items-start gap-2.5">
            <Clock className="w-4 h-4 text-primary shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-primary block mb-0.5">Response Protocol</span>
              Our compliance team will review your requirement during working hours ({siteConfig.workingHours}) and reach out via phone or email.
            </div>
          </div>

          <div className="pt-2 flex flex-col gap-3">
            <a
              href={whatsappEnquiryLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp w-full py-3.5"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>Speed up via WhatsApp</span>
            </a>

            <button
              type="button"
              onClick={handleResetForm}
              className="text-xs text-slate-500 hover:text-navy underline pt-2"
            >
              Submit another inquiry
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-premium ${className}`}>
      <div className="mb-6">
        <h3 className="text-xl sm:text-2xl font-bold text-navy">
          Request a Consultation
        </h3>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Tell us about your venture. We will assess document requirements and guide your next steps.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
        {/* Full Name */}
        <div>
          <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
            Your Full Name <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <User className="w-4 h-4" />
            </div>
            <input
              id="name"
              type="text"
              placeholder="e.g. Rahul Sharma"
              className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm sm:text-base text-navy placeholder-slate-400 focus:outline-none transition-all ${
                errors.name
                  ? 'border-red-400 focus:ring-2 focus:ring-red-200'
                  : 'border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20'
              }`}
              {...register('name', {
                required: 'Please enter your full name.',
                minLength: { value: 2, message: 'Name must be at least 2 characters.' },
              })}
            />
          </div>
          {errors.name && (
            <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.name.message}</span>
            </p>
          )}
        </div>

        {/* Phone Number */}
        <div>
          <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
            Mobile Number (India) <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <PhoneCall className="w-4 h-4" />
            </div>
            <input
              id="phone"
              type="tel"
              placeholder="10-digit mobile number, e.g. 9876543210"
              className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm sm:text-base text-navy placeholder-slate-400 focus:outline-none transition-all ${
                errors.phone
                  ? 'border-red-400 focus:ring-2 focus:ring-red-200'
                  : 'border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20'
              }`}
              {...register('phone', {
                required: 'Please enter your contact phone number.',
                pattern: {
                  value: /^(?:(?:\+|0{0,2})91(\s*[-]\s*)?|[0]?)?[6789]\d{9}$/,
                  message: 'Please provide a valid 10-digit Indian phone number.',
                },
              })}
            />
          </div>
          {errors.phone && (
            <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.phone.message}</span>
            </p>
          )}
        </div>

        {/* Email Address */}
        <div>
          <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
            Work / Personal Email <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <Mail className="w-4 h-4" />
            </div>
            <input
              id="email"
              type="email"
              placeholder="e.g. rahul@example.com"
              className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm sm:text-base text-navy placeholder-slate-400 focus:outline-none transition-all ${
                errors.email
                  ? 'border-red-400 focus:ring-2 focus:ring-red-200'
                  : 'border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20'
              }`}
              {...register('email', {
                required: 'Email address is required.',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Please enter a valid email address.',
                },
              })}
            />
          </div>
          {errors.email && (
            <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.email.message}</span>
            </p>
          )}
        </div>

        {/* Service of Interest */}
        <div>
          <label htmlFor="service" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
            Service of Interest <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <Building2 className="w-4 h-4" />
            </div>
            <select
              id="service"
              className={`w-full pl-10 pr-8 py-3 rounded-xl border text-sm sm:text-base text-navy bg-white focus:outline-none transition-all appearance-none cursor-pointer ${
                errors.service
                  ? 'border-red-400 focus:ring-2 focus:ring-red-200'
                  : 'border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20'
              }`}
              {...register('service', {
                required: 'Please select a service or choose general inquiry.',
              })}
            >
              <option value="">Select a service...</option>
              {servicesData.map((s) => (
                <option key={s.id} value={s.name}>
                  {s.name}
                </option>
              ))}
              <option value="General Entity Selection Advice">General Advisory: Help Me Choose Structure</option>
            </select>
          </div>
          {errors.service && (
            <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.service.message}</span>
            </p>
          )}
        </div>

        {/* Message / Requirements */}
        <div>
          <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
            Brief Requirement / Current Business Status
          </label>
          <textarea
            id="message"
            rows={3}
            placeholder="Tell us what stage you are at (e.g., have 2 co-founders, starting retail brand, need GST for Amazon, etc.)"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm sm:text-base text-navy placeholder-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all"
            {...register('message')}
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary w-full py-3.5 mt-2 shadow-md hover:shadow-lg disabled:opacity-75 disabled:cursor-wait"
        >
          {isSubmitting ? (
            <span className="flex items-center gap-2">
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span>Validating & Submitting...</span>
            </span>
          ) : (
            <span className="flex items-center gap-2">
              <Send className="w-4 h-4" />
              <span>Submit Enquiry</span>
            </span>
          )}
        </button>

        <p className="text-[11px] text-slate-500 text-center leading-normal pt-1">
          By submitting, you consent to receive a direct call or email from a VpaarSetu advisor. We never share details with unauthorized third parties.
        </p>
      </form>
    </div>
  );
}
