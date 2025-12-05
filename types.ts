import { LucideIcon } from 'lucide-react';

export enum IndustryType {
  HEALTHCARE = 'HEALTHCARE',
  HOSPITALITY = 'HOSPITALITY',
  SUPERMARKETS = 'SUPERMARKETS',
  DISTRIBUTION = 'DISTRIBUTION',
  ACCOUNTING = 'ACCOUNTING',
  EDUCATION = 'EDUCATION',
  RETAIL = 'RETAIL',
  LOGISTICS = 'LOGISTICS',
  MAUNFACTURING = 'MAUNFACTURING',
  RealEstate = 'REALESTATE'
}

export interface IndustryConfig {
  id: IndustryType;
  name: string;
  tagline: string;
  description: string;
  colors: {
    primary: string; // Used for backgrounds/buttons
    secondary: string; // Lighter accent
    text: string; // Text accent
    badge: string; // Badge background
    border: string;
    gradientFrom: string;
    gradientTo: string;
  };
  icon: LucideIcon;
  features: {
    title: string;
    description: string;
    icon: LucideIcon;
  }[];
}

export interface DemoAdvantage {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface DemoMediaItem {
  type: 'screenshot' | 'video';
  src: string;
  alt: string;
  caption: string;
}

export interface IndustryDemoConfig extends IndustryConfig {
  advantages: DemoAdvantage[];
  media: DemoMediaItem[];
}

export interface DemoFormData {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  industry: IndustryType;
  companySize: string;
  challenges: string;
  timeline: string;
  message: string;
}

export type ViewState = 'HUB' | IndustryType;