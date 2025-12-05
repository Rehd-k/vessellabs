import {
  Activity,
  Utensils,
  ShoppingCart,
  Truck,
  ShieldCheck,
  Zap,
  BarChart3,
  Users,
  Stethoscope,
  Wine,
  Tag,
  Package
} from 'lucide-react';
import { IndustryConfig, IndustryType } from '../../types';

export const INDUSTRIES: Record<IndustryType, IndustryConfig> = {
  [IndustryType.HEALTHCARE]: {
    id: IndustryType.HEALTHCARE,
    name: "Healthcare",
    tagline: "Clinical Precision & Patient Safety",
    description: "Streamline patient intake, manage shifts, and ensure compliance with HIPAA-ready infrastructure.",
    colors: {
      primary: "bg-teal-600",
      secondary: "bg-teal-50",
      text: "text-teal-600",
      badge: "bg-teal-100 text-teal-800",
      border: "border-teal-200",
      gradientFrom: "from-teal-900",
      gradientTo: "to-slate-900"
    },
    icon: Stethoscope,
    features: [
      { title: "Patient Vitals Sync", description: "Real-time integration with IoT monitoring devices.", icon: Activity },
      { title: "Staff Rostering", description: "AI-driven shift management to prevent burnout.", icon: Users },
      { title: "Compliance Audit", description: "Automated logging for regulatory standards.", icon: ShieldCheck }
    ]
  },
  [IndustryType.HOSPITALITY]: {
    id: IndustryType.HOSPITALITY,
    name: "Hospitality",
    tagline: "Five-Star Service Automation",
    description: "Orchestrate front-of-house elegance with back-of-house efficiency. Manage bookings, tables, and staff instantly.",
    colors: {
      primary: "bg-amber-500",
      secondary: "bg-amber-50",
      text: "text-amber-600",
      badge: "bg-amber-100 text-amber-800",
      border: "border-amber-200",
      gradientFrom: "from-amber-900",
      gradientTo: "to-slate-900"
    },
    icon: Wine,
    features: [
      { title: "Table Optimization", description: "Smart seating algorithms to maximize cover.", icon: Utensils },
      { title: "Guest Profiles", description: "CRM integration for personalized VIP experiences.", icon: Users },
      { title: "Real-time Inventory", description: "Kitchen stock tracking linked to POS.", icon: BarChart3 }
    ]
  },
  [IndustryType.SUPERMARKETS]: {
    id: IndustryType.SUPERMARKETS,
    name: "Supermarkets",
    tagline: "High-Volume Retail Velocity",
    description: "Keep checkout lines moving and shelves stocked. Nexus powers high-frequency transaction environments.",
    colors: {
      primary: "bg-rose-600",
      secondary: "bg-rose-50",
      text: "text-rose-600",
      badge: "bg-rose-100 text-rose-800",
      border: "border-rose-200",
      gradientFrom: "from-rose-900",
      gradientTo: "to-slate-900"
    },
    icon: ShoppingCart,
    features: [
      { title: "Flash Sales Engine", description: "Deploy dynamic pricing updates across all terminals instantly.", icon: Zap },
      { title: "Stock Alerts", description: "Predictive low-stock warnings before you run out.", icon: Tag },
      { title: "Loss Prevention", description: "Anomaly detection in transaction patterns.", icon: ShieldCheck }
    ]
  },
  [IndustryType.DISTRIBUTION]: {
    id: IndustryType.DISTRIBUTION,
    name: "Distribution",
    tagline: "Logistics at Light Speed",
    description: "End-to-end visibility from warehouse to doorstep. Optimize fleets, track assets, and predict delays.",
    colors: {
      primary: "bg-indigo-600",
      secondary: "bg-indigo-50",
      text: "text-indigo-600",
      badge: "bg-indigo-100 text-indigo-800",
      border: "border-indigo-200",
      gradientFrom: "from-indigo-900",
      gradientTo: "to-slate-900"
    },
    icon: Truck,
    features: [
      { title: "Fleet Telematics", description: "Live GPS and vehicle health monitoring.", icon: Activity },
      { title: "Route Optimization", description: "Reduce fuel costs with AI pathfinding.", icon: Package },
      { title: "Warehouse Grid", description: "3D bin location mapping and picking paths.", icon: BarChart3 }
    ]
  }, [IndustryType.ACCOUNTING]: {
    id: IndustryType.ACCOUNTING,
    name: "Accounting",
    tagline: "Financial Clarity & Compliance",
    description: "Automate reconciliation, expense workflows, and audit trails with secure, multi-entity support.",
    colors: {
      primary: "bg-sky-600",
      secondary: "bg-sky-50",
      text: "text-sky-600",
      badge: "bg-sky-100 text-sky-800",
      border: "border-sky-200",
      gradientFrom: "from-sky-900",
      gradientTo: "to-slate-900"
    },
    icon: BarChart3,
    features: [
      { title: "Automated Reconciliation", description: "Match bank feeds and invoices instantly to close books faster.", icon: Zap },
      { title: "Multi-Entity Consolidation", description: "Roll up subsidiaries and currency conversions with precision.", icon: Users },
      { title: "Audit-Ready Ledgers", description: "Immutable logs and export-ready reports for auditors.", icon: ShieldCheck }
    ]
  },
  [IndustryType.EDUCATION]: {
    id: IndustryType.EDUCATION,
    name: "Education",
    tagline: "Connected Learning & Campus Operations",
    description: "Unify LMS integration, attendance, and facility scheduling to support educators and students.",
    colors: {
      primary: "bg-violet-600",
      secondary: "bg-violet-50",
      text: "text-violet-600",
      badge: "bg-violet-100 text-violet-800",
      border: "border-violet-200",
      gradientFrom: "from-violet-900",
      gradientTo: "to-slate-900"
    },
    icon: Users,
    features: [
      { title: "Smart Curriculum Planner", description: "Create adaptive learning paths and auto-schedule classes.", icon: Activity },
      { title: "Student 360 Profiles", description: "Track performance, interventions, and guardians in one view.", icon: Users },
      { title: "Facility Booking", description: "Reserve rooms and resources with conflict-free scheduling.", icon: Package }
    ]
  }
  ,
  [IndustryType.RETAIL]: {
    id: IndustryType.RETAIL,
    name: "Retail",
    tagline: "Omnichannel Commerce, Personalized",
    description: "Centralize inventory, POS, and customer loyalty for seamless in-store and online shopping.",
    colors: {
      primary: "bg-emerald-600",
      secondary: "bg-emerald-50",
      text: "text-emerald-600",
      badge: "bg-emerald-100 text-emerald-800",
      border: "border-emerald-200",
      gradientFrom: "from-emerald-900",
      gradientTo: "to-slate-900"
    },
    icon: ShoppingCart,
    features: [
      { title: "Unified Inventory", description: "Sync stock across channels and push low-stock alerts.", icon: BarChart3 },
      { title: "Personalized Promotions", description: "Segment customers and deliver targeted offers at checkout.", icon: Tag },
      { title: "Frictionless Checkout", description: "Fast POS flows with split-tender and contactless support.", icon: ShoppingCart }
    ]
  },
  [IndustryType.MAUNFACTURING]: {
    id: IndustryType.MAUNFACTURING,
    name: "Manufacturing",
    tagline: "Precision Production & Throughput",
    description: "Optimize shop-floor schedules, quality control, and predictive maintenance to maximize output.",
    colors: {
      primary: "bg-indigo-700",
      secondary: "bg-indigo-50",
      text: "text-indigo-700",
      badge: "bg-indigo-100 text-indigo-800",
      border: "border-indigo-200",
      gradientFrom: "from-indigo-900",
      gradientTo: "to-slate-900"
    },
    icon: Package,
    features: [
      { title: "Work Order Orchestration", description: "Sequence tasks and materials to meet delivery SLAs.", icon: Activity },
      { title: "Quality Gates", description: "Automate inspections and non-conformance workflows.", icon: ShieldCheck },
      { title: "Predictive Maintenance", description: "Forecast equipment failures to reduce downtime.", icon: BarChart3 }
    ]
  },
  [IndustryType.RealEstate]: {
    id: IndustryType.RealEstate,
    name: "Real Estate",
    tagline: "Properties Managed, Tenants Delighted",
    description: "Streamline listings, leasing, and property maintenance across portfolios with tenant self-service.",
    colors: {
      primary: "bg-cyan-600",
      secondary: "bg-cyan-50",
      text: "text-cyan-600",
      badge: "bg-cyan-100 text-cyan-800",
      border: "border-cyan-200",
      gradientFrom: "from-cyan-900",
      gradientTo: "to-slate-900"
    },
    icon: Tag,
    features: [
      { title: "Listing Syndication", description: "Publish properties and track inquiries from a single dashboard.", icon: Activity },
      { title: "Lease Lifecycle", description: "Automate contracts, renewals, and rent collections.", icon: Users },
      { title: "Maintenance Portal", description: "Ticketing and vendor dispatch with SLA tracking.", icon: Truck }
    ]
  },
  [IndustryType.LOGISTICS]: {
    id: IndustryType.LOGISTICS,
    name: "Logistics",
    tagline: "Real-Time Delivery & Supply Chain Resilience",
    description: "Coordinate carriers, optimize loads, and provide customers with live tracking and ETA predictions.",
    colors: {
      primary: "bg-amber-600",
      secondary: "bg-amber-50",
      text: "text-amber-600",
      badge: "bg-amber-100 text-amber-800",
      border: "border-amber-200",
      gradientFrom: "from-amber-900",
      gradientTo: "to-slate-900"
    },
    icon: Truck,
    features: [
      { title: "Dynamic Load Planning", description: "Maximize truck utilization with constraint-aware load builds.", icon: Package },
      { title: "Carrier Marketplace", description: "Compare rates, SLAs, and book carriers programmatically.", icon: Users },
      { title: "Live Tracking & ETA", description: "Provide geofenced updates and predictive ETAs to customers.", icon: Activity }
    ]
  }
};