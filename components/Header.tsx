
import React, { useState, useEffect, useRef } from 'react';
import type { Profile, User } from '../types';
import type { View } from '../App';

interface HeaderProps {
  onNavigate: (view: View) => void;
  onSearchClick?: () => void;
  currentUser: User | null;
  currentProfile: Profile | null;
  onSwitchProfile: () => void;
  onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, onSearchClick, currentUser, currentProfile, onSwitchProfile, onLogout }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const profileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (profileMenuRef.current && !profileMenuRef.current.contains(event.target as Node)) {
        setIsProfileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSwitchAndClose = () => {
    onSwitchProfile();
    setIsProfileMenuOpen(false);
  };

  const handleLogoutAndClose = () => {
    onLogout();
    setIsProfileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${isScrolled ? 'bg-slate-900' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 md:px-12 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-8">
          <button onClick={() => onNavigate('home')} className="text-2xl md:text-3xl font-black text-amber-400 transition-transform active:scale-95">
            CHICKENSOUP
          </button>
          <nav className="hidden md:flex items-center space-x-6">
            <button onClick={() => onNavigate('home')} className="text-sm font-semibold text-white hover:text-amber-300 transition-colors">Home</button>
            <button onClick={() => onNavigate('shows')} className="text-sm font-semibold text-white hover:text-amber-300 transition-colors">Shows</button>
            <button onClick={() => onNavigate('short-films')} className="text-sm font-semibold text-white hover:text-amber-300 transition-colors">Short Films</button>
            <button onClick={() => onNavigate('my-list')} className="text-sm font-semibold text-white hover:text-amber-300 transition-colors">My List</button>
            <button onClick={() => onNavigate('news')} className="text-sm font-semibold text-gray-300 hover:text-amber-300 transition-colors">News</button>
            <button onClick={() => onNavigate('coming-soon')} className="text-sm font-semibold text-gray-300 hover:text-amber-300 transition-colors">Coming Soon</button>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <button onClick={onSearchClick} className="text-white hover:text-amber-300 transition-colors active:scale-95">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          {currentProfile && (
            <div className="relative" ref={profileMenuRef}>
              <button 
                onClick={() => setIsProfileMenuOpen(prev => !prev)}
                className={`w-8 h-8 md:w-10 md:h-10 rounded-md overflow-hidden border-2 transition ${isProfileMenuOpen ? 'border-amber-400' : 'border-transparent hover:border-amber-400'}`}
              >
                <img src={currentProfile.avatarUrl} alt={currentProfile.name} className="w-full h-full object-cover" />
              </button>
              <div className={`absolute top-full right-0 mt-2 w-48 bg-slate-800 border border-slate-700 rounded-md shadow-lg p-2 text-sm text-white transition-all duration-200 z-10 ${isProfileMenuOpen ? 'opacity-100 pointer-events-auto scale-100' : 'opacity-0 pointer-events-none scale-95'}`}>
                <div className="font-bold border-b border-slate-700 pb-2 mb-2 px-2">{currentProfile.name}</div>
                <button onClick={() => onNavigate('account')} className="w-full text-left px-2 py-1.5 rounded hover:bg-slate-700 transition-transform active:scale-95">Account</button>
                <button onClick={handleSwitchAndClose} className="w-full text-left px-2 py-1.5 rounded hover:bg-slate-700 transition-transform active:scale-95">Switch Profile</button>
                <button onClick={handleLogoutAndClose} className="w-full text-left px-2 py-1.5 rounded hover:bg-slate-700 transition-transform active:scale-95">Log Out</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
