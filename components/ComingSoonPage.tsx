import React from 'react';

const ComingSoonPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 md:px-12 py-24 md:py-32 animate-fade-in">
      <h1 className="text-3xl md:text-4xl font-bold text-amber-300 mb-8 border-b-2 border-slate-700 pb-4">
        Coming Soon
      </h1>
      <div className="flex flex-col items-center justify-center min-h-[30vh] text-center">
        <p className="text-lg md:text-xl text-gray-400">
          No upcoming releases.
        </p>
        <p className="text-base text-gray-500 mt-4">
          Check back later for news on future projects!
        </p>
      </div>
    </div>
  );
};

export default ComingSoonPage;
