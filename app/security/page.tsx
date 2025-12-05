'use client';

import React, { useState, useEffect } from 'react';
import { Shield, Lock, Eye, Zap, CheckCircle, AlertTriangle, Key, BarChart3 } from 'lucide-react';

const FloatingOrb = ({ delay, size, position }: { delay: number; size: string; position: string }) => (
  <div
    className={`absolute ${size} ${position} rounded-full opacity-20 blur-3xl animate-pulse`}
    style={{
      animation: `pulse 4s ease-in-out ${delay}s infinite`,
      background: 'linear-gradient(135deg, #3B82F6, #8B5CF6)',
    }}
  />
);

interface SecurityFeature {
  icon: any;
  title: string;
  description: string;
}

const SecurityCard = ({ feature, delay }: { feature: SecurityFeature; delay: number }) => {
  const { icon: Icon, title, description } = feature;

  return (
    <div
      className="group bg-linear-to-br from-slate-800/50 to-slate-900/50 rounded-lg p-6 border border-slate-700/50 hover:border-blue-400/50 transition-all transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10"
      style={{
        animation: `slideUp 0.6s ease-out ${delay}s forwards`,
        opacity: 0,
      }}
    >
      <Icon className="w-8 h-8 text-blue-400 mb-4 group-hover:scale-125 group-hover:rotate-12 transition-transform" />
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-slate-300 text-sm leading-relaxed">{description}</p>
    </div>
  );
};

const ComplianceBadge = ({ name, delay }: { name: string; delay: number }) => (
  <div
    className="group bg-slate-800/50 border border-slate-700/50 rounded-lg p-4 text-center hover:bg-slate-700/50 hover:border-blue-400/50 transition-all transform hover:scale-110 hover:shadow-lg hover:shadow-blue-500/10"
    style={{
      animation: `slideUp 0.6s ease-out ${delay}s forwards`,
      opacity: 0,
    }}
  >
    <CheckCircle className="w-6 h-6 text-green-400 mx-auto mb-2 group-hover:scale-125 transition-transform" />
    <p className="font-semibold text-sm">{name}</p>
  </div>
);

const TimelineItem = ({ title, description, delay }: { title: string; description: string; delay: number }) => (
  <div
    className="relative pl-8 pb-8 border-l-2 border-blue-400/30 hover:border-blue-400 transition-colors group"
    style={{
      animation: `slideUp 0.6s ease-out ${delay}s forwards`,
      opacity: 0,
    }}
  >
    <div className="absolute -left-3.5 top-0 w-5 h-5 bg-blue-500 rounded-full border-4 border-slate-950 group-hover:shadow-lg group-hover:shadow-blue-500/50 transition-all" />
    <div className="bg-slate-800/50 p-4 rounded-lg hover:bg-slate-700/50 transition-all transform group-hover:scale-105 group-hover:shadow-xl group-hover:shadow-blue-500/10">
      <h4 className="font-semibold mb-1">{title}</h4>
      <p className="text-slate-300 text-sm">{description}</p>
    </div>
  </div>
);

export default function SecurityPage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const securityFeatures: SecurityFeature[] = [
    {
      icon: Lock,
      title: 'End-to-End Encryption',
      description: 'All data in transit and at rest is encrypted using industry-standard AES-256 encryption',
    },
    {
      icon: Shield,
      title: 'DDoS Protection',
      description: 'Advanced DDoS mitigation strategies protect our infrastructure from attacks',
    },
    {
      icon: Key,
      title: 'API Security',
      description: 'OAuth 2.0 and API key management with role-based access controls',
    },
    {
      icon: Eye,
      title: 'Monitoring & Logging',
      description: '24/7 security monitoring with comprehensive audit logs for all activities',
    },
    {
      icon: Zap,
      title: 'Intrusion Detection',
      description: 'Real-time intrusion detection and prevention systems',
    },
    {
      icon: BarChart3,
      title: 'Vulnerability Management',
      description: 'Regular penetration testing and vulnerability assessments',
    },
  ];

  const complianceStandards = [
    'SOC 2 Type II',
    'GDPR Compliant',
    'HIPAA Ready',
    'ISO 27001',
    'CCPA Compliant',
    'PCI DSS',
    'TISAX Certified',
    'ISO 9001',
  ];

  const securityTimeline = [
    {
      title: 'User Authentication',
      description: 'Multi-factor authentication (MFA) with TOTP, SMS, and hardware key support',
    },
    {
      title: 'Access Control',
      description: 'Role-based access control (RBAC) and fine-grained permission management',
    },
    {
      title: 'Data Protection',
      description: 'Automated backups, disaster recovery, and data residency options',
    },
    {
      title: 'Security Updates',
      description: 'Automatic security patches and proactive vulnerability management',
    },
  ];

  return (
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
      <FloatingOrb delay={0} size="w-96 h-96" position="top-0 -right-48" />
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
              Security First
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              Enterprise-grade security to protect your data
            </p>
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="py-12 px-6 relative z-10">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-linear-to-r from-green-500/10 to-emerald-500/10 border border-green-400/20 rounded-xl p-8 flex gap-4 hover:border-green-400/50 transition-all">
            <CheckCircle className="w-6 h-6 text-green-400 shrink-0 mt-1" />
            <div>
              <h2 className="text-xl font-bold mb-2">Security is Our Priority</h2>
              <p className="text-slate-300">
                We implement defense-in-depth strategies, conduct regular security audits, and maintain the highest standards of data protection to ensure your information is always safe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-20 px-6 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12">Security Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {securityFeatures.map((feature, idx) => (
              <SecurityCard key={idx} feature={feature} delay={idx * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Compliance & Certifications */}
      <section className="py-20 px-6 relative z-10">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold text-center mb-12">Compliance & Certifications</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {complianceStandards.map((standard, idx) => (
              <ComplianceBadge key={idx} name={standard} delay={idx * 0.05} />
            ))}
          </div>
        </div>
      </section>

      {/* Security Measures */}
      <section className="py-20 px-6 relative z-10">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Security Measures</h2>
          <div className="space-y-6">
            {securityTimeline.map((item, idx) => (
              <TimelineItem key={idx} {...item} delay={idx * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="py-20 px-6 relative z-10">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold mb-12 text-center">Enterprise Infrastructure</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-linear-to-br from-blue-500/10 to-purple-500/10 border border-blue-400/20 rounded-xl p-8 hover:border-blue-400/50 transition-all transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10">
              <h3 className="text-2xl font-bold mb-4">Global Data Centers</h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                  Multiple availability zones for redundancy
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                  Automatic failover and recovery
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                  99.99% uptime SLA
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                  Data residency options
                </li>
              </ul>
            </div>

            <div className="bg-linear-to-br from-blue-500/10 to-purple-500/10 border border-blue-400/20 rounded-xl p-8 hover:border-blue-400/50 transition-all transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10">
              <h3 className="text-2xl font-bold mb-4">Incident Response</h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                  24/7 security operations center
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                  Rapid response to security events
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                  Transparent communication
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                  Continuous improvement process
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Security Disclosure */}
      <section className="py-20 px-6 relative z-10">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl font-bold mb-12 text-center">Responsible Disclosure</h2>
          <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8 hover:border-blue-400/50 transition-all">
            <p className="text-slate-300 mb-6">
              We take security vulnerabilities seriously. If you discover a security issue, please responsibly disclose it to our security team rather than posting it publicly.
            </p>
            <div className="bg-slate-900/50 p-6 rounded-lg mb-6 border border-slate-700/50">
              <p className="text-slate-300 font-semibold mb-2">📧 Report Security Issues:</p>
              <p className="text-blue-400">security@vesselabs.com</p>
            </div>
            <p className="text-slate-300 text-sm">
              Our security team will acknowledge receipt within 24 hours and work with you on resolution. Please include as much detail as possible about the vulnerability.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 relative z-10">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Trust Your Data With Us?</h2>
          <p className="text-xl text-slate-300 mb-8">
            Experience enterprise-grade security for your business.
          </p>
          <a
            href="/request-demo"
            className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-600/50"
          >
            Request Demo
          </a>
        </div>
      </section>
    </main>
  );
}
