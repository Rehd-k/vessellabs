import React, { useState, useEffect } from 'react';
import { Layers, ChevronLeft } from 'lucide-react';
import { ViewState } from '../../types';
import Link from 'next/link';

interface NavbarProps {
  currentView: ViewState;
  onBack: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView, onBack }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || currentView !== 'HUB' ? 'bg-white/80 backdrop-blur-md border-b border-slate-200 py-3' : 'bg-transparent py-5 border-transparent'
      }`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href={'/'} className="flex items-center gap-2 cursor-pointer">
          <div className="bg-blue-600 text-white p-1.5 rounded-lg">
            <Layers className="h-5 w-5" />
          </div>
          <span className={`font-bold text-xl tracking-tight text-slate-900`}>
            Vessel Labs
          </span>
        </Link>

        <div className="flex items-center gap-4">
          {currentView !== 'HUB' && (
            <button
              onClick={onBack}
              className="hidden md:flex items-center text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors"
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back to Hub
            </button>
          )}

          <Link
            href="/request-demo"
            className={`text-sm font-semibold px-4 py-2 rounded-lg transition-colors bg-slate-900 text-white hover:bg-slate-800 `}
          >
            Request Demo
          </Link>
        </div>
      </div>
    </nav>
  );
};

/**
 *  ${
             scrolled || currentView !== 'HUB' 
             ? 'bg-slate-900 text-white hover:bg-slate-800' 
             : 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm'
          }
 */