import {
  Activity,
  Clock,
  DollarSign,
  Zap,
  Users,
  TrendingUp,
  Shield,
  BarChart3,
  AlertCircle,
  CheckCircle,
  BookOpen,
  Smartphone,
  Lock,
  Workflow,
  HeartHandshake,
  Gauge,
  Globe,
  FileText,
  ShoppingCart,
  Truck,
} from 'lucide-react';
import { IndustryType, IndustryDemoConfig } from '@/types';

export const DEMO_CONFIGS: Record<IndustryType, IndustryDemoConfig> = {
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
    icon: Activity,
    features: [
      { title: "Patient Vitals Sync", description: "Real-time integration with IoT monitoring devices.", icon: Activity },
      { title: "Staff Rostering", description: "AI-driven shift management to prevent burnout.", icon: Users },
      { title: "Compliance Audit", description: "Automated logging for regulatory standards.", icon: Shield }
    ],
    advantages: [
      {
        title: "HIPAA Compliant Infrastructure",
        description: "Enterprise-grade encryption and audit logs ensure patient data protection and regulatory compliance.",
        icon: Lock
      },
      {
        title: "Reduce Patient Wait Times by 40%",
        description: "Automated intake and scheduling eliminates bottlenecks and improves patient satisfaction scores.",
        icon: Clock
      },
      {
        title: "Prevent Staff Burnout",
        description: "AI-driven shift optimization ensures fair schedules, reducing turnover and maintaining service quality.",
        icon: HeartHandshake
      },
      {
        title: "Real-time Clinical Alerts",
        description: "Integrated monitoring systems provide instant notifications for critical patient events.",
        icon: AlertCircle
      },
      {
        title: "Seamless EHR Integration",
        description: "Connect with existing electronic health records systems without data silos.",
        icon: Workflow
      },
      {
        title: "Improve Clinical Outcomes",
        description: "Data-driven insights help identify best practices and reduce adverse events.",
        icon: TrendingUp
      },
      {
        title: "Cut Administrative Costs by 35%",
        description: "Automate billing, claims, and compliance workflows to reduce manual overhead.",
        icon: DollarSign
      },
      {
        title: "24/7 System Uptime",
        description: "Mission-critical infrastructure ensures no downtime for patient-facing systems.",
        icon: Shield
      }
    ],
    media: [
      {
        type: 'screenshot',
        src: '/demo/healthcare/dashboard.png',
        alt: 'Healthcare Dashboard with patient metrics',
        caption: 'Real-time patient metrics and clinical overview dashboard'
      },
      {
        type: 'screenshot',
        src: '/demo/healthcare/scheduling.png',
        alt: 'Staff shift scheduling interface',
        caption: 'AI-optimized staff scheduling with compliance checks'
      },
      {
        type: 'video',
        src: '/demo/healthcare/intake-flow.mp4',
        alt: 'Patient intake workflow',
        caption: 'Streamlined patient intake process in action'
      }
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
    icon: Users,
    features: [
      { title: "Table Optimization", description: "Smart seating algorithms to maximize cover.", icon: Users },
      { title: "Guest Profiles", description: "CRM integration for personalized VIP experiences.", icon: Users },
      { title: "Real-time Inventory", description: "Kitchen stock tracking linked to POS.", icon: BarChart3 }
    ],
    advantages: [
      {
        title: "Increase Table Turns by 25%",
        description: "Intelligent seating algorithms optimize table flow and maximize revenue per service.",
        icon: TrendingUp
      },
      {
        title: "Personalize Guest Experiences",
        description: "Unified guest profiles enable custom service, dietary preferences, and loyalty rewards at every touchpoint.",
        icon: HeartHandshake
      },
      {
        title: "Reduce Food Waste by 30%",
        description: "Real-time kitchen inventory linked to POS prevents over-ordering and minimizes spoilage.",
        icon: DollarSign
      },
      {
        title: "Seamless Reservation Management",
        description: "Multi-channel bookings synchronized with real-time capacity and waitlist automation.",
        icon: Smartphone
      },
      {
        title: "Empower Staff with Insights",
        description: "POS analytics and guest data allow servers to upsell effectively and personalize interactions.",
        icon: BarChart3
      },
      {
        title: "Eliminate No-Shows",
        description: "Automated reminders and confirmation systems reduce no-shows by up to 20%.",
        icon: CheckCircle
      },
      {
        title: "Improve Employee Satisfaction",
        description: "Automated scheduling and tip management streamlines staff operations and reduces frustration.",
        icon: Users
      },
      {
        title: "Real-time Financial Visibility",
        description: "Live revenue tracking, cost of goods, and profitability analysis by outlet and service.",
        icon: BarChart3
      }
    ],
    media: [
      {
        type: 'screenshot',
        src: '/demo/hospitality/reservation.png',
        alt: 'Reservation management system',
        caption: 'Multi-channel reservation management with smart seating'
      },
      {
        type: 'screenshot',
        src: '/demo/hospitality/guest-profile.png',
        alt: 'Guest profile with preferences',
        caption: 'Comprehensive guest profiles for personalized service'
      },
      {
        type: 'video',
        src: '/demo/hospitality/service-flow.mp4',
        alt: 'Guest service workflow',
        caption: 'End-to-end guest service workflow optimization'
      }
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
    icon: Users,
    features: [
      { title: "Flash Sales Engine", description: "Deploy dynamic pricing updates across all terminals instantly.", icon: Zap },
      { title: "Stock Alerts", description: "Predictive low-stock warnings before you run out.", icon: AlertCircle },
      { title: "Loss Prevention", description: "Anomaly detection in transaction patterns.", icon: Shield }
    ],
    advantages: [
      {
        title: "Process 50% More Transactions",
        description: "High-performance system handles peak-hour loads without slowdowns or bottlenecks.",
        icon: Zap
      },
      {
        title: "Reduce Checkout Wait Times",
        description: "Optimized POS workflows and self-checkout integration decrease customer frustration.",
        icon: Clock
      },
      {
        title: "Slash Shrink by 20%",
        description: "Real-time loss prevention analytics detect discrepancies and prevent theft patterns.",
        icon: Shield
      },
      {
        title: "Dynamic Pricing Mastery",
        description: "Deploy promotional pricing across all terminals instantly to respond to market conditions.",
        icon: TrendingUp
      },
      {
        title: "Optimize Stock Levels",
        description: "Predictive alerts prevent stockouts and overstock situations, reducing carrying costs.",
        icon: AlertCircle
      },
      {
        title: "Increase Basket Size by 15%",
        description: "Personalized promotions and cross-sell recommendations boost average transaction value.",
        icon: DollarSign
      },
      {
        title: "Real-time Labor Scheduling",
        description: "Predictive staffing based on traffic patterns ensures optimal checkout coverage.",
        icon: Users
      },
      {
        title: "Enhanced Customer Insights",
        description: "Aggregate sales data reveals customer preferences and buying patterns for better planning.",
        icon: BarChart3
      }
    ],
    media: [
      {
        type: 'screenshot',
        src: '/demo/supermarkets/checkout.png',
        alt: 'POS checkout interface',
        caption: 'Fast, intuitive checkout experience with multiple payment options'
      },
      {
        type: 'screenshot',
        src: '/demo/supermarkets/inventory.png',
        alt: 'Real-time inventory dashboard',
        caption: 'Real-time inventory monitoring with automated replenishment'
      },
      {
        type: 'video',
        src: '/demo/supermarkets/dynamic-pricing.mp4',
        alt: 'Dynamic pricing deployment',
        caption: 'Instant pricing updates across all terminals'
      }
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
    icon: Users,
    features: [
      { title: "Fleet Telematics", description: "Live GPS and vehicle health monitoring.", icon: Activity },
      { title: "Route Optimization", description: "Reduce fuel costs with AI pathfinding.", icon: Users },
      { title: "Warehouse Grid", description: "3D bin location mapping and picking paths.", icon: BarChart3 }
    ],
    advantages: [
      {
        title: "Reduce Fuel Costs by 20%",
        description: "AI-powered route optimization eliminates unnecessary mileage and time.",
        icon: DollarSign
      },
      {
        title: "Increase Delivery Efficiency by 40%",
        description: "Smart routing and load optimization maximize deliveries per vehicle per day.",
        icon: TrendingUp
      },
      {
        title: "Real-time Fleet Visibility",
        description: "GPS tracking, vehicle health monitoring, and driver behavior analytics in real-time.",
        icon: Globe
      },
      {
        title: "Predict Equipment Failures",
        description: "Predictive maintenance alerts prevent breakdowns and keep fleet on the road.",
        icon: AlertCircle
      },
      {
        title: "Improve On-Time Delivery Rates",
        description: "Accurate ETA predictions and dynamic rerouting maintain delivery commitments.",
        icon: CheckCircle
      },
      {
        title: "Optimize Warehouse Operations",
        description: "3D bin mapping and intelligent picking paths reduce order fulfillment time by 35%.",
        icon: Workflow
      },
      {
        title: "Enhance Customer Experience",
        description: "Proactive delivery notifications and accurate ETAs improve customer satisfaction.",
        icon: HeartHandshake
      },
      {
        title: "Reduce Administrative Overhead",
        description: "Automated dispatch and documentation cuts manual work by 50%.",
        icon: Users
      }
    ],
    media: [
      {
        type: 'screenshot',
        src: '/demo/distribution/fleet-tracking.png',
        alt: 'Real-time fleet tracking map',
        caption: 'Live GPS tracking with route optimization'
      },
      {
        type: 'screenshot',
        src: '/demo/distribution/warehouse.png',
        alt: 'Warehouse management system',
        caption: '3D warehouse visualization with intelligent picking'
      },
      {
        type: 'video',
        src: '/demo/distribution/route-optimization.mp4',
        alt: 'Route optimization algorithm',
        caption: 'AI-powered route optimization in action'
      }
    ]
  },
  [IndustryType.ACCOUNTING]: {
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
      { title: "Audit-Ready Ledgers", description: "Immutable logs and export-ready reports for auditors.", icon: Shield }
    ],
    advantages: [
      {
        title: "Close Books 60% Faster",
        description: "Automated reconciliation and intelligent matching eliminates manual review cycles.",
        icon: Clock
      },
      {
        title: "Eliminate Reconciliation Errors",
        description: "ML-powered matching catches discrepancies before they become audit issues.",
        icon: Shield
      },
      {
        title: "Pass Audits with Confidence",
        description: "Immutable transaction logs and export-ready audit trails satisfy all compliance requirements.",
        icon: CheckCircle
      },
      {
        title: "Multi-Currency & Entity Support",
        description: "Seamlessly consolidate operations across subsidiaries and international locations.",
        icon: Globe
      },
      {
        title: "Reduce Finance Team Headcount",
        description: "Automation handles routine tasks, letting your team focus on strategic analysis.",
        icon: TrendingUp
      },
      {
        title: "Real-time Financial Visibility",
        description: "Dashboard access to cash position, P&L, and balance sheet metrics anytime, anywhere.",
        icon: BarChart3
      },
      {
        title: "Improve Expense Controls",
        description: "Policy-based approval workflows and receipt scanning reduce fraudulent claims.",
        icon: Lock
      },
      {
        title: "Accelerate Cash Collections",
        description: "Automated AR management and payment reminders improve cash flow and DSO.",
        icon: DollarSign
      }
    ],
    media: [
      {
        type: 'screenshot',
        src: '/demo/accounting/reconciliation.png',
        alt: 'Automated reconciliation interface',
        caption: 'AI-powered bank reconciliation with intelligent matching'
      },
      {
        type: 'screenshot',
        src: '/demo/accounting/consolidation.png',
        alt: 'Multi-entity consolidation',
        caption: 'Real-time financial consolidation dashboard'
      },
      {
        type: 'video',
        src: '/demo/accounting/audit-trail.mp4',
        alt: 'Audit trail generation',
        caption: 'Comprehensive audit trail and compliance reporting'
      }
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
    icon: BookOpen,
    features: [
      { title: "Smart Curriculum Planner", description: "Create adaptive learning paths and auto-schedule classes.", icon: Activity },
      { title: "Student 360 Profiles", description: "Track performance, interventions, and guardians in one view.", icon: Users },
      { title: "Facility Booking", description: "Reserve rooms and resources with conflict-free scheduling.", icon: Users }
    ],
    advantages: [
      {
        title: "Improve Student Outcomes by 25%",
        description: "Data-driven insights identify at-risk students early for timely interventions.",
        icon: TrendingUp
      },
      {
        title: "Save 10 Hours per Week on Admin",
        description: "Automated attendance, grading exports, and scheduling eliminate manual paperwork.",
        icon: Clock
      },
      {
        title: "Seamless LMS Integration",
        description: "Connect to any LMS to create unified learning environment without data silos.",
        icon: Workflow
      },
      {
        title: "Enhance Parental Engagement",
        description: "Real-time student progress updates and communication portals strengthen school-family connections.",
        icon: HeartHandshake
      },
      {
        title: "Optimize Campus Resources",
        description: "Intelligent room and equipment booking prevents double-bookings and idle resources.",
        icon: Gauge
      },
      {
        title: "Support Equity & Inclusion",
        description: "Analytics reveal performance gaps and help target support for underserved student populations.",
        icon: Users
      },
      {
        title: "Streamline Enrollment",
        description: "Online admissions workflows and parent portals reduce on-site staff burden by 40%.",
        icon: Smartphone
      },
      {
        title: "Build Institutional Knowledge",
        description: "Consolidated student records and learning portfolios follow learners through their journey.",
        icon: BookOpen
      }
    ],
    media: [
      {
        type: 'screenshot',
        src: '/demo/education/student-dashboard.png',
        alt: 'Student performance dashboard',
        caption: 'Comprehensive student analytics and performance tracking'
      },
      {
        type: 'screenshot',
        src: '/demo/education/scheduling.png',
        alt: 'Class and facility scheduling',
        caption: 'Intelligent campus resource scheduling'
      },
      {
        type: 'video',
        src: '/demo/education/parent-portal.mp4',
        alt: 'Parent engagement portal',
        caption: 'Real-time student progress communication'
      }
    ]
  },
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
      { title: "Personalized Promotions", description: "Segment customers and deliver targeted offers at checkout.", icon: Users },
      { title: "Frictionless Checkout", description: "Fast POS flows with split-tender and contactless support.", icon: Users }
    ],
    advantages: [
      {
        title: "Increase Sales by 30%",
        description: "Omnichannel inventory visibility enables buy-online-pickup-in-store and better cross-selling.",
        icon: TrendingUp
      },
      {
        title: "Reduce Inventory Waste",
        description: "Unified inventory across locations prevents overstocking and obsolescence.",
        icon: DollarSign
      },
      {
        title: "Personalize Every Transaction",
        description: "Real-time customer insights enable dynamic discounts and relevant product recommendations.",
        icon: HeartHandshake
      },
      {
        title: "Accelerate Checkout Speed",
        description: "Mobile payments, split-tender, and loyalty integration reduce transaction times by 50%.",
        icon: Zap
      },
      {
        title: "Build Customer Loyalty",
        description: "Unified loyalty program across channels rewards purchases and increases lifetime value.",
        icon: Users
      },
      {
        title: "Empower Store Associates",
        description: "Mobile devices give staff access to inventory, customer history, and recommendations.",
        icon: Smartphone
      },
      {
        title: "Real-time Performance Visibility",
        description: "Dashboards show sales by category, location, and associate for quick decision-making.",
        icon: BarChart3
      },
      {
        title: "Seamless Returns Management",
        description: "Omnichannel returns accept items purchased anywhere and restock to any location.",
        icon: CheckCircle
      }
    ],
    media: [
      {
        type: 'screenshot',
        src: '/demo/retail/omnichannel.png',
        alt: 'Omnichannel dashboard',
        caption: 'Unified inventory visibility across all channels'
      },
      {
        type: 'screenshot',
        src: '/demo/retail/personalization.png',
        alt: 'Customer personalization engine',
        caption: 'AI-powered personalization and recommendations'
      },
      {
        type: 'video',
        src: '/demo/retail/checkout-experience.mp4',
        alt: 'Fast checkout experience',
        caption: 'Seamless, frictionless checkout flow'
      }
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
    icon: Workflow,
    features: [
      { title: "Work Order Orchestration", description: "Sequence tasks and materials to meet delivery SLAs.", icon: Activity },
      { title: "Quality Gates", description: "Automate inspections and non-conformance workflows.", icon: Shield },
      { title: "Predictive Maintenance", description: "Forecast equipment failures to reduce downtime.", icon: BarChart3 }
    ],
    advantages: [
      {
        title: "Increase Production by 35%",
        description: "Optimized scheduling and resource allocation minimize idle time and bottlenecks.",
        icon: TrendingUp
      },
      {
        title: "Reduce Equipment Downtime by 40%",
        description: "Predictive maintenance alerts prevent failures before they disrupt production.",
        icon: Clock
      },
      {
        title: "Improve Quality Scores",
        description: "Automated QC workflows catch defects early and reduce scrap rates significantly.",
        icon: CheckCircle
      },
      {
        title: "Optimize Material Flow",
        description: "Just-in-time inventory and supply chain integration eliminate storage waste.",
        icon: DollarSign
      },
      {
        title: "Meet Tight Delivery Deadlines",
        description: "Real-time scheduling visibility ensures on-time delivery and customer satisfaction.",
        icon: AlertCircle
      },
      {
        title: "Empower Shop-Floor Workers",
        description: "Mobile work order assignment and status updates improve coordination and efficiency.",
        icon: Smartphone
      },
      {
        title: "Real-time OEE Monitoring",
        description: "Overall Equipment Effectiveness dashboards identify improvement opportunities instantly.",
        icon: BarChart3
      },
      {
        title: "Ensure Regulatory Compliance",
        description: "Complete audit trails and quality documentation satisfy ISO and industry standards.",
        icon: Lock
      }
    ],
    media: [
      {
        type: 'screenshot',
        src: '/demo/manufacturing/work-orders.png',
        alt: 'Work order orchestration',
        caption: 'Intelligent work order sequencing and scheduling'
      },
      {
        type: 'screenshot',
        src: '/demo/manufacturing/quality.png',
        alt: 'Quality control dashboard',
        caption: 'Real-time quality monitoring and SPC'
      },
      {
        type: 'video',
        src: '/demo/manufacturing/predictive-maintenance.mp4',
        alt: 'Predictive maintenance system',
        caption: 'Predictive maintenance alerts and scheduling'
      }
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
    icon: FileText,
    features: [
      { title: "Listing Syndication", description: "Publish properties and track inquiries from a single dashboard.", icon: Activity },
      { title: "Lease Lifecycle", description: "Automate contracts, renewals, and rent collections.", icon: Users },
      { title: "Maintenance Portal", description: "Ticketing and vendor dispatch with SLA tracking.", icon: Users }
    ],
    advantages: [
      {
        title: "Decrease Vacancy Rates",
        description: "Multi-channel listing syndication and lead nurturing accelerate leasing cycles.",
        icon: TrendingUp
      },
      {
        title: "Automate Rent Collection",
        description: "Recurring billing and online payment options improve collection rates and cash flow.",
        icon: DollarSign
      },
      {
        title: "Improve Tenant Satisfaction",
        description: "Self-service tenant portals and responsive maintenance ticketing boost retention.",
        icon: HeartHandshake
      },
      {
        title: "Streamline Lease Renewals",
        description: "Automated renewal reminders and digital signature workflows close renewals 50% faster.",
        icon: CheckCircle
      },
      {
        title: "Optimize Maintenance Costs",
        description: "Preventive work order planning and vendor competition reduce emergency repair expenses.",
        icon: DollarSign
      },
      {
        title: "Unified Property Portfolio",
        description: "Centralized management of multiple properties and units provides operational clarity.",
        icon: Globe
      },
      {
        title: "Reduce Administrative Overhead",
        description: "Automated lease audits, tax document generation, and compliance reduces manual work.",
        icon: Clock
      },
      {
        title: "Enhance Property Value",
        description: "Well-maintained properties with high tenant satisfaction command premium rents.",
        icon: BarChart3
      }
    ],
    media: [
      {
        type: 'screenshot',
        src: '/demo/realestate/listings.png',
        alt: 'Property listing management',
        caption: 'Multi-channel property listing and syndication'
      },
      {
        type: 'screenshot',
        src: '/demo/realestate/tenant-portal.png',
        alt: 'Tenant self-service portal',
        caption: 'Self-service tenant portal with maintenance requests'
      },
      {
        type: 'video',
        src: '/demo/realestate/lease-automation.mp4',
        alt: 'Lease automation workflow',
        caption: 'End-to-end lease lifecycle automation'
      }
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
      { title: "Dynamic Load Planning", description: "Maximize truck utilization with constraint-aware load builds.", icon: Users },
      { title: "Carrier Marketplace", description: "Compare rates, SLAs, and book carriers programmatically.", icon: Users },
      { title: "Live Tracking & ETA", description: "Provide geofenced updates and predictive ETAs to customers.", icon: Activity }
    ],
    advantages: [
      {
        title: "Reduce Shipping Costs by 25%",
        description: "Smart load planning and carrier rate optimization minimize per-shipment expenses.",
        icon: DollarSign
      },
      {
        title: "Accelerate Delivery Times",
        description: "Consolidated shipments and optimized routing reduce transit times by 15-20%.",
        icon: Clock
      },
      {
        title: "Improve Delivery Transparency",
        description: "Real-time tracking and predictive ETAs keep customers informed and reduce support inquiries.",
        icon: Globe
      },
      {
        title: "Manage Multi-Carrier Operations",
        description: "Unified interface for LTL, FTL, and parcel carriers simplifies complex logistics.",
        icon: Users
      },
      {
        title: "Proactive Exception Management",
        description: "Automated alerts on delays enable quick corrective action before customer impact.",
        icon: AlertCircle
      },
      {
        title: "Optimize For Sustainability",
        description: "Route optimization and consolidation reduce carbon footprint and environmental impact.",
        icon: TrendingUp
      },
      {
        title: "Enable Flexible Delivery Options",
        description: "Support alternative delivery locations, time windows, and signature requirements.",
        icon: Smartphone
      },
      {
        title: "Strengthen Customer Relationships",
        description: "Proactive communication and reliable delivery drive customer loyalty and retention.",
        icon: HeartHandshake
      }
    ],
    media: [
      {
        type: 'screenshot',
        src: '/demo/logistics/load-planning.png',
        alt: 'Smart load planning',
        caption: 'Intelligent load optimization and consolidation'
      },
      {
        type: 'screenshot',
        src: '/demo/logistics/tracking.png',
        alt: 'Real-time shipment tracking',
        caption: 'Live tracking with ETA predictions'
      },
      {
        type: 'video',
        src: '/demo/logistics/carrier-coordination.mp4',
        alt: 'Multi-carrier coordination',
        caption: 'Seamless multi-carrier operations management'
      }
    ]
  }
};
