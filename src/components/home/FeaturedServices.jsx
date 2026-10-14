import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { servicesData } from '../../data/services';
import ServiceCard from '../services/ServiceCard';

export default function FeaturedServices() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All',
    'Corporate Incorporation',
    'Taxation & Indirect Taxes',
    'Government Recognition & Licences',
    'Regulatory Licences',
  ];

  const filteredServices = selectedCategory === 'All'
    ? servicesData
    : servicesData.filter((service) => service.category === selectedCategory);

  return (
    <section className="py-16 sm:py-24 bg-surface">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-light text-primary text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Core Service Catalog</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight">
              Essential Business Registrations & Statutory Licences
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Every business has distinct structural and sectoral obligations. Explore our dedicated registration tracks designed for clarity and compliance.
            </p>
          </div>

          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-primary-hover group self-start md:self-auto shrink-0"
          >
            <span>View All 8 Services</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                selectedCategory === category
                  ? 'bg-navy text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredServices.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
