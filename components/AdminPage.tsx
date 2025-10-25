import React from 'react';
import type { Animation, User } from '../types';

interface AdminPageProps {
    animations: Animation[];
    users: User[];
    onAddShowClick: () => void;
    onAddEpisodeClick: () => void;
    onAddShortFilmClick: () => void;
}

const StatCard: React.FC<{ label: string; value: number | string }> = ({ label, value }) => (
    <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 text-center">
      <p className="text-gray-400 text-sm uppercase tracking-wider">{label}</p>
      <h2 className="text-4xl md:text-5xl font-black text-white mt-1">{value}</h2>
    </div>
);

const AdminPage: React.FC<AdminPageProps> = ({ animations, users, onAddShowClick, onAddEpisodeClick, onAddShortFilmClick }) => {
    const totalShows = animations.filter(a => a.category === 'shows').length;
    const totalShortFilms = animations.filter(a => a.category === 'short-films').length;

    const topAnimations = [...animations]
        .sort((a, b) => {
          const scoreA = ((a.superlikes || 0) * 2) + (a.likes || 0);
          const scoreB = ((b.superlikes || 0) * 2) + (b.likes || 0);
          return scoreB - scoreA;
        })
        .slice(0, 5);

    return (
        <div className="container mx-auto px-4 md:px-12 py-24 md:py-32 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-amber-300 mb-8 border-b-2 border-slate-700 pb-4">
                Admin Panel
            </h1>

            {/* Stat Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8">
                <StatCard label="Total Animations" value={animations.length} />
                <StatCard label="Total Users" value={users.length} />
                <StatCard label="Total Shows" value={totalShows} />
                <StatCard label="Total Short Films" value={totalShortFilms} />
            </div>
            
            {/* Most Popular Content Table */}
            <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">Most Popular Content</h2>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                        <tr className="border-b border-slate-700 text-sm text-gray-400">
                            <th className="p-2">Rank</th>
                            <th className="p-2">Title</th>
                            <th className="p-2 text-center">Likes</th>
                            <th className="p-2 text-center">Superlikes</th>
                            <th className="p-2 text-center">Dislikes</th>
                        </tr>
                        </thead>
                        <tbody>
                        {topAnimations.filter(a => ((a.likes || 0) + (a.superlikes || 0)) > 0).map((anim, index) => (
                            <tr key={anim.id} className="border-b border-slate-800 hover:bg-slate-800">
                                <td className="p-2 font-bold">{index + 1}</td>
                                <td className="p-2 font-semibold text-white">{anim.title}</td>
                                <td className="p-2 text-center text-green-400">{anim.likes || 0}</td>
                                <td className="p-2 text-center text-yellow-400">{anim.superlikes || 0}</td>
                                <td className="p-2 text-center text-red-400">{anim.dislikes || 0}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
                {topAnimations.filter(a => ((a.likes || 0) + (a.superlikes || 0)) > 0).length === 0 && <p className="text-center text-gray-500 mt-4">No rated content yet.</p>}
            </div>


            <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
                <h2 className="text-2xl font-bold text-white mb-4">Content Management</h2>
                <div className="flex flex-col sm:flex-row gap-4">
                    <button
                        onClick={onAddShowClick}
                        className="flex-1 bg-amber-400/80 hover:bg-amber-500/80 text-slate-900 font-bold py-3 px-4 rounded-lg flex items-center justify-center space-x-2 transition-transform hover:scale-105 active:scale-95"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                        </svg>
                        <span>Add New Show</span>
                    </button>
                    <button
                        onClick={onAddEpisodeClick}
                        className="flex-1 bg-amber-400 hover:bg-amber-500 text-slate-900 font-bold py-3 px-4 rounded-lg flex items-center justify-center space-x-2 transition-transform hover:scale-105 active:scale-95"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                           <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                        </svg>
                         <span>Add New Episode</span>
                    </button>
                    <button
                        onClick={onAddShortFilmClick}
                        className="flex-1 bg-slate-700 hover:bg-slate-600 text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center space-x-2 transition-transform hover:scale-105 active:scale-95"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm3 2h6v4H7V5zm8 8H5v-2h10v2z" clipRule="evenodd" />
                        </svg>
                         <span>Add New Short Film</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AdminPage;