
import React from 'react';
import Logo from './Logo';

interface NavbarProps {
  onHomeClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onHomeClick }) => {
  return (
    <nav className="sticky top-0 z-50 w-full glass-card border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-3">
            <button 
              onClick={onHomeClick}
              className="flex items-center gap-3 group text-left"
            >
              <Logo className="w-12 h-12 group-hover:scale-110 transition-transform duration-300" />
              <div className="flex flex-col">
                <span className="text-2xl font-extrabold tracking-tight text-brand-green brand-font leading-none">Dietni<span className="text-brand-green/80">AI</span></span>
                <span className="text-[8px] font-bold text-slate-400 tracking-widest uppercase mt-1">Smart Eating Control</span>
              </div>
            </button>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" onClick={(e) => { e.preventDefault(); onHomeClick(); window.location.hash = 'features'; }} className="text-sm font-semibold text-slate-600 hover:text-brand-green transition-colors">Features</a>
            <a href="#how-it-works" onClick={(e) => { e.preventDefault(); onHomeClick(); window.location.hash = 'how-it-works'; }} className="text-sm font-semibold text-slate-600 hover:text-brand-green transition-colors">How it Works</a>
            <a href="#about" onClick={(e) => { e.preventDefault(); onHomeClick(); window.location.hash = 'about'; }} className="text-sm font-semibold text-slate-600 hover:text-brand-green transition-colors">About Us</a>
            <a 
              href="https://wa.me/message/JG23QMDOWWUZO1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-brand-green text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-black transition-all shadow-md active:scale-95 inline-block"
            >
              Start on WhatsApp
            </a>
          </div>
          <div className="md:hidden">
            <button className="text-slate-600 p-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
