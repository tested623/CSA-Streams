
import React, { useRef } from 'react';
import type { Animation } from '../types';
import VideoCard from './VideoCard';

interface ContentCarouselProps {
  title: string;
  animations: Animation[];
  onSelectAnimation: (animation: Animation) => void;
  onPlayAnimation?: (animation: Animation) => void;
  progressMap?: { [animationId: number]: number };
}

const ContentCarousel: React.FC<ContentCarouselProps> = ({ title, animations, onSelectAnimation, onPlayAnimation, progressMap }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      // Scroll by about 75% of the visible width
      const scrollAmount = direction === 'left' ? -current.clientWidth * 0.75 : current.clientWidth * 0.75;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative group">
      <div className="flex justify-between items-center mb-4 px-4 md:px-0">
        <h2 className="text-xl md:text-2xl font-bold text-amber-300">{title}</h2>
      </div>
      
      <div className="relative">
        {/* Left Scroll Button */}
        <button 
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-black/60 hover:bg-amber-400 hover:text-slate-900 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hidden md:flex items-center justify-center -ml-4 shadow-lg backdrop-blur-sm"
          aria-label="Scroll left"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto space-x-4 pb-4 -mx-4 px-4 scrollbar-hide min-h-[5rem] items-center snap-x scroll-smooth"
        >
          {animations.length > 0 ? (
            animations.map((animation) => (
              <div key={animation.id} className="snap-start">
                <VideoCard 
                  animation={animation} 
                  onSelect={onSelectAnimation}
                  onPlay={onPlayAnimation ? () => onPlayAnimation(animation) : undefined}
                  progress={progressMap?.[animation.id]}
                />
              </div>
            ))
          ) : (
            <p className="text-gray-500 pl-4">There are currently no films in this section.</p>
          )}
        </div>

        {/* Right Scroll Button */}
        <button 
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-black/60 hover:bg-amber-400 hover:text-slate-900 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hidden md:flex items-center justify-center -mr-4 shadow-lg backdrop-blur-sm"
          aria-label="Scroll right"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
};

// A simple utility class to hide scrollbars if Tailwind doesn't have it by default
const style = document.createElement('style');
style.textContent = `
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;
document.head.append(style);

export default ContentCarousel;
