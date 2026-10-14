import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowRight, HelpCircle } from 'lucide-react';
import SEO from '../components/common/SEO';

export default function NotFoundPage() {
  return (
    <>
      <SEO title="Page Not Found (404)" />

      <div className="min-h-[60vh] flex items-center justify-center py-16">
        <div className="container-custom text-center max-w-lg space-y-6">
          <div className="w-20 h-20 rounded-3xl bg-primary-light text-primary flex items-center justify-center mx-auto shadow-subtle">
            <span className="text-3xl font-black">404</span>
          </div>

          <h1 className="text-3xl font-extrabold text-navy">
            Page Not Found
          </h1>

          <p className="text-slate-600 text-sm leading-relaxed">
            The page or service document you are looking for may have been moved or does not exist. Please check the URL or use the links below to find what you need.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link to="/" className="btn-primary w-full sm:w-auto px-6 py-3">
              <Home className="w-4 h-4" />
              <span>Back to Homepage</span>
            </Link>
            <Link to="/services" className="btn-secondary w-full sm:w-auto px-6 py-3">
              <span>Browse All Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
