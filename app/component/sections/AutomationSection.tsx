import { WorkflowAutomationDiagram } from "../Diagrams";

export const AutomationSection = () => {
  return (
    <section id="automation" className="py-24 bg-slate-900 text-white overflow-hidden relative">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
        <div className="w-full h-full bg-linear-to-l from-blue-600 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <WorkflowAutomationDiagram />
          </div>
          <div className="order-1 lg:order-2">
            <div className="inline-block px-3 py-1 bg-slate-800 border border-slate-700 text-[#06B6D4] text-xs font-bold rounded-md mb-6 uppercase tracking-wider">
              Native Automation
            </div>
            <h2 className="text-4xl font-bold mb-6 text-white">Workflows That Just Work</h2>
            <p className="text-lg text-slate-400 mb-6 leading-relaxed">
              Stop manually copying data between spreadsheets. In NexusSuite, a sale automatically reserves stock, triggers a delivery order, and creates an invoice draft.
            </p>
            <p className="text-lg text-slate-400 leading-relaxed">
              Your team focuses on value-added work, while our automation engine handles the repetitive admin tasks in the background.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
