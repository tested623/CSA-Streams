
import React from 'react';
import type { Animation } from '../types';

interface VideoCardProps {
  animation: Animation;
  onSelect: (animation: Animation) => void;
}

const VideoCard: React.FC<VideoCardProps> = ({ animation, onSelect }) => {
  return (
    <div 
      className="group relative flex-shrink-0 w-40 md:w-52 cursor-pointer transition-transform active:scale-95"
      onClick={() => onSelect(animation)}
    >
      <div className="aspect-[2/3] overflow-hidden rounded-lg">
        <img 
          src={animation.thumbnailUrl} 
          alt={animation.title} 
          className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg"></div>
      <div className="absolute bottom-0 left-0 p-3">
        <h3 className="text-white text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2">{animation.title}</h3>
      </div>
    </div>
  );
};

export default VideoCard;