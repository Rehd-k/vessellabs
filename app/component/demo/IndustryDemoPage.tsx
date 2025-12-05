'use client';

import React from 'react';
import { IndustryType, IndustryDemoConfig } from '@/types';
import { DemoForm } from './DemoForm';
import { ChevronLeft, Play } from 'lucide-react';

interface IndustryDemoPageProps {
  config: IndustryDemoConfig;
  onBack: () => void;
}

const AdvantageCard = ({ advantage, color }: { advantage: any; color: string }) => {
  const Icon = advantage.icon;
  return (
    <div className="group p-6 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all bg-white">
      <div className={`inline-flex p-3 rounded-lg ${color} mb-4`}>
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="font-bold text-slate-900 mb-2">{advantage.title}</h3>
      <p className="text-sm text-slate-600">{advantage.description}</p>
    </div>
  );
};

const MediaCard = ({ media, industryColor }: { media: any; industryColor: string }) => {
  const [isPlaying, setIsPlaying] = React.useState(false);

  if (media.type === 'video') {
    return (
      <div className="relative group rounded-xl overflow-hidden bg-slate-900 aspect-video">
        <div className="absolute inset-0 bg-slate-800 flex items-center justify-center">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className={`relative z-10 w-16 h-16 rounded-full flex items-center justify-center transition-all transform group-hover:scale-110 ${industryColor}`}
          >
            <Play className="h-7 w-7 text-white ml-1" />
          </button>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black to-transparent p-4">
          <p className="text-white text-sm font-medium">{media.caption}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-xl overflow-hidden bg-slate-100 aspect-video flex flex-col">
      <div className="flex-1 bg-linear-to-br from-slate-200 to-slate-300 flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl mb-2">📸</div>
          <p className="text-slate-600 text-sm">{media.alt}</p>
        </div>
      </div>
      <div className="bg-white p-4 border-t border-slate-200">
        <p className="text-sm font-medium text-slate-900">{media.caption}</p>
      </div>
    </div>
  );
};

export const IndustryDemoPage: React.FC<IndustryDemoPageProps> = ({ config, onBack }) => {
  const [selectedAdvantageIndex, setSelectedAdvantageIndex] = React.useState(0);

  return (
    <div className="w-full">
      {/* Header */}
      <section className={`relative py-16 md:py-24 overflow-hidden bg-slate-900`}>
        <div className={`absolute inset-0 bg-linear-to-br ${config.colors.gradientFrom} ${config.colors.gradientTo} opacity-20`}></div>

        <div className="container relative mx-auto px-6">
          <button
            onClick={onBack}
            className="flex items-center text-sm font-medium text-slate-400 hover:text-slate-300 transition-colors mb-8"
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back
          </button>

          <div className="max-w-3xl">
            <div className={`inline-flex px-4 py-2 rounded-full ${config.colors.badge} border border-white/10 mb-6`}>
              Demo for {config.name}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {config.tagline}
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              {config.description}
            </p>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why Choose Nexus for {config.name}?
            </h2>
            <p className="text-lg text-slate-600">
              Discover the key benefits tailored specifically for your industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {config.advantages.map((advantage, index) => (
              <AdvantageCard
                key={index}
                advantage={advantage}
                color={config.colors.secondary + ' ' + config.colors.text}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={`py-20 ${config.colors.secondary}`}>
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-16">
            Core Features
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {config.features.map((feature, index) => {
              const FeatureIcon = feature.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-xl border border-slate-200 hover:shadow-lg transition-all">
                  <div className={`inline-flex p-3 rounded-lg ${config.colors.secondary} ${config.colors.text} mb-4`}>
                    <FeatureIcon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
                  <p className="text-slate-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Media Showcase */}
      {config.media && config.media.length > 0 && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-16">
              See It In Action
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {config.media.map((media, index) => (
                <MediaCard key={index} media={media} industryColor={config.colors.primary} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Demo Form Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Ready to Transform Your Operations?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Schedule a personalized demo with our team and see how Nexus can solve your specific business challenges.
            </p>
          </div>

          <div className="flex justify-center">
            <DemoForm industry={config.id} />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`${config.colors.primary} text-white py-16`}>
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Join Industry Leaders Using Nexus
          </h3>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Hundreds of {config.name.toLowerCase()} companies are already transforming their operations. Don't get left behind.
          </p>
          <button className="bg-white text-slate-900 px-8 py-3 rounded-lg font-bold hover:bg-slate-50 transition-colors">
            Schedule Demo Now
          </button>
        </div>
      </section>
    </div>
  );
};
