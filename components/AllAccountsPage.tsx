
import React from 'react';
import type { View } from '../App';

interface AllAccountsPageProps {
  onNavigate: (view: View) => void;
}

const AllAccountsPage: React.FC<AllAccountsPageProps> = ({ onNavigate }) => {
  return (
    <div className="container mx-auto px-4 md:px-12 py-24 md:py-32 animate-fade-in">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-amber-300 mb-8 text-center">
          All of Our Accounts
        </h1>
        <p className="text-lg text-gray-300 text-center mb-12">
          Follow us across the web to stay updated with the latest animations, news, and behind-the-scenes content.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* YouTube - Links to internal Our Channels page */}
          <button 
            onClick={() => onNavigate('our-channels')}
            className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-red-500 hover:bg-slate-800 transition-all group flex items-center space-x-6 w-full text-left"
          >
            <div className="bg-red-600/20 p-4 rounded-full text-red-500 group-hover:bg-red-600 group-hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                </svg>
            </div>
            <div>
                <h3 className="text-xl font-bold text-white group-hover:text-red-400 transition-colors">YouTube</h3>
                <p className="text-gray-400 text-sm mt-1">Watch our episodes, shorts, and trailers.</p>
            </div>
          </button>

          {/* Instagram */}
          <a 
            href="https://www.instagram.com/chicknsoupanimation/" 
            target="_blank" 
            rel="noopener noreferrer"
             className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-pink-500 hover:bg-slate-800 transition-all group flex items-center space-x-6"
          >
             <div className="bg-pink-600/20 p-4 rounded-full text-pink-500 group-hover:bg-pink-600 group-hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664 4.771 4.919 4.919 1.266-.057 1.644-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.058-1.689-.072-4.948-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44c0-.795-.645-1.44-1.441-1.44z"/>
                </svg>
             </div>
             <div>
                <h3 className="text-xl font-bold text-white group-hover:text-pink-400 transition-colors">Instagram</h3>
                <p className="text-gray-400 text-sm mt-1">Updates, art, and more.</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AllAccountsPage;
