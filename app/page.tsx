'use client'
import { ViewState, IndustryType } from "@/types";
import React, { useState, useEffect } from "react";
import { Navbar } from "./component/Navbar";
import { HeroSection } from "./component/sections/HeroSection";
import { HubView } from "./component/sections/HubView";
import { IndustryView } from "./component/sections/IndustryView";
import { EcosystemSection } from "./component/sections/EcosystemSection";
import { AutomationSection } from "./component/sections/AutomationSection";
import { ROISection } from "./component/sections/ROISection";
import { InfrastructureSection } from "./component/sections/InfrastructureSection";
import { CTASection } from "./component/sections/CTASection";
import { Footer } from "./component/sections/Footer";


export default function Home() {
  const [view, setView] = useState<ViewState>('HUB');
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Scroll to top when view changes
  useEffect(() => {
    window.scrollTo({ top: 800, behavior: 'smooth' });
  }, [view]);

  const handleIndustrySelect = (industryId: IndustryType) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setView(industryId);
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
      <Navbar currentView={view} onBack={handleBackToHub} />

      <main className="grow">
        <HeroSection />

        <section className={`transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
          {view === 'HUB' ? (
            <HubView onSelect={handleIndustrySelect} />
          ) : (
            <IndustryView industryId={view} onBack={handleBackToHub} />
          )}
        </section>

        <EcosystemSection />
        <AutomationSection />
        <ROISection />
        <InfrastructureSection />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}

