
import React from 'react';

const CareersPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 md:px-12 py-24 md:py-32 animate-fade-in">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-amber-300 mb-4 text-center">
          Join Our Creative Cauldron
        </h1>
        <p className="text-lg text-gray-300 text-center mb-12">
          We're always looking for passionate, talented people to become the next key ingredient in our recipe for success.
        </p>
        
        <div className="bg-slate-800/50 p-8 rounded-lg border border-slate-700 mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Why Work at Chickensoup?</h2>
          <p className="text-gray-300">
            At Chickensoup Animations, we foster a culture of creativity, collaboration, and a healthy dose of chaos. We offer a flexible, remote-first work environment where your ideas can thrive. If you're passionate about storytelling and aren't afraid to get a little weird, you'll fit right in.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-white mb-6">Current Openings</h2>
          <div className="text-center py-8">
            <p className="text-gray-400 text-lg mb-4">There are currently no open positions available.</p>
          </div>
          
          <p className="text-center text-gray-400 mt-8">
            Interested in joining the team? Send your resume to <a href="mailto:turnerwilliam013@gmail.com" className="text-amber-300 underline">turnerwilliam013@gmail.com</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CareersPage;
