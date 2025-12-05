'use client';

import type { Metadata } from 'next';
import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, Zap, Clock } from 'lucide-react';
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

const ContactCard = ({ icon: Icon, title, content, delay }: { icon: any; title: string; content: string; delay: number }) => (
    <div
        className="group bg-linear-to-br from-slate-800/50 to-slate-900/50 rounded-lg p-6 border border-slate-700/50 hover:border-blue-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10"
        style={{
            animation: `slideUp 0.6s ease-out ${delay}s forwards`,
            opacity: 0,
        }}
    >
        <Icon className="w-8 h-8 text-blue-400 mb-4 group-hover:scale-125 group-hover:rotate-12 transition-transform" />
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-slate-300">{content}</p>
    </div>
);

interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export default function ContactPage() {
    const [scrollY, setScrollY] = useState(0);
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [submitted, setSubmitted] = useState(false);
    const [errors, setErrors] = useState<Partial<FormData>>({});

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name as keyof FormData]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const validateForm = () => {
        const newErrors: Partial<FormData> = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.email.trim()) newErrors.email = 'Email is required';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email';
        if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
        if (!formData.message.trim()) newErrors.message = 'Message is required';
        return newErrors;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newErrors = validateForm();

        if (Object.keys(newErrors).length === 0) {
            setSubmitted(true);
            setFormData({ name: '', email: '', subject: '', message: '' });
            setTimeout(() => setSubmitted(false), 3000);
        } else {
            setErrors(newErrors);
        }
    };

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
        
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
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
                                Get in Touch
                            </h1>
                            <p className="text-xl text-slate-300">
                                Have questions? We'd love to hear from you. Send us a message!
                            </p>
                        </div>
                    </div>
                </section>

                {/* Contact Info Cards */}
                <section className="py-20 px-6 relative z-10">
                    <div className="container mx-auto max-w-5xl">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <ContactCard icon={Mail} title="Email" content="hello@vesselabs.org" delay={0} />
                            <ContactCard icon={Phone} title="Phone" content="+234 812 0766 716" delay={0.1} />
                            <ContactCard icon={MapPin} title="Address" content="Lekki, Lagos, NIgeria" delay={0.2} />
                        </div>
                    </div>
                </section>

                {/* Main Content */}
                <section className="py-20 px-6 relative z-10">
                    <div className="container mx-auto max-w-5xl">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            {/* Contact Form */}
                            <div
                                style={{
                                    animation: `slideIn 0.6s ease-out forwards`,
                                }}
                            >
                                <h2 className="text-3xl font-bold mb-8">Send us a Message</h2>

                                {submitted && (
                                    <div className="mb-6 p-4 bg-green-500/10 border border-green-400/30 rounded-lg animate-bounce">
                                        <p className="text-green-400 flex items-center gap-2">
                                            <Zap className="w-4 h-4" />
                                            Thank you! We'll get back to you soon.
                                        </p>
                                    </div>
                                )}

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label className="block text-sm font-medium mb-2">Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className={`w-full px-4 py-3 bg-slate-800/50 border rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${errors.name ? 'border-red-500' : 'border-slate-700/50 hover:border-slate-600'
                                                }`}
                                            placeholder="Your name"
                                        />
                                        {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium mb-2">Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className={`w-full px-4 py-3 bg-slate-800/50 border rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${errors.email ? 'border-red-500' : 'border-slate-700/50 hover:border-slate-600'
                                                }`}
                                            placeholder="your@email.com"
                                        />
                                        {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium mb-2">Subject</label>
                                        <input
                                            type="text"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            className={`w-full px-4 py-3 bg-slate-800/50 border rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${errors.subject ? 'border-red-500' : 'border-slate-700/50 hover:border-slate-600'
                                                }`}
                                            placeholder="Message subject"
                                        />
                                        {errors.subject && <p className="text-red-400 text-sm mt-1">{errors.subject}</p>}
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium mb-2">Message</label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows={5}
                                            className={`w-full px-4 py-3 bg-slate-800/50 border rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none ${errors.message ? 'border-red-500' : 'border-slate-700/50 hover:border-slate-600'
                                                }`}
                                            placeholder="Tell us more..."
                                        />
                                        {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-600/50 flex items-center justify-center gap-2"
                                    >
                                        <Send className="w-4 h-4" />
                                        Send Message
                                    </button>
                                </form>
                            </div>

                            {/* Side Info */}
                            <div
                                style={{
                                    animation: `slideUp 0.6s ease-out 0.1s forwards`,
                                    opacity: 0,
                                }}
                            >
                                <div className="bg-linear-to-br from-blue-500/10 to-purple-500/10 border border-blue-400/20 rounded-xl p-8 hover:border-blue-400/50 transition-all">
                                    <h3 className="text-2xl font-bold mb-6">Quick Response</h3>

                                    <div className="space-y-6">
                                        <div className="flex gap-4">
                                            <Clock className="w-6 h-6 text-blue-400 shrink-0 mt-1" />
                                            <div>
                                                <h4 className="font-semibold mb-1">Business Hours</h4>
                                                <p className="text-slate-300 text-sm">Monday - Friday, 9 AM - 6 PM PST</p>
                                            </div>
                                        </div>

                                        <div className="flex gap-4">
                                            <Zap className="w-6 h-6 text-blue-400 shrink-0 mt-1" />
                                            <div>
                                                <h4 className="font-semibold mb-1">Response Time</h4>
                                                <p className="text-slate-300 text-sm">We'll get back to you within 24 hours</p>
                                            </div>
                                        </div>

                                        <div className="pt-6 border-t border-slate-700">
                                            <h4 className="font-semibold mb-4">Other Ways to Reach Us</h4>
                                            <ul className="space-y-3">
                                                <li>
                                                    <p className="text-slate-400 text-sm">📧 Support: support@vesselabs.com</p>
                                                </li>
                                                <li>
                                                    <p className="text-slate-400 text-sm">🤝 Partnerships: partners@vesselabs.com</p>
                                                </li>
                                                <li>
                                                    <p className="text-slate-400 text-sm">💼 Sales: sales@vesselabs.com</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Social Links */}
                                <div className="mt-8 flex gap-4">
                                    {['Twitter', 'LinkedIn', 'GitHub', 'Discord'].map((social) => (
                                        <button
                                            key={social}
                                            className="group flex-1 py-3 px-4 bg-slate-800/50 border border-slate-700/50 rounded-lg hover:bg-slate-700/50 hover:border-blue-400/50 transition-all duration-300 transform hover:scale-110 text-sm font-medium hover:text-blue-400"
                                        >
                                            {social}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Navbar currentView={'HUB'} onBack={function (): void {
                throw new Error('Function not implemented.');
            }} />
        </>
    );
}
