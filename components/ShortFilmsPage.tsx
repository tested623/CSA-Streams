import React from 'react';
import type { Animation } from '../types';
import VideoCard from './VideoCard';

interface ShortFilmsPageProps {
  animations: Animation[];
  onSelectAnimation: (animation: Animation) => void;
  onPlayAnimation: (animation: Animation) => void;
  onAddFilmClick?: () => void;
}

const ShortFilmsPage: React.FC<ShortFilmsPageProps> = ({ animations, onSelectAnimation, onPlayAnimation, onAddFilmClick }) => {
  const shortFilms = animations.filter(anim => anim.category === 'short-films');

  return (
    <div className="container mx-auto px-4 md:px-12 py-24 md:py-32">
       <div className="flex justify-between items-center mb-8 border-b-2 border-slate-700 pb-4">
        <h1 className="text-3xl md:text-4xl font-bold text-amber-300">
            Short Films
        </h1>
        {onAddFilmClick && (
            <button
            onClick={onAddFilmClick}
            className="bg-amber-400 hover:bg-amber-500 text-slate-900 font-bold py-2 px-4 rounded-lg flex items-center space-x-2 transition-transform hover:scale-105 active:scale-95"
            >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
            <span>Add Short Film</span>
            </button>
        )}
      </div>
      {shortFilms.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
          {shortFilms.map((animation, index) => (
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