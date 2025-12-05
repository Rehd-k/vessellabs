'use client';

import React, { useState, useEffect } from 'react';
import { FileText, AlertCircle, CheckCircle, Scale } from 'lucide-react';

const FloatingOrb = ({ delay, size, position }: { delay: number; size: string; position: string }) => (
  <div
    className={`absolute ${size} ${position} rounded-full opacity-20 blur-3xl animate-pulse`}
    style={{
      animation: `pulse 4s ease-in-out ${delay}s infinite`,
      background: 'linear-gradient(135deg, #3B82F6, #8B5CF6)',
    }}
  />
);

interface TermsSection {
  title: string;
  subsections?: { subtitle: string; content: string }[];
  content?: string;
}

const TermsAccordion = ({ section, index, isOpen, onToggle }: { section: TermsSection; index: number; isOpen: boolean; onToggle: () => void }) => (
  <div className="group border border-slate-700/50 hover:border-blue-400/50 transition-all rounded-lg overflow-hidden">
    <button
      onClick={onToggle}
      className="w-full flex items-center justify-between p-6 bg-slate-800/30 hover:bg-slate-700/30 transition-all duration-300"
    >
      <h3 className="text-lg font-semibold text-left">{section.title}</h3>
      <svg
        className={`w-5 h-5 text-blue-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    </button>
    {isOpen && (
      <div
        className="px-6 py-4 bg-slate-900/50 border-t border-slate-700/50 space-y-4"
        style={{
          animation: `slideDown 0.3s ease-out forwards`,
        }}
      >
        {section.subsections ? (
          section.subsections.map((sub, idx) => (
            <div key={idx}>
              <h4 className="font-semibold text-blue-400 mb-2">{sub.subtitle}</h4>
              <p className="text-slate-300 leading-relaxed">{sub.content}</p>
            </div>
          ))
        ) : (
          <p className="text-slate-300 leading-relaxed">{section.content}</p>
        )}
      </div>
    )}
  </div>
);

export default function TermsOfServicePage() {
  const [scrollY, setScrollY] = useState(0);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const termsSections: TermsSection[] = [
    {
      title: '1. Acceptance of Terms',
      content: 'By accessing and using Vessel Labs ("the Service"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our service. We reserve the right to modify these terms at any time, and your continued use of the Service following such modifications constitutes your acceptance of the updated Terms of Service.',
    },
    {
      title: '2. User Accounts',
      subsections: [
        {
          subtitle: 'Account Registration',
          content: 'To use certain features of the Service, you must create an account and provide accurate, complete, and current information. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.',
        },
        {
          subtitle: 'Account Responsibility',
          content: 'You agree to notify us immediately of any unauthorized use of your account. We are not responsible for any loss or damage arising from your failure to maintain account security. You are solely responsible for all content posted and actions taken from your account.',
        },
      ],
    },
    {
      title: '3. Permitted Uses',
      subsections: [
        {
          subtitle: 'License Grant',
          content: 'We grant you a limited, non-exclusive, non-transferable license to use the Service for your personal or business purposes in accordance with these terms. This license does not include the right to reverse engineer, decompile, or create derivative works based on our software.',
        },
        {
          subtitle: 'Restrictions',
          content: 'You may not: (a) copy, reproduce, or distribute the Service or its content; (b) modify, adapt, or create derivative works; (c) use the Service for any illegal or unauthorized purpose; (d) harass, abuse, or harm other users; (e) attempt to gain unauthorized access to the Service or its systems.',
        },
      ],
    },
    {
      title: '4. Content & Intellectual Property',
      content: 'All content provided by Vessel Labs, including text, graphics, logos, and software, is our exclusive property or that of our content suppliers. You retain ownership of any content you upload, but grant us a worldwide license to use, reproduce, and distribute your content as necessary to provide the Service. You represent and warrant that you own or have obtained all necessary rights to any content you submit.',
    },
    {
      title: '5. Limitations of Liability',
      content: 'To the maximum extent permitted by law, Vessel Labs shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of or inability to use the Service. Our total liability shall not exceed the fees paid by you in the 12 months preceding the claim. Some jurisdictions do not allow limitations on liability, so this may not apply to you.',
    },
    {
      title: '6. Disclaimer of Warranties',
      content: 'The Service is provided on an "as-is" and "as-available" basis. We make no warranties, either express or implied, regarding the Service, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement. We do not warrant that the Service will be uninterrupted or error-free.',
    },
    {
      title: '7. Payment Terms',
      subsections: [
        {
          subtitle: 'Fees & Billing',
          content: 'You agree to pay all fees stated in your subscription plan. Fees are billed in advance on a monthly or annual basis depending on your plan. We reserve the right to change fees with 30 days notice.',
        },
        {
          subtitle: 'Refunds & Cancellations',
          content: 'All fees are non-refundable except as required by law. You may cancel your subscription at any time through your account settings. Cancellation takes effect at the end of your current billing cycle.',
        },
      ],
    },
    {
      title: '8. Termination',
      content: 'We may terminate or suspend your account and access to the Service immediately, without prior notice or liability, for any reason whatsoever, including if you breach these Terms of Service. You may terminate your account at any time by discontinuing use of the Service and canceling your subscription.',
    },
    {
      title: '9. Indemnification',
      content: 'You agree to indemnify and hold harmless Vessel Labs and its officers, employees, and agents from any claims, damages, losses, and expenses arising from your use of the Service or violation of these Terms of Service. This includes all attorney fees and court costs associated with defending such claims.',
    },
    {
      title: '10. Governing Law',
      content: 'These Terms of Service are governed by and construed in accordance with the laws of the State of California, United States, without regard to its conflict of law provisions. You agree to submit to the exclusive jurisdiction of the courts located in San Francisco, California.',
    },
    {
      title: '11. Severability',
      content: 'If any provision of these Terms of Service is found to be invalid or unenforceable, that provision shall be severed, and the remaining provisions shall remain in full force and effect to the maximum extent permitted by law.',
    },
    {
      title: '12. Entire Agreement',
      content: 'These Terms of Service, together with our Privacy Policy, constitute the entire agreement between you and Vessel Labs regarding the Service. Any previous agreements, understandings, or negotiations are superseded by this agreement.',
    },
    {
      title: '13. Contact Information',
      content: 'If you have any questions about these Terms of Service, please contact us at legal@vesselabs.com or write to us at Vessel Labs, San Francisco, CA, USA.',
    },
  ];

  return (
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
              Terms of Service
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
              <FileText className="w-8 h-8 text-blue-400 mb-4 group-hover:scale-125 transition-transform" />
              <h3 className="font-semibold mb-2">Clear Terms</h3>
              <p className="text-slate-300 text-sm">Our terms are written clearly and fairly</p>
            </div>

            <div className="group bg-linear-to-br from-slate-800/50 to-slate-900/50 rounded-lg p-6 border border-slate-700/50 hover:border-blue-400/50 transition-all transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10">
              <Scale className="w-8 h-8 text-blue-400 mb-4 group-hover:scale-125 transition-transform" />
              <h3 className="font-semibold mb-2">Fair & Legal</h3>
              <p className="text-slate-300 text-sm">We respect your rights and comply with law</p>
            </div>

            <div className="group bg-linear-to-br from-slate-800/50 to-slate-900/50 rounded-lg p-6 border border-slate-700/50 hover:border-blue-400/50 transition-all transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10">
              <CheckCircle className="w-8 h-8 text-blue-400 mb-4 group-hover:scale-125 transition-transform" />
              <h3 className="font-semibold mb-2">Your Security</h3>
              <p className="text-slate-300 text-sm">We protect your account and data</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Overview */}
      <section className="py-12 px-6 relative z-10">
        <div className="container mx-auto max-w-3xl">
          <div className="bg-blue-500/10 border border-blue-400/20 rounded-xl p-8 flex gap-4 hover:border-blue-400/50 transition-all">
            <AlertCircle className="w-6 h-6 text-blue-400 shrink-0 mt-1" />
            <div>
              <h2 className="text-xl font-bold mb-2">In Summary</h2>
              <p className="text-slate-300">
                By using Vessel Labs, you agree to these Terms of Service. You're responsible for your account security and the content you create. We provide the Service as-is and limit our liability. Both parties retain ownership of their respective intellectual property. For detailed information, see the full terms below.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Terms Sections */}
      <section className="py-20 px-6 relative z-10">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold mb-8">Full Terms & Conditions</h2>
          <div className="space-y-4">
            {termsSections.map((section, index) => (
              <TermsAccordion
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
          <h2 className="text-3xl font-bold mb-6">Questions About Our Terms?</h2>
          <p className="text-slate-300 mb-8">
            If you have any questions or concerns about our Terms of Service, please don't hesitate to contact us.
          </p>
          <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-8 mb-8">
            <p className="text-slate-300">📧 legal@vesselabs.com</p>
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
  );
}
