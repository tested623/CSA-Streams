import React from 'react';
import type { Animation } from '../types';
import { PLAY_ICON } from '../constants';

interface VideoCardProps {
  animation: Animation;
  onSelect: (animation: Animation) => void;
  onPlay?: () => void;
  progress?: number;
}

const VideoCard: React.FC<VideoCardProps> = ({ animation, onSelect, onPlay, progress }) => {
  const handlePlayClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent onSelect from firing when play is clicked
    if (onPlay) {
      onPlay();
    }
  };
  
  return (
    <div 
      className="group relative flex-shrink-0 w-40 md:w-52 cursor-pointer transition-transform active:scale-95"
      onClick={() => onSelect(animation)}
    >
      <div className="aspect-[2/3] overflow-hidden rounded-lg relative bg-slate-800">
        <img 
          src={animation.thumbnailUrl} 
          alt={animation.title} 
          className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
        />
        {progress !== undefined && progress > 0 && progress < 1 && (
          <div className="absolute bottom-0 left-0 w-full h-1.5 bg-gray-500/50 z-10">
            <div 
              className="h-full bg-amber-400" 
              style={{ width: `${progress * 100}%` }}
            ></div>
          </div>
        )}
        {/* Play button appears on hover */}
        {onPlay && (
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button 
                  onClick={handlePlayClick}
                  className="text-white p-3 bg-black/40 rounded-full hover:bg-amber-400 hover:text-slate-900 transition-all active:scale-90"
                  aria-label={`Play ${animation.title}`}
              >
                  {React.cloneElement(PLAY_ICON, {className: "w-8 h-8"})}
              </button>
          </div>
        )}
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-lg pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 p-3 pointer-events-none w-full">
        <h3 className="text-white text-sm font-bold line-clamp-2">{animation.title}</h3>
      </div>
    </div>
  );
};

export default VideoCard;