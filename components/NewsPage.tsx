import React from 'react';
import type { NewsArticle } from '../types';

interface NewsCardProps {
  article: NewsArticle;
  onSelect: () => void;
}

const NewsCard: React.FC<NewsCardProps> = ({ article, onSelect }) => (
  <div className="bg-slate-800/50 rounded-lg overflow-hidden flex flex-col md:flex-row gap-6 p-4 border border-slate-700/50 transform transition-transform duration-300 hover:scale-[1.02] hover:bg-slate-800">
    <div className="md:w-1/3">
      <img src={article.imageUrl} alt={article.title} className="w-full h-48 object-cover rounded-md" />
    </div>
    <div className="md:w-2/3 flex flex-col">
      <h3 className="text-xl font-bold text-white mb-2">{article.title}</h3>
      <p className="text-sm text-gray-400 mb-3">{article.date}</p>
      <p className="text-gray-300 flex-grow line-clamp-3">{article.summary}</p>
      <div className="mt-4">
        <button onClick={onSelect} className="text-amber-400 font-semibold hover:text-amber-300 transition-transform active:scale-95">
          Read More &rarr;
        </button>
      </div>
    </div>
  </div>
);

interface NewsPageProps {
  articles: NewsArticle[];
  onSelectArticle: (article: NewsArticle) => void;
}

const NewsPage: React.FC<NewsPageProps> = ({ articles, onSelectArticle }) => {
  return (
    <div className="container mx-auto px-4 md:px-12 py-24 md:py-32 animate-fade-in">
      <h1 className="text-3xl md:text-4xl font-bold text-amber-300 mb-8 border-b-2 border-slate-700 pb-4">
        News & Updates
      </h1>
      <div className="space-y-8 max-w-4xl mx-auto">
        {articles.length > 0 ? (
          articles.map(article => (
            <NewsCard key={article.id} article={article} onSelect={() => onSelectArticle(article)} />
          ))
        ) : (
          <p className="text-lg text-gray-400 text-center">No news yet. Check back soon!</p>
        )}
      </div>
    </div>
  );
};

export default NewsPage;