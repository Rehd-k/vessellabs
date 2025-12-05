import React, { useState } from 'react';
import { 
  Users, 
  MoreHorizontal, 
  CheckCircle2, 
  AlertCircle, 
  Clock, 
  MapPin, 
  Package,
  TrendingUp,
  DollarSign,
  Truck,
  BookOpen,
  Home,
  ShoppingCart as ShoppingCartIcon,
  Zap
} from 'lucide-react';
import { IndustryType } from '@/types';

// --- HEALTHCARE DEMO ---
export const HealthcareDemo: React.FC = () => {
  const [patients, setPatients] = useState([
    { id: 1, name: "Sarah Connor", status: "Critical", time: "10:42 AM", room: "ICU-04" },
    { id: 2, name: "James Bond", status: "Stable", time: "11:15 AM", room: "Rm 302" },
    { id: 3, name: "Ellen Ripley", status: "Discharged", time: "09:30 AM", room: "--" },
  ]);

  const toggleStatus = (id: number) => {
    setPatients(prev => prev.map(p => 
      p.id === id ? { ...p, status: p.status === "Stable" ? "Critical" : "Stable" } : p
    ));
  };

  return (
    <div className="h-full w-full bg-white rounded-lg shadow-sm overflow-hidden flex flex-col">
      <div className="border-b border-slate-100 p-4 flex justify-between items-center">
        <h3 className="font-semibold text-slate-800">Patient Watchlist</h3>
        <button className="text-xs bg-teal-50 text-teal-700 px-2 py-1 rounded font-medium">Update Vitals</button>
      </div>
      <div className="flex-1 overflow-auto">
        {patients.map((p) => (
          <div key={p.id} className="flex items-center justify-between p-4 border-b border-slate-50 hover:bg-slate-50 transition-colors cursor-pointer" onClick={() => toggleStatus(p.id)}>
            <div className="flex items-center gap-3">
              <div className={`h-8 w-8 rounded-full flex items-center justify-center text-xs font-bold ${p.status === 'Critical' ? 'bg-red-100 text-red-600' : 'bg-slate-100 text-slate-600'}`}>
                {p.name.charAt(0)}
              </div>
              <div>
                <div className="text-sm font-medium text-slate-900">{p.name}</div>
                <div className="text-xs text-slate-500">{p.room} • {p.time}</div>
              </div>
            </div>
            <span className={`px-2 py-1 rounded-full text-[10px] uppercase font-bold tracking-wide ${
              p.status === 'Critical' ? 'bg-red-100 text-red-700' : 
              p.status === 'Stable' ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-500'
            }`}>
              {p.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- HOSPITALITY DEMO ---
export const HospitalityDemo: React.FC = () => {
  const [tables, setTables] = useState([
    { id: 1, status: "Occupied", guests: 4, orders: "Pending" },
    { id: 2, status: "Reserved", guests: 2, orders: "--" },
    { id: 3, status: "Free", guests: 0, orders: "--" },
    { id: 4, status: "Occupied", guests: 6, orders: "Served" },
  ]);

  const cycleStatus = (id: number) => {
    const statuses = ["Free", "Occupied", "Reserved"];
    setTables(prev => prev.map(t => {
      if (t.id !== id) return t;
      const currentIndex = statuses.indexOf(t.status);
      return { ...t, status: statuses[(currentIndex + 1) % 3] };
    }));
  };

  return (
    <div className="h-full w-full bg-white rounded-lg shadow-sm p-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-slate-800">Floor Plan - Zone A</h3>
        <div className="flex gap-2">
            <span className="h-2 w-2 rounded-full bg-amber-500"></span>
            <span className="text-xs text-slate-500">Live</span>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {tables.map(t => (
          <div 
            key={t.id} 
            onClick={() => cycleStatus(t.id)}
            className={`p-3 rounded-lg border cursor-pointer transition-all hover:shadow-md ${
              t.status === 'Occupied' ? 'bg-amber-50 border-amber-200' :
              t.status === 'Reserved' ? 'bg-slate-50 border-dashed border-slate-300' :
              'bg-white border-slate-100'
            }`}
          >
            <div className="flex justify-between items-start mb-2">
              <span className="text-xs font-bold text-slate-400">T-{t.id}</span>
              {t.status === 'Occupied' && <Clock className="h-3 w-3 text-amber-500" />}
            </div>
            <div className="text-sm font-semibold text-slate-800">{t.status}</div>
            <div className="text-xs text-slate-500 mt-1">{t.guests > 0 ? `${t.guests} Guests` : 'Empty'}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- SUPERMARKET DEMO ---
export const SupermarketDemo: React.FC = () => {
  const [items, setItems] = useState([
    { id: 1, name: "Organic Bananas", stock: 84, trend: "up" },
    { id: 2, name: "Almond Milk", stock: 12, trend: "down" }, // Low stock
    { id: 3, name: "Sourdough Bread", stock: 45, trend: "stable" },
    { id: 4, name: "Avocados", stock: 120, trend: "up" },
  ]);

  const restock = (id: number) => {
    setItems(prev => prev.map(item => 
      item.id === id ? { ...item, stock: item.stock + 50 } : item
    ));
  };

  return (
    <div className="h-full w-full bg-white rounded-lg shadow-sm flex flex-col">
       <div className="p-4 border-b border-slate-100 bg-rose-50/30">
        <div className="flex justify-between items-center">
            <h3 className="font-bold text-slate-800">Inventory Velocity</h3>
            <span className="px-2 py-0.5 rounded text-[10px] bg-rose-100 text-rose-700 font-bold uppercase">Live</span>
        </div>
      </div>
      <div className="flex-1 p-2">
        <table className="w-full text-left border-collapse">
            <thead>
                <tr className="text-xs text-slate-400 border-b border-slate-100">
                    <th className="py-2 pl-2">Item</th>
                    <th className="py-2">Stock</th>
                    <th className="py-2 text-right pr-2">Action</th>
                </tr>
            </thead>
            <tbody>
                {items.map(item => (
                    <tr key={item.id} className="border-b border-slate-50 text-sm group">
                        <td className="py-3 pl-2 font-medium text-slate-700">{item.name}</td>
                        <td className="py-3">
                            <div className="flex items-center gap-2">
                                <span className={`${item.stock < 20 ? 'text-red-600 font-bold' : 'text-slate-600'}`}>{item.stock}</span>
                                {item.stock < 20 && <AlertCircle className="h-3 w-3 text-red-500" />}
                            </div>
                        </td>
                        <td className="py-3 text-right pr-2">
                            <button 
                                onClick={() => restock(item.id)}
                                className="text-xs bg-slate-100 hover:bg-rose-100 hover:text-rose-700 text-slate-600 px-2 py-1 rounded transition-colors"
                            >
                                +Order
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
      </div>
    </div>
  );
};

// --- DISTRIBUTION DEMO ---
export const DistributionDemo: React.FC = () => {
  const [activeRoute, setActiveRoute] = useState(1);

  return (
    <div className="h-full w-full bg-slate-900 rounded-lg shadow-sm flex flex-col overflow-hidden relative">
      {/* Map Background Simulation */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 left-1/4 w-32 h-32 border-2 border-indigo-500 rounded-full animate-ping"></div>
        <div className="grid grid-cols-6 grid-rows-6 h-full w-full">
            {Array.from({ length: 36 }).map((_, i) => (
                <div key={i} className="border border-indigo-500/10"></div>
            ))}
        </div>
      </div>

      <div className="relative z-10 p-4 bg-slate-900/90 border-b border-indigo-900/50 backdrop-blur-sm flex justify-between">
         <h3 className="font-semibold text-indigo-100">Fleet Command</h3>
         <div className="flex gap-1">
             <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></div>
         </div>
      </div>

      <div className="relative z-10 flex-1 p-4 space-y-3">
        {[1, 2, 3].map((route) => (
            <div 
                key={route}
                onClick={() => setActiveRoute(route)}
                className={`p-3 rounded border cursor-pointer transition-all flex items-center justify-between ${
                    activeRoute === route ? 'bg-indigo-600/20 border-indigo-500' : 'bg-slate-800/50 border-slate-700 hover:border-slate-600'
                }`}
            >
                <div className="flex items-center gap-3">
                    <Truck className={`h-4 w-4 ${activeRoute === route ? 'text-indigo-400' : 'text-slate-500'}`} />
                    <div>
                        <div className="text-xs font-bold text-slate-300">Route #{2040 + route}</div>
                        <div className="text-[10px] text-slate-500">ETA: {10 + route} mins</div>
                    </div>
                </div>
                {activeRoute === route && <div className="text-[10px] text-indigo-300 font-mono">TRACKING</div>}
            </div>
        ))}
      </div>
    </div>
  );
};

// --- ACCOUNTING DEMO ---
export const AccountingDemo: React.FC = () => {
  const [transactions, setTransactions] = useState([
    { id: 1, vendor: "ACME Corp", amount: 1250.00, status: "Reconciled", date: "Dec 5" },
    { id: 2, vendor: "Supply Hub", amount: 340.50, status: "Pending", date: "Dec 5" },
    { id: 3, vendor: "Tech Services", amount: 2100.00, status: "Reconciled", date: "Dec 4" },
    { id: 4, vendor: "Utilities Plus", amount: 450.00, status: "Flagged", date: "Dec 3" },
  ]);

  const toggleReconcile = (id: number) => {
    setTransactions(prev => prev.map(t =>
      t.id === id ? { ...t, status: t.status === "Pending" ? "Reconciled" : "Pending" } : t
    ));
  };

  return (
    <div className="h-full w-full bg-white rounded-lg shadow-sm flex flex-col">
      <div className="p-4 border-b border-slate-100 bg-sky-50/30">
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-slate-800">Monthly Reconciliation</h3>
          <span className="px-2 py-0.5 rounded text-[10px] bg-sky-100 text-sky-700 font-bold uppercase">3/4 Done</span>
        </div>
      </div>
      <div className="flex-1 p-2 overflow-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="text-xs text-slate-400 border-b border-slate-100">
              <th className="py-2 pl-2">Vendor</th>
              <th className="py-2">Amount</th>
              <th className="py-2 text-right pr-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map(t => (
              <tr key={t.id} onClick={() => toggleReconcile(t.id)} className="border-b border-slate-50 text-sm cursor-pointer hover:bg-slate-50 transition-colors">
                <td className="py-3 pl-2 font-medium text-slate-700">{t.vendor}</td>
                <td className="py-3 font-mono text-slate-900">${t.amount.toFixed(2)}</td>
                <td className="py-3 text-right pr-2">
                  <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase ${
                    t.status === 'Reconciled' ? 'bg-emerald-100 text-emerald-700' :
                    t.status === 'Pending' ? 'bg-amber-100 text-amber-700' :
                    'bg-red-100 text-red-700'
                  }`}>
                    {t.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// --- EDUCATION DEMO ---
export const EducationDemo: React.FC = () => {
  const [students, setStudents] = useState([
    { id: 1, name: "Alice Johnson", subject: "Math", grade: "A", attendance: "98%" },
    { id: 2, name: "Bob Smith", subject: "English", grade: "B+", attendance: "95%" },
    { id: 3, name: "Carol White", subject: "Science", grade: "A-", attendance: "100%" },
    { id: 4, name: "Dave Brown", subject: "History", grade: "C", attendance: "88%" },
  ]);

  return (
    <div className="h-full w-full bg-white rounded-lg shadow-sm flex flex-col">
      <div className="p-4 border-b border-slate-100 bg-violet-50/30">
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-slate-800">Class Performance</h3>
          <span className="px-2 py-0.5 rounded text-[10px] bg-violet-100 text-violet-700 font-bold uppercase">Period 4</span>
        </div>
      </div>
      <div className="flex-1 p-2 overflow-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="text-xs text-slate-400 border-b border-slate-100">
              <th className="py-2 pl-2">Student</th>
              <th className="py-2">Grade</th>
              <th className="py-2 text-right pr-2">Attendance</th>
            </tr>
          </thead>
          <tbody>
            {students.map(s => (
              <tr key={s.id} className="border-b border-slate-50 text-sm hover:bg-slate-50 transition-colors">
                <td className="py-3 pl-2">
                  <div className="font-medium text-slate-700">{s.name}</div>
                  <div className="text-xs text-slate-500">{s.subject}</div>
                </td>
                <td className="py-3">
                  <span className={`px-2 py-1 rounded font-bold text-xs ${
                    s.grade.startsWith('A') ? 'bg-emerald-100 text-emerald-700' :
                    s.grade.startsWith('B') ? 'bg-blue-100 text-blue-700' :
                    'bg-amber-100 text-amber-700'
                  }`}>
                    {s.grade}
                  </span>
                </td>
                <td className="py-3 text-right pr-2 text-slate-900 font-medium">{s.attendance}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// --- RETAIL DEMO ---
export const RetailDemo: React.FC = () => {
  const [transactions, setTransactions] = useState([
    { id: 1, order: "ORD-2024", amount: 89.99, items: 3, time: "2:15 PM" },
    { id: 2, order: "ORD-2025", amount: 156.50, items: 5, time: "2:10 PM" },
    { id: 3, order: "ORD-2026", amount: 42.00, items: 2, time: "1:58 PM" },
    { id: 4, order: "ORD-2027", amount: 203.25, items: 7, time: "1:45 PM" },
  ]);

  return (
    <div className="h-full w-full bg-white rounded-lg shadow-sm flex flex-col">
      <div className="p-4 border-b border-slate-100 bg-emerald-50/30">
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-slate-800">POS Transactions</h3>
          <span className="px-2 py-0.5 rounded text-[10px] bg-emerald-100 text-emerald-700 font-bold uppercase">Live</span>
        </div>
      </div>
      <div className="flex-1 p-2 overflow-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="text-xs text-slate-400 border-b border-slate-100">
              <th className="py-2 pl-2">Order</th>
              <th className="py-2">Amount</th>
              <th className="py-2">Items</th>
              <th className="py-2 text-right pr-2">Time</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map(t => (
              <tr key={t.id} className="border-b border-slate-50 text-sm hover:bg-emerald-50 transition-colors">
                <td className="py-3 pl-2 font-mono text-slate-700 font-bold">{t.order}</td>
                <td className="py-3 font-mono text-slate-900 font-semibold">${t.amount.toFixed(2)}</td>
                <td className="py-3">
                  <span className="bg-slate-100 text-slate-700 px-2 py-1 rounded text-xs font-bold">{t.items}</span>
                </td>
                <td className="py-3 text-right pr-2 text-slate-600 text-xs">{t.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// --- MANUFACTURING DEMO ---
export const ManufacturingDemo: React.FC = () => {
  const [workOrders, setWorkOrders] = useState([
    { id: 1, product: "Component A", status: "In Progress", progress: 65 },
    { id: 2, product: "Assembly B", status: "Quality Check", progress: 85 },
    { id: 3, product: "Unit C", status: "Pending", progress: 0 },
    { id: 4, product: "Part D", status: "Complete", progress: 100 },
  ]);

  return (
    <div className="h-full w-full bg-white rounded-lg shadow-sm flex flex-col">
      <div className="p-4 border-b border-slate-100 bg-indigo-50/30">
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-slate-800">Work Order Status</h3>
          <span className="px-2 py-0.5 rounded text-[10px] bg-indigo-100 text-indigo-700 font-bold uppercase">2/4 Active</span>
        </div>
      </div>
      <div className="flex-1 p-4 space-y-3 overflow-auto">
        {workOrders.map(wo => (
          <div key={wo.id} className="border border-slate-100 rounded-lg p-3 hover:shadow-sm transition-shadow">
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium text-slate-700 text-sm">{wo.product}</span>
              <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase ${
                wo.status === 'Complete' ? 'bg-emerald-100 text-emerald-700' :
                wo.status === 'Quality Check' ? 'bg-amber-100 text-amber-700' :
                wo.status === 'In Progress' ? 'bg-blue-100 text-blue-700' :
                'bg-slate-100 text-slate-700'
              }`}>
                {wo.status}
              </span>
            </div>
            <div className="w-full bg-slate-200 rounded-full h-2">
              <div 
                className={`h-2 rounded-full transition-all ${
                  wo.progress === 100 ? 'bg-emerald-500' : 'bg-indigo-500'
                }`}
                style={{ width: `${wo.progress}%` }}
              ></div>
            </div>
            <div className="text-xs text-slate-500 mt-1">{wo.progress}% Complete</div>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- REAL ESTATE DEMO ---
export const RealEstateDemo: React.FC = () => {
  const [properties, setProperties] = useState([
    { id: 1, address: "123 Oak St", price: "$450K", status: "Listed", beds: 3 },
    { id: 2, address: "456 Pine Ave", price: "$325K", status: "Pending", beds: 2 },
    { id: 3, address: "789 Elm Dr", price: "$625K", status: "Sold", beds: 4 },
    { id: 4, address: "321 Maple Ln", price: "$280K", status: "Listed", beds: 2 },
  ]);

  return (
    <div className="h-full w-full bg-white rounded-lg shadow-sm flex flex-col">
      <div className="p-4 border-b border-slate-100 bg-cyan-50/30">
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-slate-800">Active Listings</h3>
          <span className="px-2 py-0.5 rounded text-[10px] bg-cyan-100 text-cyan-700 font-bold uppercase">Portfolio</span>
        </div>
      </div>
      <div className="flex-1 p-2 overflow-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="text-xs text-slate-400 border-b border-slate-100">
              <th className="py-2 pl-2">Address</th>
              <th className="py-2">Price</th>
              <th className="py-2 text-center">Beds</th>
              <th className="py-2 text-right pr-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {properties.map(p => (
              <tr key={p.id} className="border-b border-slate-50 text-sm hover:bg-cyan-50 transition-colors">
                <td className="py-3 pl-2 font-medium text-slate-700">{p.address}</td>
                <td className="py-3 font-mono font-bold text-slate-900">{p.price}</td>
                <td className="py-3 text-center text-slate-600">{p.beds}</td>
                <td className="py-3 text-right pr-2">
                  <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase ${
                    p.status === 'Sold' ? 'bg-emerald-100 text-emerald-700' :
                    p.status === 'Pending' ? 'bg-amber-100 text-amber-700' :
                    'bg-sky-100 text-sky-700'
                  }`}>
                    {p.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// --- LOGISTICS DEMO ---
export const LogisticsDemo: React.FC = () => {
  const [shipments, setShipments] = useState([
    { id: 1, tracking: "PKG-5001", status: "In Transit", eta: "2:30 PM", progress: 60 },
    { id: 2, tracking: "PKG-5002", status: "Delivered", eta: "1:15 PM", progress: 100 },
    { id: 3, tracking: "PKG-5003", status: "Out for Delivery", eta: "3:45 PM", progress: 75 },
    { id: 4, tracking: "PKG-5004", status: "Scheduled", eta: "Tomorrow", progress: 0 },
  ]);

  return (
    <div className="h-full w-full bg-white rounded-lg shadow-sm flex flex-col">
      <div className="p-4 border-b border-slate-100 bg-amber-50/30">
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-slate-800">Shipment Tracking</h3>
          <span className="px-2 py-0.5 rounded text-[10px] bg-amber-100 text-amber-700 font-bold uppercase">4 Active</span>
        </div>
      </div>
      <div className="flex-1 p-4 space-y-3 overflow-auto">
        {shipments.map(s => (
          <div key={s.id} className="border border-slate-100 rounded-lg p-3 hover:shadow-sm transition-shadow">
            <div className="flex justify-between items-center mb-2">
              <span className="font-mono font-bold text-slate-700 text-sm">{s.tracking}</span>
              <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase ${
                s.status === 'Delivered' ? 'bg-emerald-100 text-emerald-700' :
                s.status === 'Out for Delivery' ? 'bg-blue-100 text-blue-700' :
                s.status === 'In Transit' ? 'bg-amber-100 text-amber-700' :
                'bg-slate-100 text-slate-700'
              }`}>
                {s.status}
              </span>
            </div>
            <div className="w-full bg-slate-200 rounded-full h-2 mb-1">
              <div 
                className={`h-2 rounded-full transition-all ${
                  s.progress === 100 ? 'bg-emerald-500' : 'bg-amber-500'
                }`}
                style={{ width: `${s.progress}%` }}
              ></div>
            </div>
            <div className="text-xs text-slate-500 flex justify-between">
              <span>ETA: {s.eta}</span>
              <span>{s.progress}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const DemoContainer: React.FC<{ type: IndustryType }> = ({ type }) => {
    switch (type) {
        case IndustryType.HEALTHCARE: return <HealthcareDemo />;
        case IndustryType.HOSPITALITY: return <HospitalityDemo />;
        case IndustryType.SUPERMARKETS: return <SupermarketDemo />;
        case IndustryType.DISTRIBUTION: return <DistributionDemo />;
        case IndustryType.ACCOUNTING: return <AccountingDemo />;
        case IndustryType.EDUCATION: return <EducationDemo />;
        case IndustryType.RETAIL: return <RetailDemo />;
        case IndustryType.MAUNFACTURING: return <ManufacturingDemo />;
        case IndustryType.RealEstate: return <RealEstateDemo />;
        case IndustryType.LOGISTICS: return <LogisticsDemo />;
        default: return null;
    }
}