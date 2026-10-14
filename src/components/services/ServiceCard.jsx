import React from 'react';
import { Link } from 'react-router-dom';
import { 
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
import Badge from '../common/Badge';

const iconMap = {
  ReceiptText,
  Building2,
  Building,
  ShieldCheck,
  UserCheck,
  Users,
  Handshake,
  UtensilsCrossed,
};

export default function ServiceCard({ service, index = 0 }) {
  const IconComponent = iconMap[service.iconName] || Building;

  return (
    <div className="card-premium p-6 sm:p-7 flex flex-col justify-between group h-full">
      <div>
        <div className="flex items-center justify-between gap-3 mb-5">
          <div className="w-12 h-12 rounded-xl bg-primary-light group-hover:bg-primary text-primary group-hover:text-white flex items-center justify-center transition-colors duration-300 shadow-sm">
            <IconComponent className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
          </div>
          <Badge variant="navy" className="text-[11px]">
            {service.badge}
          </Badge>
        </div>

        <h3 className="text-xl font-bold text-navy group-hover:text-primary transition-colors mb-2.5 leading-snug">
          {service.name}
        </h3>

        <p className="text-slate-600 text-sm leading-relaxed mb-6">
          {service.shortDescription}
        </p>
      </div>

      <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
        <span className="text-xs font-medium text-slate-500">
          {service.category}
        </span>
        <Link
          to={service.path}
          className="inline-flex items-center gap-1.5 text-sm font-bold text-primary group-hover:text-primary-hover group-hover:translate-x-0.5 transition-all"
        >
          <span>Explore Service</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
