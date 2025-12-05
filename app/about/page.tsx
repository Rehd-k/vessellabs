'use client';

import type { Metadata } from 'next';
import React, { useState, useEffect } from 'react';
import { Zap, Users, Globe, TrendingUp, Heart, Lightbulb } from 'lucide-react';
import Link from 'next/link';
import { Navbar } from '../component/Navbar';
import { Footer } from '../component/sections/Footer';



const AnimatedCounter = ({ end, duration = 2000 }: { end: number; duration?: number }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let startTime: number;
        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = (timestamp - startTime) / duration;

            if (progress < 1) {
                setCount(Math.floor(end * progress));
                requestAnimationFrame(animate);
            } else {
                setCount(end);
            }
        };

        requestAnimationFrame(animate);
    }, [end, duration]);

    return <span>{count.toLocaleString()}</span>;
};

const StatCard = ({ icon: Icon, label, value }: { icon: any; label: string; value: number }) => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div
            className={`group bg-linear-to-br from-slate-800/50 to-slate-900/50 rounded-xl p-6 hover:from-slate-700/50 hover:to-slate-800/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20`}
            onMouseEnter={() => setIsVisible(true)}
        >
            <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                    <Icon className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                    <p className="text-slate-300 text-sm">{label}</p>
                    <p className="text-2xl font-bold text-white">
                        {isVisible ? <AnimatedCounter end={value} /> : '0'}+
                    </p>
                </div>
            </div>
        </div>
    );
};

const FloatingOrb = ({ delay, size, position }: { delay: number; size: string; position: string }) => (
    <div
        className={`absolute ${size} ${position} rounded-full opacity-20 blur-3xl animate-pulse`}
        style={{
            animation: `pulse 4s ease-in-out ${delay}s infinite`,
            background: 'linear-gradient(135deg, #3B82F6, #8B5CF6)',
        }}
    />
);

const TeamMember = ({ name, role, delay }: { name: string; role: string; delay: number }) => (
    <div
        className="group bg-slate-200/50 rounded-lg p-6 hover:bg-slate-700/50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10 text-gray-600 hover:text-white"
        style={{
            animation: `slideUp 0.6s ease-out ${delay}s forwards`,
            opacity: 0,
        }}
    >
        <div className="w-12 h-12 bg-linear-to-br from-blue-400 to-purple-600 rounded-lg mb-4 group-hover:shadow-lg group-hover:shadow-blue-500/50 transition-all" />
        <h3 className=" font-semibold mb-1">{name}</h3>
        <p className="hover:text-slate-200  text-slate-700 text-sm">{role}</p>
    </div>
);

export default function AboutPage() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <Navbar currentView={'HUB'} onBack={() => { }} />
            <main className="min-h-screen overflow-hidden">
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
        
        @keyframes shimmer {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
      `}</style>

                {/* Animated Background Orbs */}
                {/* <FloatingOrb delay={0} size="w-96 h-96" position="top-0 -right-48" />*/}
                <FloatingOrb delay={2} size="w-72 h-72" position="bottom-20 -left-36" />

                {/* Header */}
                <section className="pt-32 pb-16 px-6 relative z-10">
                    <div className="container mx-auto max-w-4xl">
                        <div
                            className="text-center transform transition-all duration-500"
                            style={{
                                transform: `translateY(${scrollY * 0.3}px)`,
                            }}
                        >
                            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-linear-to-r text-gray-600 bg-clip-text">
                                About Vessel Labs
                            </h1>
                            <p className="text-xl text-slate-300 mb-8">
                                Transforming businesses through intelligent automation and cloud-native solutions
                            </p>
                        </div>
                    </div>
                </section>

                {/* Mission & Values */}
                <section className="py-20 px-6 relative z-10">
                    <div className="container mx-auto max-w-5xl">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                            <div className="group bg-linear-to-br from-blue-500/10 to-purple-500/10 border border-blue-400/20 rounded-xl p-8 hover:border-blue-400/50 transition-all duration-300 transform hover:scale-105">
                                <Lightbulb className="w-8 h-8 text-blue-400 mb-4 group-hover:animate-spin transition-all" />
                                <h3 className="text-2xl font-bold mb-3">Innovation First</h3>
                                <p className="text-slate-300">We push the boundaries of what's possible in enterprise software</p>
                            </div>

                            <div className="group bg-linear-to-br from-blue-500/10 to-purple-500/10 border border-blue-400/20 rounded-xl p-8 hover:border-blue-400/50 transition-all duration-300 transform hover:scale-105 delay-100">
                                <Users className="w-8 h-8 text-blue-400 mb-4" />
                                <h3 className="text-2xl font-bold mb-3">People Focused</h3>
                                <p className="text-slate-300">Our team and customers are at the heart of everything we do</p>
                            </div>

                            <div className="group bg-linear-to-br from-blue-500/10 to-purple-500/10 border border-blue-400/20 rounded-xl p-8 hover:border-blue-400/50 transition-all duration-300 transform hover:scale-105 delay-200">
                                <Globe className="w-8 h-8 text-blue-400 mb-4" />
                                <h3 className="text-2xl font-bold mb-3">Global Impact</h3>
                                <p className="text-slate-300">Serving industries across the world with localized solutions</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="py-20 px-6 relative z-10">
                    <div className="container mx-auto max-w-5xl">
                        <h2 className="text-4xl font-bold text-center mb-12">By The Numbers</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <StatCard icon={Zap} label="Industries Served" value={10} />
                            <StatCard icon={Users} label="Active Customers" value={500} />
                            <StatCard icon={TrendingUp} label="Revenue Growth" value={250} />
                            <StatCard icon={Heart} label="Team Members" value={120} />
                        </div>
                    </div>
                </section>

                {/* Team Section */}
                <section className="py-20 px-6 relative z-10">
                    <div className="container mx-auto max-w-5xl">
                        <h2 className="text-4xl font-bold mb-12 text-center">Leadership Team</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <TeamMember name="Sarah Chen" role="CEO & Founder" delay={0} />
                            <TeamMember name="Michael Torres" role="CTO" delay={0.1} />
                            <TeamMember name="Elena Rodriguez" role="Head of Product" delay={0.2} />
                            <TeamMember name="James Wilson" role="Head of Sales" delay={0.3} />
                        </div>
                    </div>
                </section>

                {/* Journey Timeline */}
                <section className="py-20 px-6 relative z-10">
                    <div className="container mx-auto max-w-3xl">
                        <h2 className="text-4xl font-bold mb-12 text-center">Our Journey</h2>
                        <div className="space-y-8">
                            {[
                                { year: '2020', title: 'Founded', desc: 'Vessel Labs is born with a mission to revolutionize enterprise software' },
                                { year: '2021', title: 'Series A', desc: 'Raised ... to expand team and product offerings' },
                                { year: '2022', title: 'Market Expansion', desc: 'Launched in 15 new states and added 10 industry verticals' },
                                { year: '2024', title: 'Global Leader', desc: 'Became the fastest-growing SaaS platform in the region' },
                            ].map((milestone, idx) => (
                                <div
                                    key={idx}
                                    className="relative pl-8 pb-8 border-l-2 border-blue-400/30 hover:border-blue-400 transition-colors group"
                                >
                                    <div className="absolute -left-3.5 top-0 w-5 h-5 bg-blue-500 rounded-full border-4 border-slate-950 group-hover:shadow-lg group-hover:shadow-blue-500/50 transition-all" />
                                    <div className="bg-slate-800/50 p-6 rounded-lg hover:bg-slate-700/50 transition-all transform group-hover:scale-105 group-hover:shadow-xl group-hover:shadow-blue-500/10">
                                        <p className="text-slate-200 font-semibold mb-2">{milestone.year}</p>
                                        <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                                        <p className="text-slate-300">{milestone.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 px-6 relative z-10">
                    <div className="container mx-auto max-w-3xl text-center">
                        <h2 className="text-4xl font-bold mb-6">Ready to Join Our Mission?</h2>
                        <p className="text-xl text-slate-300 mb-8">
                            Be part of a team transforming how businesses operate globally.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/careers"
                                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-600/50"
                            >
                                View Careers
                            </Link>
                            <Link
                                href="/request-demo"
                                className="px-8 py-3 bg-slate-800 hover:bg-slate-700 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 border border-slate-700"
                            >
                                Request Demo
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>

    );
}
