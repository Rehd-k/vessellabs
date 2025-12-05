import React from "react";
import { ChevronLeft, Shield } from "lucide-react";
import { INDUSTRIES } from "../constants";
import { IndustryType } from "@/types";
import { SectionBadge, PrimaryButton, MockWindow } from "../UIComponents";
import { DemoContainer } from "../Demos";

interface IndustryViewProps {
  industryId: IndustryType;
  onBack: () => void;
}

const IndustryHero = ({ 
  config, 
  onBack 
}: { 
  config: typeof INDUSTRIES[keyof typeof INDUSTRIES];
  onBack: () => void;
}) => {
  return (
    <section className={`relative md:pt-32 md:pb-20 overflow-hidden bg-slate-900`}>
      <div className={`absolute inset-0 bg-linear-to-br ${config.colors.gradientFrom} ${config.colors.gradientTo} opacity-20`}></div>

      <div className="container relative mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <button
            onClick={onBack}
            className="flex items-center text-sm font-medium text-slate-500 hover:text-slate-600 transition-colors mt-5"
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to Hub
          </button>
          <SectionBadge className={`${config.colors.badge} border border-white/10 mt-4`}>
            Nexus for {config.name}
          </SectionBadge>
          <h1 className="mt-6 text-4xl font-extrabold text-white tracking-tight sm:text-6xl mb-6">
            {config.tagline}
          </h1>
          <p className="text-lg text-slate-300 mb-8 leading-relaxed max-w-lg">
            {config.description}
          </p>
          <div className="flex flex-wrap gap-4">
            <PrimaryButton colorClass={config.colors.primary}>
              Request {config.name} Demo
            </PrimaryButton>
            <div className="flex items-center gap-2 text-sm text-slate-400 px-4 py-3">
              <Shield className="h-4 w-4" /> Enterprise Secure
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[500px] lg:max-w-none">
          <div className={`absolute -inset-4 rounded-full blur-2xl opacity-30 ${config.colors.primary}`}></div>
          <MockWindow title={`${config.name} Dashboard`} className="relative z-10 transform transition-transform hover:scale-[1.01]">
            <div className="grid grid-cols-1 gap-4 h-full">
              <div className="grid grid-cols-3 gap-3 mb-2">
                {[1, 2, 3].map(i => (
                  <div key={i} className="h-20 rounded-lg bg-slate-50 border border-slate-100 p-3 flex flex-col justify-between">
                    <div className="h-2 w-8 bg-slate-200 rounded"></div>
                    <div className="h-4 w-16 bg-slate-300 rounded"></div>
                  </div>
                ))}
              </div>
              <div className="flex-1 min-h-[250px] border border-slate-200 rounded-lg overflow-hidden">
                <DemoContainer type={config.id} />
              </div>
            </div>
          </MockWindow>
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ 
  icon, 
  title, 
  description, 
  colors 
}: { 
  icon: React.ElementType;
  title: string;
  description: string;
  colors: typeof INDUSTRIES[keyof typeof INDUSTRIES]["colors"];
}) => {
  return (
    <div className={`group relative overflow-hidden rounded-2xl border ${colors.border} bg-white p-8 hover:shadow-lg transition-all`}>
      <div className={`inline-flex p-3 rounded-lg ${colors.secondary} ${colors.text} mb-4`}>
        {React.createElement(icon, { size: 24 })}
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
      <p className="text-slate-500">{description}</p>
      <div className={`absolute right-0 bottom-0 h-32 w-32 translate-x-8 translate-y-8 rounded-full opacity-10 ${colors.primary}`}></div>
    </div>
  );
};

const FeaturesGrid = ({ config }: { config: typeof INDUSTRIES[keyof typeof INDUSTRIES] }) => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Precision Engineered Features</h2>
          <p className="text-slate-500">
            Specifically built to handle the unique challenges of the {config.name.toLowerCase()} industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(200px,auto)]">
          <div className={`md:col-span-2 group relative overflow-hidden rounded-2xl border ${config.colors.border} bg-white p-8 hover:shadow-lg transition-all`}>
            <div className={`inline-flex p-3 rounded-lg ${config.colors.secondary} ${config.colors.text} mb-4`}>
              {React.createElement(config.features[0].icon, { size: 24 })}
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">{config.features[0].title}</h3>
            <p className="text-slate-500">{config.features[0].description}</p>
            <div className={`absolute right-0 bottom-0 h-32 w-32 translate-x-8 translate-y-8 rounded-full opacity-10 ${config.colors.primary}`}></div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 hover:shadow-lg transition-all">
            <div className={`inline-flex p-3 rounded-lg ${config.colors.secondary} ${config.colors.text} mb-4`}>
              {React.createElement(config.features[1].icon, { size: 24 })}
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">{config.features[1].title}</h3>
            <p className="text-slate-500">{config.features[1].description}</p>
          </div>

          <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 hover:shadow-lg transition-all">
            <div className={`inline-flex p-3 rounded-lg ${config.colors.secondary} ${config.colors.text} mb-4`}>
              {React.createElement(config.features[2].icon, { size: 24 })}
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">{config.features[2].title}</h3>
            <p className="text-slate-500">{config.features[2].description}</p>
          </div>

          <div className={`md:col-span-2 relative overflow-hidden rounded-2xl ${config.colors.primary} p-8 flex items-center justify-between`}>
            <div className="relative z-10 text-white">
              <h3 className="text-xl font-bold mb-2">Ready to modernize?</h3>
              <p className="opacity-90">Get a tailored implementation plan for your business.</p>
            </div>
            <button className="relative z-10 bg-white text-slate-900 px-6 py-2 rounded-lg font-bold text-sm shadow-lg hover:bg-slate-50 transition-colors">
              Book Consultation
            </button>
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const IndustryView: React.FC<IndustryViewProps> = ({ industryId, onBack }) => {
  const config = INDUSTRIES[industryId];

  return (
    <>
      <IndustryHero config={config} onBack={onBack} />
      <FeaturesGrid config={config} />
    </>
  );
};
