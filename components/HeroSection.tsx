
import React from 'react';
import type { Animation } from '../types';
import { PLAY_ICON, INFO_ICON } from '../constants';

interface HeroSectionProps {
  animations: Animation[];
  currentIndex: number;
  onSelect?: (animation: Animation) => void;
  onNext: () => void;
  onPrev: () => void;
  onSetIndex: (index: number) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ animations, currentIndex, onSelect, onNext, onPrev, onSetIndex }) => {
  if (!animations || animations.length === 0) {
    return (
      <div className="relative h-[60vh] md:h-[90vh] w-full flex items-center justify-center">
        <div className="absolute inset-0 bg-slate-900"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
        <div className="relative text-center px-4">
          <h1 className="text-4xl md:text-6xl font-black text-amber-400 mb-4">
            Chickensoup Animations
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Freshly hatched stories and classic animations, served warm for your soul. More content coming soon!
          </p>
        </div>
      </div>
    );
  }

  const animation = animations[currentIndex];

  const handleSelectShow = () => {
    if (onSelect) {
      onSelect(animation);
    }
  };

  const renderIntermission = () => {
    if (animation.studio === 'Ploto-Samir Studios') {
      return (
        <div className="flex items-center space-x-2 mb-4 animate-fade-in-up">
           <span className="text-pink-400 text-2xl font-black italic tracking-tight" style={{ fontFamily: "'Shadows Into Light', cursive" }}>
             Ploto-Samir Studios
           </span>
        </div>
      );
    }

    return (
      <div className="flex items-center space-x-2 mb-4 animate-fade-in-up">
         <span className="text-amber-400 text-3xl font-black italic tracking-tighter">CHICKENSOUP</span>
      </div>
    );
  };

  return (
    <div className="relative h-[60vh] md:h-[90vh] w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out"
        style={{ backgroundImage: `url(${animation.heroImageUrl})`, transform: 'scale(1.05)' }}
        key={animation.id}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/40 to-transparent"></div>
      
      {/* Content */}
      <div className="relative h-full flex flex-col justify-end px-4 md:px-12 pb-32">
        <div className="max-w-xl text-white" key={animation.id}>
          <div className="animate-fade-in-up">
            {renderIntermission()}
            <h1 className="text-4xl md:text-6xl font-black mb-4 uppercase tracking-tight">{animation.title}</h1>
            <div className="flex items-center space-x-4 text-sm text-gray-300 mb-4">
              <span>{animation.year}</span>
              <span className="border border-gray-500 px-2 py-0.5 rounded">{animation.rating}</span>
              <span>{animation.duration}</span>
            </div>
            <p className="text-base md:text-lg mb-8 line-clamp-3">{animation.description}</p>
            <div className="flex items-center space-x-4">
              <button 
                onClick={handleSelectShow}
                className="bg-amber-400 hover:bg-amber-500 text-slate-900 font-bold py-3 px-6 rounded-lg flex items-center space-x-2 transition-transform hover:scale-105 active:scale-95">
                {PLAY_ICON}
                <span>Play</span>
              </button>
              <button 
                onClick={handleSelectShow}
                className="bg-slate-700/60 hover:bg-slate-600/80 text-white font-bold py-3 px-6 rounded-lg flex items-center space-x-2 transition-transform hover:scale-105 active:scale-95 backdrop-blur-sm">
                {INFO_ICON}
                <span>More Info</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button onClick={onPrev} className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 p-2 rounded-full text-white hover:bg-black/60 transition-colors z-20 active:scale-95">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
      </button>
      <button onClick={onNext} className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 p-2 rounded-full text-white hover:bg-black/60 transition-colors z-20 active:scale-95">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
      </button>
      
      {/* Indicator Dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
        {animations.map((_, index) => (
          <button 
            key={index} 
            onClick={() => onSetIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${currentIndex === index ? 'bg-amber-400 w-4' : 'bg-white/40'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
