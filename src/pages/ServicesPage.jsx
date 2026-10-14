import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  HelpCircle, 
  ArrowRight, 
  Search, 
  FileCheck2, 
  ShieldCheck, 
  Sparkles 
} from 'lucide-react';
import SEO from '../components/common/SEO';
import Breadcrumb from '../components/common/Breadcrumb';
import ServiceCard from '../components/services/ServiceCard';
import CTASection from '../components/common/CTASection';
import { servicesData } from '../data/services';

export default function ServicesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('All');

  const filterOptions = [
    'All',
    'Corporate Incorporation',
    'Taxation & Indirect Taxes',
    'Government Recognition & Licences',
    'Regulatory Licences',
  ];

  const filteredServices = servicesData.filter((service) => {
    const matchesFilter = selectedFilter === 'All' || service.category === selectedFilter;
    const matchesSearch =
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.badge.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <>
      <SEO
        title="Business Registration & Compliance Services"
        description="Explore VpaarSetu's complete suite of Indian business registrations: Private Limited, OPC, LLP, Partnership, GST, MSME Udyam, and FSSAI Food Licences."
      />

      <div className="bg-gradient-to-b from-white via-surface to-surface pt-6 pb-12 border-b border-slate-200/80">
        <div className="container-custom">
          <Breadcrumb items={[{ label: 'Services' }]} />

          <div className="max-w-3xl space-y-4 mt-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-light text-primary text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Full Service Directory</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy tracking-tight">
              Business Services & Statutory Registrations
            </h1>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Explore our core suite of eight corporate registrations, tax identifiers, and sector-specific licences tailored for Indian business owners.
            </p>
          </div>

          {/* Search & Category Filter Controls */}
          <div className="mt-8 pt-6 border-t border-slate-200/80 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between">
            {/* Search Box */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search services (e.g. GST, Private Limited, FSSAI)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm text-navy placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 bg-white"
              />
            </div>

            {/* Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
              {filterOptions.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setSelectedFilter(filter)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                    selectedFilter === filter
                      ? 'bg-navy text-white shadow-sm'
                      : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid Section */}
      <section className="py-16 bg-surface">
        <div className="container-custom">
          {filteredServices.length === 0 ? (
            <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 max-w-lg mx-auto space-y-4">
              <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-navy">No matching service found</h3>
              <p className="text-sm text-slate-500">
                We couldn't find any service matching "{searchQuery}". Try a different keyword or view all services.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedFilter('All');
                }}
                className="btn-primary text-xs px-4 py-2"
              >
                Reset Search
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredServices.map((service, index) => (
                <ServiceCard key={service.id} service={service} index={index} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Decision Guide Box: How to pick the right service */}
      <section className="py-12 bg-white border-y border-slate-200/80">
        <div className="container-custom">
          <div className="bg-surface rounded-3xl p-8 sm:p-10 border border-slate-200/80 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-accent-dark">
                <ShieldCheck className="w-4 h-4 text-accent" />
                <span>Need Personalized Guidance?</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy">
                Unsure Which Legal Structure Fits Your Business?
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Whether you should incorporate a Private Limited Company, register an LLP, or simply obtain a GST and MSME certificate depends on your shareholder count, capital requirements, and liability profile. Our specialists help you choose the appropriate path without unnecessary complexity.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <Link to="/contact" className="btn-primary w-full text-center py-3.5">
                <span>Talk to an Advisor</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/company-registration" className="btn-secondary w-full text-center py-3.5">
                <span>Compare Structures</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Conversion CTA */}
      <CTASection
        title="Ready to Register Your Business?"
        description="Share your details with our team to verify document prerequisites, understand statutory fees, and initiate paperwork."
      />
    </>
  );
}
