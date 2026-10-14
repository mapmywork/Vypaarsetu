import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/layout/ScrollToTop';

import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-surface text-navy font-sans antialiased selection:bg-primary-light selection:text-primary">
      <ScrollToTop />
      <Navbar />

      <main className="flex-1">
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />

          {/* Individual Dedicated Service Pages */}
          <Route
            path="/gst-registration"
            element={<ServiceDetailPage explicitSlug="gst-registration" />}
          />
          <Route
            path="/msme-registration"
            element={<ServiceDetailPage explicitSlug="msme-registration" />}
          />
          <Route
            path="/company-registration"
            element={<ServiceDetailPage explicitSlug="company-registration" />}
          />
          <Route
            path="/private-limited-company-registration"
            element={<ServiceDetailPage explicitSlug="private-limited-company-registration" />}
          />
          <Route
            path="/opc-registration"
            element={<ServiceDetailPage explicitSlug="opc-registration" />}
          />
          <Route
            path="/llp-registration"
            element={<ServiceDetailPage explicitSlug="llp-registration" />}
          />
          <Route
            path="/partnership-firm-registration"
            element={<ServiceDetailPage explicitSlug="partnership-firm-registration" />}
          />
          <Route
            path="/food-licence-registration"
            element={<ServiceDetailPage explicitSlug="food-licence-registration" />}
          />

          {/* 404 Route */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
