import React from 'react';
import type { Episode } from '../types';
import { PLAY_ICON } from '../constants';

interface EpisodeCardProps {
  episode: Episode;
  index: number;
  onPlay: () => void;
}

const EpisodeCard: React.FC<EpisodeCardProps> = ({ episode, index, onPlay }) => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-slate-800/50 rounded-lg overflow-hidden p-4 gap-4 border-b-2 border-slate-800 hover:bg-slate-800/80 transition-colors duration-300">
      <div className="flex-shrink-0 text-2xl font-bold text-gray-500 w-10 text-center hidden md:block">{index}</div>
      <div 
        className="relative flex-shrink-0 w-full md:w-48 aspect-video rounded-md overflow-hidden group cursor-pointer"
        onClick={onPlay}
      >
        <img src={episode.thumbnailUrl} alt={episode.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="text-white">{PLAY_ICON}</div>
        </div>
      </div>
      <div className="flex-grow">
        <div className="flex justify-between items-baseline">
          <h3 className="text-lg font-bold text-white">{episode.title}</h3>
          <span className="text-sm text-gray-400">{episode.duration}</span>
        </div>
        <p className="text-sm text-gray-400 mt-1 line-clamp-2">{episode.description}</p>
      </div>
       <div className="flex-shrink-0 w-full md:w-auto md:pl-4">
          <button
            onClick={onPlay}
            className="bg-amber-400 hover:bg-amber-500 text-slate-900 font-bold py-2 px-6 rounded-lg flex items-center justify-center space-x-2 transition-transform hover:scale-105 active:scale-95 w-full md:w-auto"
            aria-label={`Play ${episode.title}`}
          >
            {PLAY_ICON}
            <span>Watch</span>
          </button>
      </div>
    </div>
  );
};

export default EpisodeCard;