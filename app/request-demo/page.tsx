'use client';

import React, { useState } from 'react';
import { IndustryType } from '@/types';
import { DEMO_CONFIGS } from '@/app/component/demo/demoConstants';
import { DemoHub, IndustryDemoPage } from '@/app/component/demo';
import { Navbar } from '@/app/component/Navbar';
import { Footer } from '@/app/component/sections/Footer';

type DemoViewState = 'HUB' | IndustryType;

export default function RequestDemoPage() {
  const [view, setView] = useState<DemoViewState>('HUB');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleSelectIndustry = (industry: IndustryType) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setView(industry);
      setIsTransitioning(false);
    }, 300);
  };

  const handleBackToHub = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setView('HUB');
      setIsTransitioning(false);
    }, 300);
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <Navbar currentView={view as any} onBack={handleBackToHub} />

      <main className="grow">
        <section className={`transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
          {view === 'HUB' ? (
            <DemoHub onSelectIndustry={handleSelectIndustry} />
          ) : (
            <IndustryDemoPage 
              config={DEMO_CONFIGS[view as IndustryType]} 
              onBack={handleBackToHub} 
            />
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}
