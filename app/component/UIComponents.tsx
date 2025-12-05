import React from 'react';

interface MockWindowProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
}

export const MockWindow: React.FC<MockWindowProps> = ({ children, title = "Nexus Dashboard", className = "" }) => {
  return (
    <div className={`overflow-hidden rounded-xl border border-slate-200 bg-white shadow-2xl ${className}`}>
      <div className="flex items-center gap-2 border-b border-slate-100 bg-slate-50 px-4 py-3">
        <div className="flex gap-1.5">
          <div className="h-3 w-3 rounded-full bg-red-400"></div>
          <div className="h-3 w-3 rounded-full bg-amber-400"></div>
          <div className="h-3 w-3 rounded-full bg-emerald-400"></div>
        </div>
        <div className="ml-4 flex-1 rounded-md bg-white px-3 py-1 text-xs font-medium text-slate-400 shadow-sm">
          nexus.app/{title.toLowerCase().replace(/\s/g, '-')}
        </div>
      </div>
      <div className="bg-slate-50/50 p-4 min-h-[300px]">
        {children}
      </div>
    </div>
  );
};

export const SectionBadge: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => (
  <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider ${className}`}>
    {children}
  </span>
);

export const PrimaryButton: React.FC<{ 
  children: React.ReactNode; 
  onClick?: () => void; 
  className?: string;
  colorClass?: string; 
}> = ({ children, onClick, className = "", colorClass = "bg-blue-600 hover:bg-blue-700" }) => (
  <button 
    onClick={onClick}
    className={`inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold text-white transition-all shadow-lg shadow-slate-900/10 hover:shadow-slate-900/20 active:scale-95 ${colorClass} ${className}`}
  >
    {children}
  </button>
);

export const GridCard: React.FC<{
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}> = ({ title, description, icon, className = "" }) => (
  <div className={`group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:border-slate-300 hover:shadow-lg ${className}`}>
    <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-slate-50 text-slate-600 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h3 className="mb-2 text-lg font-semibold text-slate-900">{title}</h3>
    <p className="text-sm leading-relaxed text-slate-600">{description}</p>
  </div>
);