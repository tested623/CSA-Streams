import React, { useEffect } from 'react';
import type { NewsArticle } from '../types';

interface NewsArticleModalProps {
  article: NewsArticle;
  onClose: () => void;
}

const NewsArticleModal: React.FC<NewsArticleModalProps> = ({ article, onClose }) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 bg-slate-900/80 z-50 flex items-center justify-center backdrop-blur-sm animate-fade-in" onClick={onClose}>
      <div 
        className="bg-slate-800 rounded-lg shadow-2xl w-full max-w-3xl h-[90vh] flex flex-col relative border border-slate-700 overflow-hidden"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-200 bg-slate-900/50 rounded-full p-2 hover:text-white z-20"
          aria-label="Close article"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <div className="h-64 w-full flex-shrink-0 relative">
          <img src={article.imageUrl} alt={article.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-800 to-transparent"></div>
        </div>

        <div className="p-8 overflow-y-auto">
          <h2 className="text-3xl font-bold text-amber-400 mb-2">{article.title}</h2>
          <p className="text-sm text-gray-400 mb-6">{article.date}</p>
          <div className="prose prose-invert prose-p:text-gray-300 prose-headings:text-white whitespace-pre-wrap">
            {article.content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsArticleModal;
