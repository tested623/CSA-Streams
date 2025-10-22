import React, { useEffect, useRef } from 'react';
import type { Animation } from '../types';
import VideoCard from './VideoCard';

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  searchQuery: string;
  onSearchQueryChange: (query: string) => void;
  results: Animation[];
  onSelectAnimation: (animation: Animation) => void;
}

const SearchOverlay: React.FC<SearchOverlayProps> = ({
  isOpen,
  onClose,
  searchQuery,
  onSearchQueryChange,
  results,
  onSelectAnimation,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);
  
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-slate-900/95 z-50 animate-fade-in backdrop-blur-sm overflow-y-auto">
      <div className="container mx-auto px-4 md:px-12 py-8">
        <div className="flex justify-between items-center mb-8">
          <input
            ref={inputRef}
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchQueryChange(e.target.value)}
            placeholder="Search for shows..."
            className="w-full bg-transparent border-b-2 border-slate-600 text-3xl md:text-5xl text-white focus:border-amber-400 focus:outline-none"
          />
          <button onClick={onClose} className="text-white text-4xl font-bold ml-4">&times;</button>
        </div>

        {searchQuery && (
          <div>
            <h2 className="text-xl text-gray-400 mb-6">
              {results.length > 0 ? `Showing results for "${searchQuery}"` : `No results found for "${searchQuery}"`}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
              {results.map(animation => (
                <VideoCard 
                  key={animation.id}
                  animation={animation}
                  onSelect={onSelectAnimation}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchOverlay;