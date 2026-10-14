import React from 'react';
import { useLocation, Link, Navigate } from 'react-router-dom';
import SEO from '../components/common/SEO';
import ServiceHero from '../components/services/ServiceHero';
import EligibilitySection from '../components/services/EligibilitySection';
import BenefitsGrid from '../components/services/BenefitsGrid';
import DocumentChecklist from '../components/services/DocumentChecklist';
import ProcessTimeline from '../components/services/ProcessTimeline';
import RelatedServices from '../components/services/RelatedServices';
import FAQAccordion from '../components/common/FAQAccordion';
import CTASection from '../components/common/CTASection';
import StructureComparison from '../components/home/StructureComparison';
import { getServiceBySlug } from '../data/services';
import { HelpCircle } from 'lucide-react';

export default function ServiceDetailPage({ explicitSlug }) {
  const location = useLocation();

  // Extract slug from either the explicit prop or the current pathname
  const currentPath = explicitSlug || location.pathname.replace(/^\//, '');
  const service = getServiceBySlug(currentPath);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <>
      <SEO
        title={`${service.name} in India`}
        description={service.shortDescription}
      />

      {/* 1 & 2: Breadcrumb & Service Hero */}
      <ServiceHero service={service} />

      <div className="container-custom py-10 space-y-4">
        {/* 3 & 4: Who the service is for */}
        <EligibilitySection whoIsItFor={service.whoIsItFor} />

        {/* For Company Registration Overview, include the interactive structure comparison */}
        {service.slug === 'company-registration' && (
          <div className="py-6">
            <StructureComparison isEmbedded={true} />
          </div>
        )}

        {/* 5: Key benefits & Important Considerations */}
        <BenefitsGrid
          benefits={service.keyBenefits}
          considerations={service.considerations}
        />

        {/* 6: Required Documents */}
        <DocumentChecklist documents={service.documents} />

        {/* 7: Overview of the Process */}
        <ProcessTimeline steps={service.process} />

        {/* 8: Service-Specific FAQs */}
        {service.faqs && service.faqs.length > 0 && (
          <section className="py-10">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-subtle space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary-light text-primary flex items-center justify-center">
                  <HelpCircle className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-navy">
                    Frequently Asked Questions about {service.shortName || service.name}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500">
                    Important statutory clarifications regarding filing, compliance, and prerequisites
                  </p>
                </div>
              </div>

              <FAQAccordion items={service.faqs} />
            </div>
          </section>
        )}

        {/* 9: Related Services */}
        <RelatedServices
          currentServiceSlug={service.slug}
          relatedSlugs={service.relatedServices}
        />
      </div>

      {/* 10: Enquire Now CTA */}
      <CTASection
        title={`Ready to Get Started with ${service.name}?`}
        description={`Connect with our specialist to review your eligibility, verify required documents, and get your application prepared accurately.`}
        serviceName={service.name}
        primaryButtonText={`Enquire for ${service.shortName || 'Service'}`}
      />
    </>
  );
}
