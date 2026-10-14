import React from 'react';
import SEO from '../components/common/SEO';
import HeroSection from '../components/home/HeroSection';
import BrandIntro from '../components/home/BrandIntro';
import FeaturedServices from '../components/home/FeaturedServices';
import WhyChooseUs from '../components/home/WhyChooseUs';
import HowWeWork from '../components/home/HowWeWork';
import StructureComparison from '../components/home/StructureComparison';
import HomeFAQ from '../components/home/HomeFAQ';
import CTASection from '../components/common/CTASection';

export default function HomePage() {
  return (
    <>
      <SEO
        title="Your Business. Your Vision. Our Guidance"
        description="From business registration to essential licences and compliance, VpaarSetu helps Indian entrepreneurs navigate the paperwork and take the next step with confidence."
      />

      {/* Hero Section */}
      <HeroSection />

      {/* Brand Introduction */}
      <BrandIntro />

      {/* Featured Services Grid */}
      <FeaturedServices />

      {/* Why Choose VpaarSetu */}
      <WhyChooseUs />

      {/* How We Work */}
      <HowWeWork />

      {/* Business Registration Structure Comparison */}
      <StructureComparison />

      {/* Frequently Asked Questions */}
      <HomeFAQ />

      {/* Reusable Contact CTA */}
      <CTASection
        title="Take the First Confident Step Towards Your Venture"
        description="Whether you need a Private Limited incorporation, GST registration, or a Food Safety licence, our advisors are here to clarify your exact requirements."
        primaryButtonText="Request a Consultation"
      />
    </>
  );
}
