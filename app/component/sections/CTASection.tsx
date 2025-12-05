export const CTASection = () => {
  return (
    <section className="bg-slate-900 text-white py-24 border-t border-slate-800">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to unify your business?</h2>
        <p className="text-slate-400 text-xl mb-10 max-w-2xl mx-auto">Join 50,000+ companies using NexusSuite to grow faster and smarter.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-[#3B82F6] text-white text-lg font-bold rounded-xl hover:bg-blue-600 transition-all shadow-lg shadow-blue-900/50">
            Start Your Free Trial
          </button>
          <button className="px-8 py-4 bg-transparent border border-slate-600 text-white text-lg font-semibold rounded-xl hover:bg-slate-800 transition-all">
            Schedule Demo
          </button>
        </div>
      </div>
    </section>
  );
};
