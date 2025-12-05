/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, ShoppingCart, BarChart3, Package, FileText, Settings, ArrowRight, CheckCircle, TrendingUp, DollarSign, Truck, Tag, Activity, Zap } from 'lucide-react';

// --- APP ECOSYSTEM DIAGRAM ---
// Interactive grid showing how apps connect
export const AppEcosystemDiagram: React.FC = () => {
  const [activeApp, setActiveApp] = useState<string | null>('crm');
  
  const apps = [
      { id: 'crm', label: 'CRM', icon: Users, color: 'bg-blue-500', connectsTo: ['sales', 'marketing', 'support'] },
      { id: 'sales', label: 'Sales', icon: ShoppingCart, color: 'bg-emerald-500', connectsTo: ['inventory', 'accounting', 'crm', 'analytics'] },
      { id: 'inventory', label: 'Inventory', icon: Package, color: 'bg-amber-500', connectsTo: ['sales', 'mrp', 'distribution'] },
      { id: 'accounting', label: 'Accounting', icon: DollarSign, color: 'bg-indigo-500', connectsTo: ['sales', 'hr', 'logistics'] },
      { id: 'hr', label: 'HR', icon: FileText, color: 'bg-rose-500', connectsTo: ['accounting'] },
      { id: 'marketing', label: 'Marketing', icon: BarChart3, color: 'bg-purple-500', connectsTo: ['crm', 'analytics'] },
      { id: 'mrp', label: 'MRP', icon: Activity, color: 'bg-slate-600', connectsTo: ['inventory', 'manufacturing'] },
      { id: 'analytics', label: 'Analytics', icon: BarChart3, color: 'bg-sky-500', connectsTo: ['sales', 'marketing', 'crm'] },
      { id: 'support', label: 'Support', icon: CheckCircle, color: 'bg-cyan-500', connectsTo: ['crm'] },
      { id: 'distribution', label: 'Distribution', icon: Truck, color: 'bg-amber-600', connectsTo: ['inventory', 'logistics'] },
      { id: 'logistics', label: 'Logistics', icon: Truck, color: 'bg-amber-400', connectsTo: ['distribution', 'accounting'] },
      { id: 'manufacturing', label: 'Manufacturing', icon: Package, color: 'bg-indigo-700', connectsTo: ['mrp', 'inventory'] },
      { id: 'realestate', label: 'Real Estate', icon: Tag, color: 'bg-cyan-600', connectsTo: ['analytics'] },
  ];

  const currentApp = apps.find(a => a.id === activeApp);

  return (
    <div className="flex flex-col items-center p-8 bg-white rounded-xl shadow-lg border border-slate-200 my-8">
      <h3 className="font-display text-xl mb-4 text-slate-800 font-bold">Integrated App Ecosystem</h3>
      <p className="text-sm text-slate-500 mb-8 text-center max-w-md">
        Click an app to see how data flows instantly across your organization. No connectors or APIs needed.
      </p>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:relative w-full ">
         {apps.map(app => {
             const isConnected = currentApp?.connectsTo.includes(app.id);
             const isActive = activeApp === app.id;
             
             return (
                 <motion.button
                    key={app.id}
                    onClick={() => setActiveApp(app.id)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`relative p-4 rounded-xl border-2 flex flex-col items-center gap-2 transition-all duration-300 ${
                        isActive 
                        ? `border-${app.color.replace('bg-', '')} shadow-md bg-slate-50` 
                        : isConnected 
                            ? 'border-slate-300 opacity-100 bg-white' 
                            : 'border-slate-100 opacity-40 grayscale'
                    }`}
                 >
                    <div className={`p-3 rounded-full text-white ${app.color}`}>
                        <app.icon size={20} />
                    </div>
                    <span className="text-sm font-semibold text-slate-700">{app.label}</span>
                    {/* Animated connection indicator for connected apps */}
                    {isConnected && !isActive && (
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: [0, 1.05, 0.95], opacity: 1 }}
                            transition={{ repeat: Infinity, duration: 1.8, repeatDelay: 0.6 }}
                            className="absolute -top-2 -right-2 z-20"
                        >
                            <div className={`w-6 h-6 rounded-full flex items-center justify-center text-white ${app.color} shadow`}> 
                                <ArrowRight size={12} />
                            </div>
                        </motion.div>
                    )}
                 </motion.button>
             )
         })}
      </div>

      <div className="mt-8 p-4 bg-slate-50 rounded-lg border border-slate-200 w-full max-w-lg min-h-20">
          <AnimatePresence mode='wait'>
            <motion.div
                key={activeApp}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-center"
            >
                <span className="font-bold text-slate-800">{currentApp?.label} Module:</span>
                <span className="text-slate-600 ml-2 text-sm">
                    {activeApp === 'crm' && "Centralizes customer data and contact history. Syncs with Sales, Support, and Marketing."}
                    {activeApp === 'sales' && "Converts quotes to orders and invoices. Pushes revenue to Accounting and signals Inventory."}
                    {activeApp === 'inventory' && "Real-time stock tracking with reorder triggers and distribution handoffs."}
                    {activeApp === 'accounting' && "Automated bookkeeping, multi-entity consolidation, and audit-ready reporting."}
                    {activeApp === 'hr' && "Manages payroll, benefits, and expense approvals that feed Accounting."}
                    {activeApp === 'marketing' && "Tracks campaign ROI and funnels qualified leads into CRM and Sales."}
                    {activeApp === 'mrp' && "Plans material requirements, schedules production, and syncs parts with Inventory."}
                    {activeApp === 'analytics' && "Aggregates cross-app telemetry to surface revenue, churn, and operational KPIs."}
                    {activeApp === 'support' && "Ticketing and SLA management that references customer records in CRM."}
                    {activeApp === 'distribution' && "Coordinates fulfillment across distribution centers and hands off to Logistics."}
                    {activeApp === 'logistics' && "Route planning, carrier orchestration, and live shipment ETAs for customers."}
                    {activeApp === 'manufacturing' && "Orchestrates work orders, quality gates, and integrates with MRP for throughput."}
                    {activeApp === 'realestate' && "Manages listings, leases, and property maintenance workflows across portfolios."}
                </span>
            </motion.div>
          </AnimatePresence>
      </div>
    </div>
  );
};

// --- WORKFLOW AUTOMATION DIAGRAM ---
export const WorkflowAutomationDiagram: React.FC = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
        setStep(s => (s + 1) % 4);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const stages = [
      { label: "Sales Order", icon: ShoppingCart },
      { label: "Check Stock", icon: Package },
      { label: "Delivery", icon: Settings }, // Settings icon as placeholder for logistics/gears
      { label: "Invoice", icon: FileText }
  ];

  return (
    <div className="flex flex-col items-center p-8 bg-slate-900 rounded-xl border border-slate-700 my-8 shadow-2xl">
      <h3 className="font-display text-xl mb-4 text-white font-bold">Automated Workflows</h3>
      <p className="text-sm text-slate-400 mb-8 text-center max-w-md">
        Watch a single transaction trigger actions across multiple departments automatically.
      </p>

      <div className="flex items-center justify-between w-full max-w-2xl relative">
          {/* Progress Bar Background */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-700 -translate-y-1/2 z-0"></div>
          
          {/* Active Progress Bar */}
          <motion.div 
            className="absolute top-1/2 left-0 h-1 bg-[#3B82F6] -translate-y-1/2 z-0"
            animate={{ width: `${(step / (stages.length - 1)) * 100}%` }}
            transition={{ duration: 0.5 }}
          />

          {stages.map((stage, idx) => {
              const isActive = idx === step;
              const isPast = idx < step;

              return (
                  <div key={idx} className="relative z-10 flex flex-col items-center gap-3">
                      <motion.div 
                        className={`w-12 h-12 rounded-full flex items-center justify-center border-4 transition-colors duration-300 ${isActive || isPast ? 'bg-[#3B82F6] border-slate-800 text-white' : 'bg-slate-800 border-slate-700 text-slate-500'}`}
                        animate={{ scale: isActive ? 1.2 : 1 }}
                      >
                          <stage.icon size={20} />
                      </motion.div>
                      <span className={`text-xs font-medium uppercase tracking-wider ${isActive ? 'text-white' : 'text-slate-500'}`}>{stage.label}</span>
                      
                      {isActive && (
                          <motion.div 
                            layoutId="active-indicator"
                            className="absolute -bottom-8 px-3 py-1 bg-[#06B6D4] text-slate-900 text-xs font-bold rounded-full whitespace-nowrap"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                          >
                              Processing...
                          </motion.div>
                      )}
                  </div>
              )
          })}
      </div>

      <div className="mt-12 p-4 bg-slate-800/50 rounded-lg border border-slate-700 w-full text-center">
          <p className="text-slate-300 text-sm font-mono">
              {step === 0 && "> New Order Received #1024. Triggering workflow..."}
              {step === 1 && "> Querying Inventory Database. Stock allocated."}
              {step === 2 && "> Generating Delivery Note. Notifying warehouse."}
              {step === 3 && "> Invoice #INV-1024 created. Email sent to client."}
          </p>
      </div>
    </div>
  );
};

// --- ROI/GROWTH CHART ---
export const ROIChart: React.FC = () => {
    const [view, setView] = useState<'efficiency' | 'cost'>('efficiency');
    
    return (
        <div className="flex flex-col md:flex-row gap-8 items-center p-8 bg-slate-50 rounded-xl my-8 border border-slate-200 shadow-sm">
            <div className="flex-1 min-w-60">
                <h3 className="font-display text-xl mb-2 text-slate-900 font-bold">Proven ROI</h3>
                <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                    Companies switching to NexusSuite reduce administrative overhead and software costs significantly within the first year.
                </p>
                
                <div className="flex gap-2 p-1 bg-white rounded-lg border border-slate-200 w-fit">
                    <button 
                        onClick={() => setView('efficiency')}
                        className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${view === 'efficiency' ? 'bg-[#3B82F6] text-white shadow-sm' : 'text-slate-500 hover:text-slate-900'}`}
                    >
                        Efficiency
                    </button>
                    <button 
                        onClick={() => setView('cost')}
                        className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${view === 'cost' ? 'bg-[#3B82F6] text-white shadow-sm' : 'text-slate-500 hover:text-slate-900'}`}
                    >
                        Cost Savings
                    </button>
                </div>

                <div className="mt-6 flex items-center gap-2 text-emerald-600 font-bold">
                    <TrendingUp size={20} />
                    <span>{view === 'efficiency' ? '3x Faster Processing' : '40% Lower IT Costs'}</span>
                </div>
            </div>
            
            <div className="relative w-full max-w-xs h-64 bg-white rounded-xl border border-slate-200 p-6 flex items-end justify-between gap-4">
                {/* Comparison Bar: Before */}
                <div className="flex-1 flex flex-col justify-end items-center gap-2">
                    <div className="text-xs font-bold text-slate-400 uppercase">Legacy</div>
                    <motion.div 
                        className="w-full bg-slate-300 rounded-t-md"
                        initial={{ height: "20%" }}
                        animate={{ height: view === 'efficiency' ? "30%" : "90%" }}
                        transition={{ type: "spring", stiffness: 60 }}
                    />
                </div>

                {/* Comparison Bar: After */}
                <div className="flex-1 flex flex-col justify-end items-center gap-2">
                    <div className="text-xs font-bold text-[#3B82F6] uppercase">Nexus</div>
                    <motion.div 
                        className="w-full bg-[#3B82F6] rounded-t-md relative overflow-hidden"
                        initial={{ height: "20%" }}
                        animate={{ height: view === 'efficiency' ? "90%" : "40%" }}
                        transition={{ type: "spring", stiffness: 60, delay: 0.1 }}
                    >
                        <div className="absolute inset-0 bg-linear-to-t from-black/10 to-transparent"></div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
