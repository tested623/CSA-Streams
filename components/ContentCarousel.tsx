import React from 'react';
import type { Animation } from '../types';
import VideoCard from './VideoCard';

interface ContentCarouselProps {
  title: string;
  animations: Animation[];
  onSelectAnimation: (animation: Animation) => void;
}

const ContentCarousel: React.FC<ContentCarouselProps> = ({ title, animations, onSelectAnimation }) => {
  return (
    <section>
      <h2 className="text-xl md:text-2xl font-bold mb-4 text-amber-300">{title}</h2>
      <div className="flex overflow-x-auto space-x-4 pb-4 -mx-4 px-4 scrollbar-hide min-h-[5rem] items-center">
        {animations.length > 0 ? (
          animations.map((animation) => (
            <VideoCard 
              key={animation.id} 
              animation={animation} 
              onSelect={onSelectAnimation} 
            />
          ))
        ) : (
          <p className="text-gray-500">There are currently no films in this section.</p>
        )}
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