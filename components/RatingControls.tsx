import React from 'react';
import type { Animation } from '../types';
import { LIKE_ICON, SUPERLIKE_ICON, DISLIKE_ICON } from '../constants';

type Rating = 'like' | 'superlike' | 'dislike';

interface RatingControlsProps {
  animation: Animation;
  userRating?: Rating;
  onRate: (animationId: number, rating: Rating | null) => void;
}

const RatingButton: React.FC<{
  label: string;
  // FIX: Replaced JSX.Element with React.ReactElement to resolve "Cannot find namespace 'JSX'" error.
  icon: React.ReactElement;
  isActive: boolean;
  onClick: () => void;
}> = ({ label, icon, isActive, onClick }) => {
  const activeClasses = 'bg-amber-400 text-slate-900';
  const inactiveClasses = 'bg-slate-700/60 hover:bg-slate-600/80 text-white';

  return (
    <button
      onClick={onClick}
      className={`font-bold py-2 px-4 rounded-lg flex items-center space-x-2 transition-transform hover:scale-105 active:scale-95 backdrop-blur-sm text-sm ${isActive ? activeClasses : inactiveClasses}`}
      aria-pressed={isActive}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
};


const RatingControls: React.FC<RatingControlsProps> = ({ animation, userRating, onRate }) => {
  const handleRate = (rating: Rating) => {
    // If clicking the same button, un-rate it. Otherwise, set the new rating.
    const newRating = userRating === rating ? null : rating;
    onRate(animation.id, newRating);
  };

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-6">
        <div className="flex items-center space-x-2">
            <RatingButton 
                label="Like"
                icon={LIKE_ICON}
                isActive={userRating === 'like'}
                onClick={() => handleRate('like')}
            />
            <RatingButton 
                label="Superlike"
                icon={SUPERLIKE_ICON}
                isActive={userRating === 'superlike'}
                onClick={() => handleRate('superlike')}
            />
            <RatingButton 
                label="Dislike"
                icon={DISLIKE_ICON}
                isActive={userRating === 'dislike'}
                onClick={() => handleRate('dislike')}
            />
        </div>
        <div className="flex items-center space-x-4 text-sm text-gray-400">
            {animation.likes !== undefined && (
                <div className="flex items-center space-x-1">
                    <div className="text-green-400">{React.cloneElement(LIKE_ICON, {className: 'w-4 h-4'})}</div>
                    <span>{animation.likes.toLocaleString()}</span>
                </div>
            )}
             {animation.superlikes !== undefined && (
                <div className="flex items-center space-x-1">
                    <div className="text-yellow-400">{React.cloneElement(SUPERLIKE_ICON, {className: 'w-4 h-4'})}</div>
                    <span>{animation.superlikes.toLocaleString()}</span>
                </div>
            )}
        </div>
    </div>
  );
};

export default RatingControls;
