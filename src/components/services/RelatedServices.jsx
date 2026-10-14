import React from 'react';
import { servicesData, getServiceBySlug } from '../../data/services';
import ServiceCard from './ServiceCard';

export default function RelatedServices({ currentServiceSlug, relatedSlugs = [] }) {
  // If no explicit related slugs provided, pick others from the same category or overall list
  let related = relatedSlugs
    .map((slug) => getServiceBySlug(slug))
    .filter(Boolean);

  if (related.length === 0) {
    related = servicesData
      .filter((s) => s.slug !== currentServiceSlug)
      .slice(0, 3);
  }

  return (
    <section className="py-12 border-t border-slate-200/80">
      <div className="mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-navy">
          Related & Complementary Services
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Explore additional business registrations and statutory licences frequently paired with this service
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {related.slice(0, 3).map((service, index) => (
          <ServiceCard key={service.id} service={service} index={index} />
        ))}
      </div>
    </section>
  );
}
