import React from 'react';
import { NEWS_ARTICLES } from '../constants';

const PressPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 md:px-12 py-24 md:py-32 animate-fade-in">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-amber-300 mb-8 text-center">
          Press & Media
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-slate-800/50 p-8 rounded-lg border border-slate-700">
            <h2 className="text-2xl font-bold text-white mb-4">Media Inquiries</h2>
            <p className="text-gray-300 mb-4">
              For all press-related questions, interviews, or other inquiries, please reach out to our communications team.
            </p>
            <a href="mailto:press@chickensoupanimations.com" className="text-amber-300 text-lg font-semibold underline">
              press@chickensoupanimations.com
            </a>
          </div>
          <div className="bg-slate-800/50 p-8 rounded-lg border border-slate-700">
            <h2 className="text-2xl font-bold text-white mb-4">Press Kit</h2>
            <p className="text-gray-300 mb-4">
              Download our official press kit for logos, brand guidelines, and high-resolution images.
            </p>
            <button className="bg-amber-400 hover:bg-amber-500 text-slate-900 font-bold py-2 px-4 rounded-lg transition-transform hover:scale-105 active:scale-95">
              Download Press Kit
            </button>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-white mb-6">Recent News</h2>
          <div className="space-y-4">
            {NEWS_ARTICLES.map(article => (
              <div key={article.id} className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                <p className="text-sm text-gray-400">{article.date}</p>
                <h3 className="text-lg font-bold text-white">{article.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PressPage;