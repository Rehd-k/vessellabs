'use client';

import type { Metadata } from 'next';
import React, { useState, useEffect } from 'react';
import { ChevronDown, Lock, Eye, Share2 } from 'lucide-react';
import { Footer } from '../component/sections';
import { Navbar } from '../component/Navbar';



const FloatingOrb = ({ delay, size, position }: { delay: number; size: string; position: string }) => (
    <div
        className={`absolute ${size} ${position} rounded-full opacity-20 blur-3xl animate-pulse`}
        style={{
            animation: `pulse 4s ease-in-out ${delay}s infinite`,
            background: 'linear-gradient(135deg, #3B82F6, #8B5CF6)',
        }}
    />
);

interface PolicySection {
    title: string;
    content: string;
}

const AccordionItem = ({ section, index, isOpen, onToggle }: { section: PolicySection; index: number; isOpen: boolean; onToggle: () => void }) => (
    <div className="group border border-slate-700/50 hover:border-blue-400/50 transition-all rounded-lg overflow-hidden">
        <button
            onClick={onToggle}
            className="w-full flex items-center justify-between p-6 bg-slate-800/30 hover:bg-slate-700/30 transition-all duration-300"
        >
            <h3 className="text-lg font-semibold text-left">{section.title}</h3>
            <ChevronDown
                className={`w-5 h-5 text-blue-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
            />
        </button>
        {isOpen && (
            <div
                className="px-6 py-4 bg-slate-900/50 border-t border-slate-700/50"
                style={{
                    animation: `slideDown 0.3s ease-out forwards`,
                }}
            >
                <p className="text-slate-300 leading-relaxed">{section.content}</p>
            </div>
        )}
    </div>
);

export default function PrivacyPolicyPage() {
    const [scrollY, setScrollY] = useState(0);
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const policySections: PolicySection[] = [
        {
            title: '1. Information We Collect',
            content: 'We collect information you provide directly to us, such as when you create an account, subscribe to our services, or contact us for support. This includes your name, email address, company information, and payment details. We also automatically collect certain information about your device and usage patterns, including IP addresses, browser type, pages visited, and time spent on our platform. This data helps us improve our services and understand how users interact with Vessel Labs.',
        },
        {
            title: '2. How We Use Your Information',
            content: 'We use the information we collect to provide, maintain, and improve our services, process transactions, send you service-related announcements and support messages, respond to your inquiries, and send marketing communications (with your consent). We may also use your information to detect and prevent fraud, enforce our terms of service, and comply with legal obligations. All processing is done in accordance with applicable data protection regulations.',
        },
        {
            title: '3. Information Sharing & Disclosure',
            content: 'We do not sell or rent your personal information to third parties. We may share your information with service providers who assist us in operating our website and conducting our business, such as payment processors and cloud hosting providers. These vendors are contractually obligated to use your information only to provide services to us. We may also disclose information when required by law or when we believe in good faith that disclosure is necessary to protect our rights, your safety, or the safety of others.',
        },
        {
            title: '4. Data Security',
            content: 'We implement comprehensive security measures to protect your personal information, including encryption, secure socket layer (SSL) technology, and regular security audits. Our infrastructure is hosted on enterprise-grade cloud platforms with multiple layers of security. While we strive to protect your information, no security system is impenetrable. We encourage you to use strong passwords and to never share your login credentials with others.',
        },
        {
            title: '5. Your Privacy Rights',
            content: 'Depending on your location, you may have certain rights regarding your personal data, including the right to access, correct, delete, or port your data. You can manage your account preferences through your dashboard. To exercise these rights or submit a privacy request, please contact us at privacy@vesselabs.com. We will respond to valid requests within 30 days or as required by applicable law.',
        },
        {
            title: '6. Cookies & Tracking Technologies',
            content: 'We use cookies and similar tracking technologies to enhance your user experience and analyze how you use our platform. These include session cookies (which expire when you close your browser) and persistent cookies (which remain on your device). You can control cookie preferences through your browser settings. Please note that disabling cookies may affect the functionality of certain features of our platform.',
        },
        {
            title: '7. Third-Party Links',
            content: 'Our website may contain links to third-party websites and services that are not operated by us. This Privacy Policy applies only to information collected through our website. We are not responsible for the privacy practices of third-party websites. We encourage you to review the privacy policies of any third-party services before providing your personal information.',
        },
        {
            title: '8. International Data Transfers',
            content: 'Your information may be transferred to and processed in countries other than the country where you reside. These countries may have data protection laws that differ from your home country. By using our services, you consent to the transfer of your information to countries outside your country of residence, including the United States.',
        },
        {
            title: '9. Children\'s Privacy',
            content: 'Our services are not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information and terminate the child\'s account. Please contact us immediately if you believe we have collected information from a child under 13.',
        },
        {
            title: '10. Policy Updates',
            content: 'We may update this Privacy Policy periodically to reflect changes in our practices, technology, legal requirements, or other factors. We will notify you of any material changes by posting the updated policy on our website and updating the "Last Updated" date. Your continued use of our services following the posting of changes constitutes your acceptance of the revised Privacy Policy.',
        },
    ];

    return (
        <>
            <Navbar currentView={'HUB'} onBack={function (): void {
                throw new Error('Function not implemented.');
            }} />
            <main className="min-h-screen bg-slate-950 text-white overflow-hidden">
                <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
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
                                Privacy Policy
                            </h1>
                            <p className="text-xl text-slate-300">
                                Last Updated: December 2024
                            </p>
                        </div>
                    </div>
                </section>

                {/* Info Cards */}
                <section className="py-20 px-6 relative z-10">
                    <div className="container mx-auto max-w-5xl">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                            <div className="group bg-linear-to-br from-slate-800/50 to-slate-900/50 rounded-lg p-6 border border-slate-700/50 hover:border-blue-400/50 transition-all transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10">
                                <Lock className="w-8 h-8 text-blue-400 mb-4 group-hover:scale-125 transition-transform" />
                                <h3 className="font-semibold mb-2">Your Data is Safe</h3>
                                <p className="text-slate-300 text-sm">Enterprise-grade encryption protects all your information</p>
                            </div>

                            <div className="group bg-linear-to-br from-slate-800/50 to-slate-900/50 rounded-lg p-6 border border-slate-700/50 hover:border-blue-400/50 transition-all transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10">
                                <Eye className="w-8 h-8 text-blue-400 mb-4 group-hover:scale-125 transition-transform" />
                                <h3 className="font-semibold mb-2">Transparency First</h3>
                                <p className="text-slate-300 text-sm">We clearly explain how we collect and use your data</p>
                            </div>

                            <div className="group bg-linear-to-br from-slate-800/50 to-slate-900/50 rounded-lg p-6 border border-slate-700/50 hover:border-blue-400/50 transition-all transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10">
                                <Share2 className="w-8 h-8 text-blue-400 mb-4 group-hover:scale-125 transition-transform" />
                                <h3 className="font-semibold mb-2">Your Control</h3>
                                <p className="text-slate-300 text-sm">You have full control over your personal information</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Introduction */}
                <section className="py-12 px-6 relative z-10">
                    <div className="container mx-auto max-w-3xl">
                        <div className="bg-linear-to-r from-blue-500/10 to-purple-500/10 border border-blue-400/20 rounded-xl p-8 hover:border-blue-400/50 transition-all">
                            <h2 className="text-2xl font-bold mb-4">Our Commitment to Your Privacy</h2>
                            <p className="text-slate-300 leading-relaxed mb-4">
                                At Vessel Labs, we respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services.
                            </p>
                            <p className="text-slate-300 leading-relaxed">
                                Please read this Privacy Policy carefully. If you do not agree with our policies and practices, please do not use our services. By accessing and using Vessel Labs, you acknowledge that you have read, understood, and agree to be bound by all the terms of this Privacy Policy.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Policy Sections */}
                <section className="py-20 px-6 relative z-10">
                    <div className="container mx-auto max-w-3xl">
                        <h2 className="text-3xl font-bold mb-8">Policy Details</h2>
                        <div className="space-y-4">
                            {policySections.map((section, index) => (
                                <AccordionItem
                                    key={index}
                                    section={section}
                                    index={index}
                                    isOpen={openIndex === index}
                                    onToggle={() => setOpenIndex(openIndex === index ? null : index)}
                                />
                            ))}
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section className="py-20 px-6 relative z-10">
                    <div className="container mx-auto max-w-3xl text-center">
                        <h2 className="text-3xl font-bold mb-6">Questions About Our Privacy Policy?</h2>
                        <p className="text-slate-300 mb-8">
                            If you have any questions or concerns about our Privacy Policy or our privacy practices, please contact us at:
                        </p>
                        <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-8 mb-8">
                            <p className="text-slate-300 mb-2">📧 privacy@vesselabs.com</p>
                            <p className="text-slate-300">🏢 Vessel Labs, San Francisco, CA, USA</p>
                        </div>
                        <a
                            href="/contact"
                            className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-600/50"
                        >
                            Contact Us
                        </a>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
