'use client';

import React, { useState } from 'react';
import { DemoFormData, IndustryType } from '@/types';
import { Send, AlertCircle } from 'lucide-react';

interface DemoFormProps {
  industry: IndustryType;
  onSubmit?: (data: DemoFormData) => void;
}

export const DemoForm: React.FC<DemoFormProps> = ({ industry, onSubmit }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  
  const [formData, setFormData] = useState<DemoFormData>({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    industry: industry,
    companySize: '',
    challenges: '',
    timeline: 'within_30_days',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      // Validate form
      if (!formData.fullName || !formData.email || !formData.company) {
        throw new Error('Please fill in all required fields');
      }

      // Here you would typically send to your backend
      // For now, we'll just simulate success
      if (onSubmit) {
        onSubmit(formData);
      } else {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
      }

      setSuccess(true);
      // Reset form after success
      setFormData({
        fullName: '',
        company: '',
        email: '',
        phone: '',
        industry: industry,
        companySize: '',
        challenges: '',
        timeline: 'within_30_days',
        message: ''
      });

      // Clear success message after 5 seconds
      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-8 bg-white rounded-2xl border border-slate-200 shadow-lg">
      <h2 className="text-3xl font-bold text-slate-900 mb-2">Request a Demo</h2>
      <p className="text-slate-600 mb-8">Our team will reach out within 24 hours to schedule your personalized demo.</p>

      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
          <AlertCircle className="h-5 w-5 text-red-600 mt-0.5 shrink-0" />
          <p className="text-red-700 text-sm">{error}</p>
        </div>
      )}

      {success && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-green-700 font-medium">✓ Demo request submitted successfully! We'll be in touch soon.</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Full Name */}
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-slate-700 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all"
            placeholder="John Doe"
          />
        </div>

        {/* Company */}
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">
            Company Name *
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all"
            placeholder="Your Company Inc."
          />
        </div>

        {/* Email and Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all"
              placeholder="john@example.com"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all"
              placeholder="+234 0800 123 4524"
            />
          </div>
        </div>

        {/* Company Size */}
        <div>
          <label htmlFor="companySize" className="block text-sm font-medium text-slate-700 mb-2">
            Company Size
          </label>
          <select
            id="companySize"
            name="companySize"
            value={formData.companySize}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all bg-white"
          >
            <option value="">Select company size...</option>
            <option value="1-10">1-10 employees</option>
            <option value="11-50">11-50 employees</option>
            <option value="51-200">51-200 employees</option>
            <option value="201-500">201-500 employees</option>
            <option value="501-1000">501-1,000 employees</option>
            <option value="1000+">1,000+ employees</option>
          </select>
        </div>

        {/* Challenges */}
        <div>
          <label htmlFor="challenges" className="block text-sm font-medium text-slate-700 mb-2">
            What are your biggest operational challenges?
          </label>
          <textarea
            id="challenges"
            name="challenges"
            value={formData.challenges}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all resize-none"
            placeholder="Tell us about the specific challenges you're facing with your current systems..."
          />
        </div>

        {/* Timeline */}
        <div>
          <label htmlFor="timeline" className="block text-sm font-medium text-slate-700 mb-2">
            Implementation Timeline
          </label>
          <select
            id="timeline"
            name="timeline"
            value={formData.timeline}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all bg-white"
          >
            <option value="within_30_days">Within 30 days</option>
            <option value="1-3_months">1-3 months</option>
            <option value="3-6_months">3-6 months</option>
            <option value="6_plus_months">6+ months</option>
            <option value="exploring">Still exploring options</option>
          </select>
        </div>

        {/* Additional Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
            Additional Information
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={3}
            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all resize-none"
            placeholder="Anything else you'd like us to know?"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-bold py-3 px-6 rounded-lg transition-all flex items-center justify-center gap-2"
        >
          <Send className="h-5 w-5" />
          {isLoading ? 'Submitting...' : 'Request Demo'}
        </button>

        <p className="text-xs text-slate-500 text-center">
          We respect your privacy. Your information will only be used to contact you about your demo request.
        </p>
      </form>
    </div>
  );
};
