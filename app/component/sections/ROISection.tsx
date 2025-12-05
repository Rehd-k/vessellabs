import { ROIChart } from "../Diagrams";

export const ROISection = () => {
  return (
    <section id="growth" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-slate-900">Built for Scale</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Whether you are a startup of 5 or an enterprise of 5,000, NexusSuite scales with you. See the impact on efficiency and cost.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <ROIChart />
        </div>
      </div>
    </section>
  );
};
