import React, { useState } from 'react';
import type { Animation } from '../types';
import EpisodeCard from './EpisodeCard';
import VideoPlayer from './VideoPlayer';
import { PLAY_ICON } from '../constants';

interface ShowDetailViewProps {
  animation: Animation;
  onBack: () => void;
  onAddToWatchHistory: (animationId: number) => void;
}

const ShowDetailView: React.FC<ShowDetailViewProps> = ({ animation, onBack, onAddToWatchHistory }) => {
  const [selectedSeason, setSelectedSeason] = useState(animation.seasons?.[0]?.seasonNumber || 1);
  const [playingVideoUrl, setPlayingVideoUrl] = useState<string | null>(null);

  const isShortFilm = !animation.seasons && !!animation.videoUrl;
  const currentSeason = animation.seasons?.find(s => s.seasonNumber === selectedSeason);

  const handlePlayEpisode = (videoUrl: string) => {
    setPlayingVideoUrl(videoUrl);
    onAddToWatchHistory(animation.id);
  };

  const handleClosePlayer = () => {
    setPlayingVideoUrl(null);
  };

  const handlePlay = () => {
    const urlToPlay = isShortFilm ? animation.videoUrl : animation.trailerUrl;
    if (urlToPlay) {
      handlePlayEpisode(urlToPlay);
    }
  };

  return (
    <div className="animate-fade-in">
      {playingVideoUrl && <VideoPlayer videoUrl={playingVideoUrl} onClose={handleClosePlayer} />}

      {/* Hero Section for the Detail View */}
      <div className="relative h-[50vh] md:h-[70vh] w-full">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${animation.heroImageUrl})` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent"></div>
        <div className="relative h-full flex flex-col justify-end px-4 md:px-12 pb-12">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-6xl font-black mb-4">{animation.title}</h1>
            <div className="flex items-center space-x-4 text-sm text-gray-300 mb-4">
              <span>{animation.year}</span>
              <span className="border border-gray-500 px-2 py-0.5 rounded">{animation.rating}</span>
              <span>{animation.duration}</span>
            </div>
            <p className="text-base md:text-lg mb-6 line-clamp-3">{animation.description}</p>
            <button 
              onClick={handlePlay}
              className="bg-amber-400 hover:bg-amber-500 text-slate-900 font-bold py-3 px-6 rounded-lg flex items-center space-x-2 transition-transform hover:scale-105 active:scale-95 disabled:bg-gray-500 disabled:cursor-not-allowed"
              disabled={isShortFilm ? !animation.videoUrl : !animation.trailerUrl}
            >
              {PLAY_ICON}
              <span>{isShortFilm ? 'Play Film' : 'Play Trailer'}</span>
            </button>
          </div>
        </div>
      </div>

      <div className="px-4 md:px-12 py-8">
        <button 
          onClick={onBack}
          className="mb-8 bg-slate-800 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded-lg transition-colors flex items-center space-x-2 transition-transform active:scale-95"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          <span>Back to Browse</span>
        </button>

        {/* Episodes Section - Conditionally Rendered */}
        {!isShortFilm && (
          <>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-amber-300">Episodes</h2>
              {animation.seasons && animation.seasons.length > 1 && (
                <select
                  value={selectedSeason}
                  onChange={(e) => setSelectedSeason(Number(e.target.value))}
                  className="bg-slate-800 border border-slate-700 text-white text-sm rounded-md p-2 focus:ring-amber-400 focus:border-amber-400"
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
              {currentSeason?.episodes.length > 0 ? (
                currentSeason.episodes.map((episode, index) => (
                  <EpisodeCard 
                    key={episode.id} 
                    episode={episode} 
                    index={index + 1} 
                    onPlay={() => handlePlayEpisode(episode.videoUrl)}
                  />
                ))
              ) : (
                <p className="text-gray-500">No episodes available for this season yet.</p>
              )}

              {currentSeason?.seasonNumber === animation.seasons?.[animation.seasons.length - 1].seasonNumber && (
                <div className="text-center text-amber-300 font-semibold py-8">
                  More coming soon, Stay Tuned!
                </div>
              )}

              {!currentSeason && (
                <p className="text-gray-500">No episodes available for this show yet.</p>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ShowDetailView;