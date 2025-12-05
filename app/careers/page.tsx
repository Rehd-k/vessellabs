'use client';

import type { Metadata } from 'next';
import React, { useState, useEffect } from 'react';
import { Briefcase, MapPin, Users, Zap, Heart, Star } from 'lucide-react';
import Link from 'next/link';
import { Footer } from '../component/sections';
import { Navbar } from '../component/Navbar';



interface JobListing {
    id: number;
    title: string;
    department: string;
    location: string;
    type: string;
    description: string;
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

const BenefitCard = ({ icon: Icon, title, description }: { icon: any; title: string; description: string }) => (
    <div className="group bg-slate-800/50 rounded-lg p-6 hover:bg-slate-700/50 transition-all duration-300 border border-slate-700/50 hover:border-blue-400/50 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10">
        <Icon className="w-6 h-6 text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-slate-300 text-sm">{description}</p>
    </div>
);

const JobCard = ({ job, delay }: { job: JobListing; delay: number }) => {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className="group bg-linear-to-br from-slate-800/50 to-slate-900/50 rounded-lg p-6 border border-slate-700/50 hover:border-blue-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10 cursor-pointer"
            style={{
                animation: `slideUp 0.6s ease-out ${delay}s forwards`,
                opacity: 0,
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <div className="flex items-start justify-between mb-4">
                <div>
                    <h3 className="text-xl font-bold mb-1 group-hover:text-blue-400 transition-colors">{job.title}</h3>
                    <p className="text-slate-400 text-sm">{job.department}</p>
                </div>
                <Briefcase className="w-5 h-5 text-blue-400 opacity-0 group-hover:opacity-100 transition-all transform group-hover:scale-110" />
            </div>

            <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2 text-slate-300">
                    <MapPin className="w-4 h-4 text-slate-500" />
                    <span className="text-sm">{job.location}</span>
                </div>
                <div className="inline-block px-3 py-1 bg-blue-500/10 border border-blue-400/30 rounded text-blue-400 text-xs font-medium group-hover:bg-blue-500/20 transition-colors">
                    {job.type}
                </div>
            </div>

            <p className="text-slate-300 text-sm mb-4 line-clamp-2 group-hover:line-clamp-none transition-all">
                {job.description}
            </p>

            <button className="w-full py-2 px-4 bg-blue-600/0 group-hover:bg-blue-600 border border-blue-400/30 group-hover:border-blue-400 rounded font-semibold transition-all duration-300 text-blue-400 group-hover:text-white">
                View Details
            </button>
        </div>
    );
};

export default function CareersPage() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const jobs: JobListing[] = [
        {
            id: 1,
            title: 'Senior Product Engineer',
            department: 'Engineering',
            location: 'San Francisco, CA',
            type: 'Full-time',
            description: 'Lead the development of our core platform and mentor junior engineers.',
        },
        {
            id: 2,
            title: 'Product Manager',
            department: 'Product',
            location: 'New York, NY',
            type: 'Full-time',
            description: 'Shape the future of Vessel Labs by owning product strategy.',
        },
        {
            id: 3,
            title: 'UX/UI Designer',
            department: 'Design',
            location: 'Remote',
            type: 'Full-time',
            description: 'Create beautiful and intuitive interfaces for millions of users.',
        },
        {
            id: 4,
            title: 'Sales Executive',
            department: 'Sales',
            location: 'London, UK',
            type: 'Full-time',
            description: 'Build relationships and close deals with enterprise clients.',
        },
        {
            id: 5,
            title: 'DevOps Engineer',
            department: 'Infrastructure',
            location: 'Remote',
            type: 'Full-time',
            description: 'Manage and scale our cloud infrastructure to support growth.',
        },
        {
            id: 6,
            title: 'Customer Success Manager',
            department: 'Customer Success',
            location: 'Austin, TX',
            type: 'Full-time',
            description: 'Ensure our customers achieve their goals and maximize ROI.',
        },
    ];

    const benefits = [
        { icon: Heart, title: 'Health & Wellness', description: 'Comprehensive health insurance and wellness program' },
        { icon: Zap, title: 'Professional Growth', description: 'Unlimited learning budget and career development' },
        { icon: Star, title: 'Flexible Work', description: 'Remote-first culture with flexible working hours' },
        { icon: Users, title: 'Great Team', description: 'Work with brilliant minds from around the world' },
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
                                Join Our Team
                            </h1>
                            <p className="text-xl text-slate-300 mb-8">
                                Help us build the future of enterprise software
                            </p>
                        </div>
                    </div>
                </section>

                {/* Benefits Section */}
                <section className="py-20 px-6 relative z-10">
                    <div className="container mx-auto max-w-5xl">
                        <h2 className="text-4xl font-bold text-center mb-12">Why Join Vessel Labs?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {benefits.map((benefit, idx) => (
                                <BenefitCard key={idx} {...benefit} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* Culture Section */}
                <section className="py-20 px-6 relative z-10">
                    <div className="container mx-auto max-w-3xl">
                        <div className="bg-linear-to-r from-blue-500/10 to-purple-500/10 border border-blue-400/20 rounded-xl p-12 hover:border-blue-400/50 transition-all">
                            <h2 className="text-3xl font-bold mb-6">Our Culture</h2>
                            <p className="text-slate-300 mb-4">
                                At Vessel Labs, we believe that great products come from great people. We foster a culture of innovation,
                                collaboration, and continuous learning. Our team members are encouraged to take ownership, share ideas, and
                                grow both professionally and personally.
                            </p>
                            <p className="text-slate-300">
                                We're committed to building a diverse and inclusive workplace where everyone can thrive and make an impact.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Open Positions */}
                <section className="py-20 px-6 relative z-10">
                    <div className="container mx-auto max-w-5xl">
                        <h2 className="text-4xl font-bold mb-12 text-center">Open Positions</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {jobs.map((job, idx) => (
                                <JobCard key={job.id} job={job} delay={idx * 0.1} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 px-6 relative z-10">
                    <div className="container mx-auto max-w-3xl text-center">
                        <h2 className="text-4xl font-bold mb-6">Don't see the right fit?</h2>
                        <p className="text-xl text-slate-300 mb-8">
                            Send us your CV and let us know what you're passionate about. We're always looking for talented people.
                        </p>
                        <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-600/50">
                            Send Your CV
                        </button>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
