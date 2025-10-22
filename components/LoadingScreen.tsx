import React from 'react';

const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-slate-900 flex items-center justify-center z-[100]">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-black text-amber-400 animate-pulse-slow">
          CHICKENSOUP
        </h1>
      </div>
    </div>
  );
};

export default LoadingScreen;