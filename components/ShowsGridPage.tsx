import React from 'react';
import type { Animation } from '../types';
import VideoCard from './VideoCard';

interface ShowsGridPageProps {
  animations: Animation[];
  onSelectAnimation: (animation: Animation) => void;
  onPlayAnimation: (animation: Animation) => void;
}

const ShowsGridPage: React.FC<ShowsGridPageProps> = ({ animations, onSelectAnimation, onPlayAnimation }) => {
  const shows = animations.filter(anim => anim.category === 'shows');

  return (
    <div className="container mx-auto px-4 md:px-12 py-24 md:py-32">
      <h1 className="text-3xl md:text-4xl font-bold text-amber-300 mb-8 border-b-2 border-slate-700 pb-4">
        All Shows
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
        {shows.map((animation, index) => (
          <div 
            key={animation.id}
            className="animate-fade-in-up"
            style={{ animationDelay: `${index * 50}ms`}}
          >
            <VideoCard 
              animation={animation}
              onSelect={onSelectAnimation}
              onPlay={() => onPlayAnimation(animation)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowsGridPage;