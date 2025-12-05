import React from "react";
import { ArrowRight } from "lucide-react";
import { INDUSTRIES } from "../constants";
import { IndustryType } from "@/types";

interface HubViewProps {
  onSelect: (id: IndustryType) => void;
}

const IndustryCard = ({ 
  industry, 
  onSelect 
}: { 
  industry: typeof INDUSTRIES[keyof typeof INDUSTRIES];
  onSelect: (id: IndustryType) => void;
}) => {
  const Icon = industry.icon;
  
  return (
    <div
      onClick={() => onSelect(industry.id)}
      className="group cursor-pointer relative overflow-hidden rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition-all hover:-translate-y-1 hover:shadow-xl"
    >
      <div className={`absolute top-0 right-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full opacity-10 transition-transform group-hover:scale-150 ${industry.colors.primary}`}></div>

      <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${industry.colors.secondary} ${industry.colors.text} mb-6`}>
        <Icon className="h-6 w-6" />
      </div>

      <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
        {industry.name}
      </h3>
      <p className="text-sm text-slate-500 mb-6 line-clamp-3">
        {industry.description}
      </p>

      <div className="flex items-center text-sm font-semibold text-slate-900 mt-auto">
        Explore Solutions <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </div>
    </div>
  );
};

const IndustryGrid = ({ onSelect }: { onSelect: (id: IndustryType) => void }) => {
  return (
    <section className="py-24 bg-slate-50 relative z-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight sm:text-4xl mb-4">
            Designed for Your World
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            We don't believe in generic software. Select your industry to see how Nexus adapts to your specific operational needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.values(INDUSTRIES).map((ind) => (
            <IndustryCard
              key={ind.id}
              industry={ind}
              onSelect={onSelect}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const TrustedBySection = () => {
  return (
    <section className="py-12 border-y border-slate-200 bg-white">
      <div className="container mx-auto px-6">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-slate-400 mb-8">
          Trusted by Industry Leaders
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="h-8 w-32 bg-slate-200 rounded animate-pulse"></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const HubView: React.FC<HubViewProps> = ({ onSelect }) => {
  return (
    <>
      <IndustryGrid onSelect={onSelect} />
      <TrustedBySection />
    </>
  );
};
