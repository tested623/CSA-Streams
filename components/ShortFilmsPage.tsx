import React from 'react';
import type { Animation } from '../types';
import VideoCard from './VideoCard';

interface ShortFilmsPageProps {
  animations: Animation[];
  onSelectAnimation: (animation: Animation) => void;
}

const ShortFilmsPage: React.FC<ShortFilmsPageProps> = ({ animations, onSelectAnimation }) => {
  const shortFilms = animations.filter(anim => anim.category === 'short-films');

  return (
    <div className="container mx-auto px-4 md:px-12 py-24 md:py-32 animate-fade-in">
      <h1 className="text-3xl md:text-4xl font-bold text-amber-300 mb-8 border-b-2 border-slate-700 pb-4">
        Short Films
      </h1>
      {shortFilms.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
          {shortFilms.map(animation => (
            <VideoCard 
              key={animation.id}
              animation={animation}
              onSelect={onSelectAnimation}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center min-h-[30vh] text-center">
          <p className="text-lg md:text-xl text-gray-400">
            No Shorts Released yet
          </p>
        </div>
      )}
    </div>
  );
};

export default ShortFilmsPage;