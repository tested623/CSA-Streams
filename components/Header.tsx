import React, { useState, useEffect } from 'react';
import type { Profile } from '../types';

interface HeaderProps {
  onHomeClick?: () => void;
  onShowsClick?: () => void;
  onShortFilmsClick?: () => void;
  onNewsClick?: () => void;
  onComingSoonClick?: () => void;
  onSearchClick?: () => void;
  currentProfile: Profile | null;
  onSwitchProfile: () => void;
}

const Header: React.FC<HeaderProps> = ({ onHomeClick, onShowsClick, onShortFilmsClick, onNewsClick, onComingSoonClick, onSearchClick, currentProfile, onSwitchProfile }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${isScrolled ? 'bg-slate-900' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 md:px-12 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-8">
          <button onClick={onHomeClick} className="text-2xl md:text-3xl font-black text-amber-400 transition-transform active:scale-95">
            CHICKENSOUP
          </button>
          <nav className="hidden md:flex items-center space-x-6">
            <button onClick={onHomeClick} className="text-sm font-semibold text-white hover:text-amber-300 transition-colors">Home</button>
            <button onClick={onShowsClick} className="text-sm font-semibold text-white hover:text-amber-300 transition-colors">Shows</button>
            <button onClick={onShortFilmsClick} className="text-sm font-semibold text-white hover:text-amber-300 transition-colors">Short Films</button>
            <button onClick={onNewsClick} className="text-sm font-semibold text-gray-300 hover:text-amber-300 transition-colors">News</button>
            <button onClick={onComingSoonClick} className="text-sm font-semibold text-gray-300 hover:text-amber-300 transition-colors">Coming Soon</button>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <button onClick={onSearchClick} className="text-white hover:text-amber-300 transition-colors active:scale-95">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          {currentProfile && (
            <div className="relative group">
              <button className="w-8 h-8 md:w-10 md:h-10 rounded-md overflow-hidden border-2 border-transparent group-hover:border-amber-400 transition">
                <img src={currentProfile.avatarUrl} alt={currentProfile.name} className="w-full h-full object-cover" />
              </button>
              <div className="absolute top-full right-0 mt-2 w-48 bg-slate-800 border border-slate-700 rounded-md shadow-lg p-2 text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none group-hover:pointer-events-auto z-10">
                <div className="font-bold border-b border-slate-700 pb-2 mb-2 px-2">{currentProfile.name}</div>
                <button onClick={onSwitchProfile} className="w-full text-left px-2 py-1.5 rounded hover:bg-slate-700 transition-transform active:scale-95">Switch Profile</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;