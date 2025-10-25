import React from 'react';
import type { Animation } from '../types';
import VideoCard from './VideoCard';

interface MyListPageProps {
  animations: Animation[];
  onSelectAnimation: (animation: Animation) => void;
  onPlayAnimation: (animation: Animation) => void;
}

const MyListPage: React.FC<MyListPageProps> = ({ animations, onSelectAnimation, onPlayAnimation }) => {
  return (
    <div className="container mx-auto px-4 md:px-12 py-24 md:py-32">
      <h1 className="text-3xl md:text-4xl font-bold text-amber-300 mb-8 border-b-2 border-slate-700 pb-4">
        My List
      </h1>
      {animations.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
          {animations.map((animation, index) => (
            <div
              key={animation.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 50}ms` }}
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
        <div className="flex flex-col items-center justify-center min-h-[40vh] text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Your List is Empty</h2>
          <p className="text-lg text-gray-400 max-w-md">
            Add shows and movies to your list to watch them later. Just look for the '+' icon.
          </p>
        </div>
      )}
    </div>
  );
};

export default MyListPage;