import React from 'react';

export default function Badge({ children, variant = 'primary', className = '' }) {
  const variants = {
    primary: 'bg-primary-light text-primary border-primary/20',
    accent: 'bg-accent-light text-accent-dark border-accent/25',
    navy: 'bg-slate-100 text-navy border-slate-200',
    subtle: 'bg-white/80 text-navy-muted border-slate-200 backdrop-blur-sm',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide border ${variants[variant] || variants.primary} ${className}`}
    >
      {children}
    </span>
  );
}
