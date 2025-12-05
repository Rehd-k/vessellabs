import { Check } from "lucide-react";
import { ServerScene } from "../QuantumScene";

interface FeatureCardProps {
  title: string;
  desc: string;
  delay: string;
}

const FeatureCard = ({ title, desc, delay }: FeatureCardProps) => {
  return (
    <div 
      className="flex flex-col group p-6 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#3B82F6]/30 transition-all duration-300 w-full animate-fade-in-up" 
      style={{ animationDelay: delay }}
    >
      <div className="w-10 h-10 bg-[#F8FAFC] rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#3B82F6] group-hover:text-white transition-colors text-[#3B82F6]">
        <Check size={20} strokeWidth={3} />
      </div>
      <h3 className="font-sans font-bold text-xl text-slate-900 mb-2">{title}</h3>
      <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
    </div>
  );
};

export const InfrastructureSection = () => {
  return (
    <section className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-6 relative h-[400px]">
          <div className="absolute inset-0 bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-800">
            <ServerScene />
            <div className="absolute bottom-6 left-6 right-6 bg-slate-900/80 backdrop-blur text-white p-4 rounded-lg border border-slate-700">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">System Status</span>
              </div>
              <div className="text-sm font-mono">99.99% Uptime • Enterprise Security</div>
            </div>
          </div>
        </div>
        <div className="md:col-span-6">
          <div className="inline-block px-3 py-1 bg-slate-200 text-slate-700 text-xs font-bold rounded-md mb-6 uppercase tracking-wider">
            Infrastructure
          </div>
          <h2 className="text-4xl font-bold mb-6 text-slate-900">Cloud-Native & Secure</h2>
          <p className="text-lg text-slate-600 mb-6 leading-relaxed">
            Host on our secure cloud or on-premise. Your data is encrypted, backed up, and accessible from anywhere on any device.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
            <FeatureCard title="API First" desc="Connect to any third-party service with our robust REST API." delay="0s" />
            <FeatureCard title="Open Source" desc="Inspect the core code. Customize modules to fit your exact workflow." delay="0.1s" />
          </div>
        </div>
      </div>
    </section>
  );
};
