import React, { useState } from 'react';
import type { Animation } from '../types.ts';
import EpisodeCard from './EpisodeCard.tsx';
import RatingControls from './RatingControls.tsx';
import { PLAY_ICON } from '../constants.tsx';

interface ShowDetailViewProps {
  animation: Animation;
  onBack: () => void;
  onAddToWatchHistory: (animationId: number) => void;
  onToggleMyList: (animationId: number) => void;
  isInMyList: boolean;
  onPlayVideo: (videoUrl: string, posterUrl?: string) => void;
  userRating?: 'like' | 'superlike' | 'dislike';
  onRateAnimation: (animationId: number, rating: 'like' | 'superlike' | 'dislike' | null) => void;
}

const ShowDetailView: React.FC<ShowDetailViewProps> = ({ animation, onBack, onAddToWatchHistory, onToggleMyList, isInMyList, onPlayVideo, userRating, onRateAnimation }) => {
  const [selectedSeason, setSelectedSeason] = useState(animation.seasons?.[0]?.seasonNumber || 1);

  const isShortFilm = !animation.seasons && !!animation.videoUrl;
  const currentSeason = animation.seasons?.find(s => s.seasonNumber === selectedSeason);

  const lastSeason = animation.seasons && animation.seasons.length > 0 
    ? animation.seasons[animation.seasons.length - 1] 
    : null;
  const isLastSeason = currentSeason && lastSeason && currentSeason.seasonNumber === lastSeason.seasonNumber;

  const handlePlayEpisode = (videoUrl: string, episodeThumbnail?: string) => {
    onPlayVideo(videoUrl, episodeThumbnail || animation.heroImageUrl);
    onAddToWatchHistory(animation.id);
  };
  
  const handlePlay = () => {
    const urlToPlay = isShortFilm 
      ? animation.videoUrl 
      : animation.trailerUrl || animation.seasons?.[0]?.episodes?.[0]?.videoUrl;

    if (urlToPlay) {
      handlePlayEpisode(urlToPlay, animation.heroImageUrl);
    }
  };
  
  const MyListButton = () => (
    <button
      onClick={() => onToggleMyList(animation.id)}
      className="bg-slate-700/60 hover:bg-slate-600/80 text-white font-bold py-3 px-6 rounded-lg flex items-center space-x-2 transition-transform hover:scale-105 active:scale-95 backdrop-blur-sm"
    >
      {isInMyList ? (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
        </svg>
      )}
      <span>{isInMyList ? 'In My List' : 'Add to My List'}</span>
    </button>
  );

  const renderIntermission = () => {
    if (animation.studio === 'Ploto-Samir Studios') {
      return (
        <h3 className="text-2xl md:text-3xl font-black text-pink-400 mb-2 drop-shadow-md" style={{ fontFamily: "'Shadows Into Light', cursive" }}>
          Ploto-Samir Studios
        </h3>
      );
    }

    return (
      <h3 className="text-2xl md:text-3xl font-black text-amber-400 mb-2 drop-shadow-md">
        CHICKENSOUP
      </h3>
    );
  };

  return (
    <div>
      <div className="relative h-[50vh] md:h-[70vh] w-full">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${animation.heroImageUrl})` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent"></div>
        <div className="relative h-full flex flex-col justify-end px-4 md:px-12 pb-12">
          <div className="max-w-2xl text-white">
            {renderIntermission()}
            <h1 className="text-4xl md:text-6xl font-black mb-4 uppercase tracking-tight">{animation.title}</h1>
            <div className="flex items-center space-x-4 text-sm text-gray-300 mb-4">
              <span>{animation.year}</span>
              <span className="border border-gray-500 px-2 py-0.5 rounded">{animation.rating}</span>
              <span>{animation.duration}</span>
            </div>
            <p className="text-base md:text-lg mb-6 line-clamp-3 leading-relaxed">{animation.description}</p>
            <div className="flex items-center space-x-4">
              <button 
                onClick={handlePlay}
                className="bg-amber-400 hover:bg-amber-500 text-slate-900 font-bold py-3 px-6 rounded-lg flex items-center space-x-2 transition-transform hover:scale-105 active:scale-95 disabled:bg-gray-500 disabled:cursor-not-allowed shadow-lg"
                disabled={isShortFilm ? !animation.videoUrl : !animation.trailerUrl && !animation.seasons?.[0]?.episodes?.[0]?.videoUrl}
              >
                {PLAY_ICON}
                <span>{isShortFilm ? 'Play Film' : 'Play Trailer'}</span>
              </button>
              <MyListButton />
            </div>
            <RatingControls 
              animation={animation}
              userRating={userRating}
              onRate={onRateAnimation}
            />
          </div>
        </div>
      </div>

      <div className="px-4 md:px-12 py-8">
        <button 
          onClick={onBack}
          className="mb-8 bg-slate-800 hover:bg-slate-700 text-white font-bold py-2.5 px-6 rounded-lg transition-all flex items-center space-x-2 active:scale-95 shadow-md"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          <span>Back to Browse</span>
        </button>

        {!isShortFilm && (
          <>
            <div className="flex justify-between items-center mb-8 border-b border-slate-800 pb-4">
              <h2 className="text-2xl font-bold text-amber-300">Episodes</h2>
              {animation.seasons && animation.seasons.length > 1 && (
                <select
                  value={selectedSeason}
                  onChange={(e) => setSelectedSeason(Number(e.target.value))}
                  className="bg-slate-800 border border-slate-700 text-white text-sm rounded-md p-2 focus:ring-amber-400 focus:border-amber-400 outline-none"
                >
                  {animation.seasons.map(season => (
                    <option key={season.seasonNumber} value={season.seasonNumber}>
                      {season.title || `Season ${season.seasonNumber}`}
                    </option>
                  ))}
                </select>
              )}
            </div>

            <div className="space-y-4">
              {currentSeason && currentSeason.episodes.length > 0 ? (
                currentSeason.episodes.map((episode, index) => (
                  <EpisodeCard 
                    key={episode.id} 
                    episode={episode} 
                    index={index + 1} 
                    onPlay={() => handlePlayEpisode(episode.videoUrl, episode.thumbnailUrl)}
                  />
                ))
              ) : (
                <p className="text-gray-500 py-4 italic text-center">No episodes available for this season yet.</p>
              )}

              {isLastSeason && (
                <div className="text-center text-amber-300 font-semibold py-12 border-t border-slate-800/50 mt-8">
                  {animation.status === 'Discontinued' ? 'Show Discontinued' : 'More coming soon, Stay Tuned!'}
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ShowDetailView;