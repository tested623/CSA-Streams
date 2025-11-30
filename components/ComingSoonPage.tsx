
import React from 'react';

const ComingSoonPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 md:px-12 py-24 md:py-32 animate-fade-in">
      <h1 className="text-3xl md:text-4xl font-bold text-amber-300 mb-8 border-b-2 border-slate-700 pb-4">
        Coming Soon
      </h1>
      
      <div className="bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700 hover:border-amber-400/50 transition-colors group">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 relative aspect-video">
            <img 
              src="https://img.gs/fhcphvsghs/1920/https://i.ibb.co/cKw0nkM8/Two-tales-home.png" 
              alt="Two Tales Season Finale" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent md:bg-gradient-to-r opacity-90"></div>
          </div>
          <div className="md:w-1/2 p-8 flex flex-col justify-center">
             <div className="flex items-center space-x-3 mb-4">
                <span className="bg-amber-400 text-slate-900 text-xs font-bold px-2 py-1 rounded uppercase tracking-wide">
                  Coming Soon
                </span>
                <span className="text-gray-400 text-sm font-medium">Shows</span>
             </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Two Tales Season Finale
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              The anticipated conclusion to the season is on its way. Prepare for this epic episode.
            </p>
            <div className="flex items-center space-x-4">
                <button disabled className="bg-slate-700/50 text-gray-400 font-bold py-3 px-8 rounded-lg cursor-not-allowed border border-slate-600">
                    Coming Soon
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoonPage;
