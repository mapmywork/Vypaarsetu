import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { 
  ChevronDown, 
  Menu, 
  X, 
  PhoneCall, 
  MessageSquare, 
  ArrowRight,
  ReceiptText,
  Building2,
  Building,
  ShieldCheck,
  UserCheck,
  Users,
  Handshake,
  UtensilsCrossed
} from 'lucide-react';
import { servicesData } from '../../data/services';
import { siteConfig, getWhatsAppLink } from '../../config/siteConfig';

const iconMap = {
  ReceiptText,
  Building2,
  Building,
  ShieldCheck,
  UserCheck,
  Users,
  Handshake,
  UtensilsCrossed
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  // Close menus on route change
  useEffect(() => {
    setIsOpen(false);
    setServicesDropdownOpen(false);
    setMobileServicesOpen(false);
  }, [location.pathname]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle click outside dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setServicesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-subtle border-b border-slate-200/80 py-2'
          : 'bg-white/90 backdrop-blur-sm border-b border-slate-100 py-2.5'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link to="/" className="flex items-center group focus:outline-none focus:ring-2 focus:ring-primary rounded-xl py-0.5" aria-label="VypaarSetu Home">
            <img
              src="/logo.jpeg"
              alt="VypaarSetu - Your Compliance Partner"
              className="h-16 sm:h-20 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  isActive
                    ? 'text-primary bg-primary-light'
                    : 'text-slate-700 hover:text-primary hover:bg-slate-50'
                }`
              }
            >
              Home
            </NavLink>

            {/* Services Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                onMouseEnter={() => setServicesDropdownOpen(true)}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  location.pathname.includes('/services') || servicesData.some(s => s.path === location.pathname)
                    ? 'text-primary bg-primary-light'
                    : 'text-slate-700 hover:text-primary hover:bg-slate-50'
                }`}
                aria-expanded={servicesDropdownOpen}
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    servicesDropdownOpen ? 'rotate-180 text-primary' : 'text-slate-400'
                  }`}
                />
              </button>

              {/* Mega Dropdown Menu */}
              {servicesDropdownOpen && (
                <div
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                  className="absolute left-1/2 -translate-x-1/2 mt-2 w-[720px] bg-white rounded-2xl shadow-premium-hover border border-slate-200/90 p-5 grid grid-cols-2 gap-3 z-50 animate-fade-in"
                >
                  <div className="col-span-2 pb-2 mb-1 border-b border-slate-100 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        Official Business Registrations
                      </p>
                      <p className="text-xs text-slate-500">
                        Select a legal structure or regulatory compliance licence
                      </p>
                    </div>
                    <Link
                      to="/services"
                      className="text-xs font-semibold text-primary hover:text-primary-hover flex items-center gap-1"
                    >
                      <span>Explore all 8 services</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                  {servicesData.map((service) => {
                    const IconComponent = iconMap[service.iconName] || Building;
                    return (
                      <Link
                        key={service.id}
                        to={service.path}
                        className="flex items-start gap-3 p-3 rounded-xl hover:bg-primary-light/60 transition-colors group"
                      >
                        <div className="w-9 h-9 rounded-lg bg-slate-100 group-hover:bg-primary group-hover:text-white text-primary flex items-center justify-center shrink-0 transition-colors">
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-semibold text-navy group-hover:text-primary transition-colors truncate">
                            {service.name}
                          </p>
                          <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                            {service.shortDescription}
                          </p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  isActive
                    ? 'text-primary bg-primary-light'
                    : 'text-slate-700 hover:text-primary hover:bg-slate-50'
                }`
              }
            >
              About
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  isActive
                    ? 'text-primary bg-primary-light'
                    : 'text-slate-700 hover:text-primary hover:bg-slate-50'
                }`
              }
            >
              Contact
            </NavLink>
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/contact"
              className="btn-primary text-sm px-5 py-2.5 shadow-sm"
            >
              <span>Talk to Us</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-[#25D366]/15 text-[#25D366] flex items-center justify-center"
              aria-label="WhatsApp"
            >
              <MessageSquare className="w-4 h-4" />
            </a>
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-slate-700 hover:text-navy hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label="Toggle mobile menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bottom-0 bg-navy/40 backdrop-blur-sm z-40 animate-fade-in">
          <div className="bg-white h-full max-h-[calc(100vh-65px)] overflow-y-auto px-5 py-6 space-y-6 shadow-xl border-t border-slate-100 flex flex-col justify-between">
            <div className="space-y-4">
              <nav className="flex flex-col space-y-1">
                <Link
                  to="/"
                  className="px-4 py-3 rounded-xl font-semibold text-base text-navy hover:bg-slate-100 flex items-center justify-between"
                >
                  <span>Home</span>
                </Link>

                {/* Mobile Services Accordion */}
                <div className="rounded-xl border border-slate-100 overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="w-full px-4 py-3 font-semibold text-base text-navy flex items-center justify-between bg-slate-50/70"
                  >
                    <span>Services</span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-500 transition-transform ${
                        mobileServicesOpen ? 'rotate-180 text-primary' : ''
                      }`}
                    />
                  </button>

                  {mobileServicesOpen && (
                    <div className="p-2 space-y-1 bg-white border-t border-slate-100">
                      <Link
                        to="/services"
                        className="px-3 py-2 text-xs font-bold uppercase tracking-wider text-primary flex items-center justify-between rounded-lg bg-primary-light"
                      >
                        <span>View All 8 Services</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                      {servicesData.map((service) => (
                        <Link
                          key={service.id}
                          to={service.path}
                          className="px-3 py-2 text-sm text-slate-700 hover:text-primary hover:bg-slate-50 rounded-lg flex items-center justify-between"
                        >
                          <span>{service.name}</span>
                          <span className="text-[10px] text-slate-400 bg-slate-100 px-2 py-0.5 rounded">
                            {service.badge}
                          </span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <Link
                  to="/about"
                  className="px-4 py-3 rounded-xl font-semibold text-base text-navy hover:bg-slate-100 flex items-center justify-between"
                >
                  <span>About</span>
                </Link>

                <Link
                  to="/contact"
                  className="px-4 py-3 rounded-xl font-semibold text-base text-navy hover:bg-slate-100 flex items-center justify-between"
                >
                  <span>Contact</span>
                </Link>
              </nav>

              <div className="p-4 rounded-2xl bg-surface border border-slate-200/80 space-y-3">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Direct Assistance
                </p>
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="flex items-center gap-3 text-sm font-semibold text-navy hover:text-primary"
                >
                  <PhoneCall className="w-4 h-4 text-accent" />
                  <span>{siteConfig.phone}</span>
                </a>
                <p className="text-xs text-slate-500">
                  {siteConfig.workingHours}
                </p>
              </div>
            </div>

            <div className="space-y-3 pt-4 border-t border-slate-100">
              <Link to="/contact" className="btn-primary w-full py-3.5 text-center">
                <span>Talk to Us</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp w-full py-3.5 text-center"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
