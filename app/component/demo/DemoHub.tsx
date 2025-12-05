'use client';

import React from 'react';
import { IndustryType } from '@/types';
import { DEMO_CONFIGS } from './demoConstants';
import { ArrowRight } from 'lucide-react';

interface DemoHubProps {
  onSelectIndustry: (industry: IndustryType) => void;
}

const IndustryCard = ({ 
  industry, 
  onSelect 
}: { 
  industry: IndustryType;
  onSelect: (industry: IndustryType) => void;
}) => {
  const config = DEMO_CONFIGS[industry];
  const Icon = config.icon;

  return (
    <button
      onClick={() => onSelect(industry)}
      className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 hover:shadow-xl transition-all text-left"
    >
      {/* Background accent */}
      <div className={`absolute top-0 right-0 w-32 h-32 ${config.colors.secondary} rounded-full opacity-0 group-hover:opacity-100 -mr-16 -mt-16 transition-all`}></div>

      {/* Content */}
      <div className="relative z-10">
        <div className={`inline-flex p-3 rounded-lg ${config.colors.secondary} ${config.colors.text} mb-4 group-hover:scale-110 transition-transform`}>
          <Icon className="h-8 w-8" />
        </div>

        <h3 className="text-2xl font-bold text-slate-900 mb-2">{config.name}</h3>
        <p className={`${config.colors.text} font-semibold text-sm mb-3`}>{config.tagline}</p>
        <p className="text-slate-600 text-sm mb-6 line-clamp-2">{config.description}</p>

        <div className="flex items-center gap-2 font-semibold text-blue-600 group-hover:gap-3 transition-all">
          <span>View Demo</span>
          <ArrowRight className="h-4 w-4" />
        </div>
      </div>

      {/* Border accent animation */}
      <div className={`absolute bottom-0 left-0 right-0 h-1 ${config.colors.primary} transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300`}></div>
    </button>
  );
};

export const DemoHub: React.FC<DemoHubProps> = ({ onSelectIndustry }) => {
  const industries = Object.values(IndustryType) as IndustryType[];

  return (
    <div className="w-full">
      {/* Header */}
      <section className="relative py-16 md:py-24 overflow-hidden bg-linear-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

        <div className="container relative mx-auto px-6 text-center">
          <div className="inline-flex px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 mb-8">
            <span className="text-blue-400 text-sm font-semibold">Request a Demo</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            See Nexus Transform Your Industry
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Choose your industry and explore how Nexus delivers measurable results and strategic advantages tailored to your specific business challenges.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-all">
              Start Demo
            </button>
            <button className="border-2 border-slate-400 text-slate-300 hover:border-slate-300 font-bold py-3 px-8 rounded-lg transition-all">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Select Your Industry
            </h2>
            <p className="text-lg text-slate-600">
              Get a personalized look at how Nexus solves problems specific to your sector
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max">
            {industries.map((industry) => (
              <IndustryCard 
                key={industry} 
                industry={industry} 
                onSelect={onSelectIndustry}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">8+</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Key Advantages</h3>
              <p className="text-slate-600">Per industry with detailed ROI metrics and implementation timelines</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">3+</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Media Assets</h3>
              <p className="text-slate-600">Screenshots and video walkthroughs showing real-world features</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">10</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Industries</h3>
              <p className="text-slate-600">From healthcare to logistics, we cover your sector</p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
            Why Industry Leaders Trust Nexus
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-400 mb-2">500+</div>
              <p className="text-slate-300">Enterprise Clients</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-400 mb-2">10M+</div>
              <p className="text-slate-300">Transactions Daily</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-400 mb-2">99.99%</div>
              <p className="text-slate-300">System Uptime</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-400 mb-2">30%</div>
              <p className="text-slate-300">Avg. Cost Savings</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-linear-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Schedule a 20-minute personalized demo and discover how Nexus can transform your business.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-slate-100 transition-colors">
            Book Your Demo Today
          </button>
        </div>
      </section>
    </div>
  );
};
