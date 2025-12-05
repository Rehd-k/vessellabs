'use client';

import React, { useState, useEffect } from 'react';
import { Handshake, TrendingUp, Globe, Award, Zap, Users } from 'lucide-react';
import { Footer } from '../component/sections';
import { Navbar } from '../component/Navbar';

interface PartnerType {
    icon: any;
    title: string;
    description: string;
    benefits: string[];
}

const FloatingOrb = ({ delay, size, position }: { delay: number; size: string; position: string }) => (
    <div
        className={`absolute ${size} ${position} rounded-full opacity-20 blur-3xl animate-pulse`}
        style={{
            animation: `pulse 4s ease-in-out ${delay}s infinite`,
            background: 'linear-gradient(135deg, #3B82F6, #8B5CF6)',
        }}
    />
);

const PartnerCard = ({ partner, delay }: { partner: PartnerType; delay: number }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="group bg-linear-to-br from-slate-800/50 to-slate-900/50 rounded-lg p-8 border border-slate-700/50 hover:border-blue-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10"
            style={{
                animation: `slideUp 0.6s ease-out ${delay}s forwards`,
                opacity: 0,
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <partner.icon className="w-8 h-8 text-blue-400 mb-4 group-hover:scale-125 group-hover:rotate-12 transition-transform" />
            <h3 className="text-2xl font-bold mb-2">{partner.title}</h3>
            <p className="text-slate-300 mb-6">{partner.description}</p>
            <ul className="space-y-2">
                {partner.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-slate-300 text-sm">
                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                        {benefit}
                    </li>
                ))}
            </ul>
        </div>
    );
};

const PartnerLogo = ({ name, delay }: { name: string; delay: number }) => (
    <div
        className="group bg-slate-800/30 border border-slate-700/50 rounded-lg p-6 flex items-center justify-center min-h-24 hover:bg-slate-700/30 hover:border-blue-400/50 transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20"
        style={{
            animation: `pulse 2s ease-in-out ${delay}s infinite`,
        }}
    >
        <span className="text-slate-400 font-semibold text-center group-hover:text-blue-400 transition-colors">{name}</span>
    </div>
);

const BenefitHighlight = ({ icon: Icon, title, description }: { icon: any; title: string; description: string }) => (
    <div className="flex gap-4 group">
        <div className="shrink-0">
            <Icon className="w-6 h-6 text-blue-400 group-hover:scale-125 group-hover:rotate-12 transition-transform" />
        </div>
        <div>
            <h4 className="font-semibold mb-1">{title}</h4>
            <p className="text-slate-300 text-sm">{description}</p>
        </div>
    </div>
);

export default function PartnersPage() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const partnerTypes: PartnerType[] = [
        {
            icon: Globe,
            title: 'Technology Partners',
            description: 'Integrate with leading cloud and software platforms',
            benefits: ['API Integration Support', 'Co-marketing Opportunities', 'Revenue Sharing Model', 'Technical Support'],
        },
        {
            icon: Users,
            title: 'Implementation Partners',
            description: 'Help customers implement and optimize Vessel Labs',
            benefits: ['Training & Certification', 'Deal Registration Program', 'Partner Portal Access', 'Sales Resources'],
        },
        {
            icon: TrendingUp,
            title: 'Reseller Partners',
            description: 'Resell Vessel Labs to your customer base',
            benefits: ['Competitive Margins', 'Marketing Support', 'Lead Generation', 'Account Management'],
        },
        {
            icon: Award,
            title: 'Strategic Partners',
            description: 'Joint ventures and long-term partnerships',
            benefits: ['Custom Solutions', 'Exclusive Territories', 'Co-development', 'Strategic Planning'],
        },
    ];

    const partnerCompanies = [
        'AWS', 'Microsoft Azure', 'Google Cloud', 'Salesforce', 'HubSpot', 'Stripe',
        'Zapier', 'Slack', 'Datadog', 'PagerDuty', 'Okta', 'Twilio'
    ];

    return (
        <>
            <Navbar currentView={'HUB'} onBack={function (): void {
                throw new Error('Function not implemented.');
            }} />
            <main className="min-h-screen bg-slate-950 text-white overflow-hidden">
                <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>

                {/* Animated Background */}
                {/* <FloatingOrb delay={0} size="w-96 h-96" position="top-0 -right-48" /> */}
                <FloatingOrb delay={2} size="w-72 h-72" position="bottom-20 -left-36" />

                {/* Header */}
                <section className="pt-32 pb-16 px-6 relative z-10">
                    <div className="container mx-auto max-w-4xl">
                        <div
                            className="text-center"
                            style={{
                                transform: `translateY(${scrollY * 0.3}px)`,
                            }}
                        >
                            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-linear-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                                Partnership Opportunities
                            </h1>
                            <p className="text-xl text-slate-300 mb-8">
                                Grow your business by partnering with Vessel Labs
                            </p>
                        </div>
                    </div>
                </section>

                {/* Partner Types */}
                <section className="py-20 px-6 relative z-10">
                    <div className="container mx-auto max-w-6xl">
                        <h2 className="text-4xl font-bold text-center mb-12">Partner Programs</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {partnerTypes.map((partner, idx) => (
                                <PartnerCard key={idx} partner={partner} delay={idx * 0.1} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* Key Benefits */}
                <section className="py-20 px-6 relative z-10">
                    <div className="container mx-auto max-w-5xl">
                        <h2 className="text-4xl font-bold mb-12 text-center">Why Partner With Us?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <BenefitHighlight
                                icon={TrendingUp}
                                title="Revenue Growth"
                                description="Expand your service offerings and increase revenue streams"
                            />
                            <BenefitHighlight
                                icon={Zap}
                                title="Quick Integration"
                                description="Easy integration with comprehensive technical support"
                            />
                            <BenefitHighlight
                                icon={Handshake}
                                title="Strategic Support"
                                description="Dedicated partner managers for your success"
                            />
                            <BenefitHighlight
                                icon={Users}
                                title="Community"
                                description="Access to an active partner community and events"
                            />
                            <BenefitHighlight
                                icon={Award}
                                title="Recognition"
                                description="Get recognized and promoted through our channels"
                            />
                            <BenefitHighlight
                                icon={Globe}
                                title="Global Reach"
                                description="Expand to new markets with our global presence"
                            />
                        </div>
                    </div>
                </section>

                {/* Existing Partners */}
                <section className="py-20 px-6 relative z-10">
                    <div className="container mx-auto max-w-5xl">
                        <h2 className="text-4xl font-bold text-center mb-12">Our Partner Ecosystem</h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                            {partnerCompanies.map((company, idx) => (
                                <PartnerLogo key={idx} name={company} delay={idx * 0.05} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* Partnership Requirements */}
                <section className="py-20 px-6 relative z-10">
                    <div className="container mx-auto max-w-3xl">
                        <h2 className="text-4xl font-bold mb-12 text-center">How It Works</h2>
                        <div className="space-y-6">
                            {[
                                { step: '01', title: 'Apply', description: 'Submit your partnership application through our partner portal' },
                                { step: '02', title: 'Review', description: 'Our team evaluates your application and conducts initial discussions' },
                                { step: '03', title: 'Onboard', description: 'Get set up with training, resources, and dedicated support' },
                                { step: '04', title: 'Grow', description: 'Start generating revenue and growing together with Vessel Labs' },
                            ].map((item, idx) => (
                                <div key={idx} className="group flex gap-6 p-6 bg-slate-800/30 rounded-lg border border-slate-700/50 hover:border-blue-400/50 hover:bg-slate-700/30 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/10">
                                    <div className="shrink-0">
                                        <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-500/10 border border-blue-400/30 group-hover:bg-blue-500/20 group-hover:border-blue-400/50 transition-all">
                                            <span className="text-blue-400 font-bold text-lg">{item.step}</span>
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-400 transition-colors">{item.title}</h3>
                                        <p className="text-slate-300">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-20 px-6 relative z-10">
                    <div className="container mx-auto max-w-3xl text-center">
                        <h2 className="text-4xl font-bold mb-6">Ready to Partner?</h2>
                        <p className="text-xl text-slate-300 mb-8">
                            Let's discuss how we can work together to create mutual success.
                        </p>
                        <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-600/50">
                            Apply for Partnership
                        </button>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
