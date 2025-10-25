import React, { useState, useEffect } from 'react';
import type { Animation } from '../types';

interface AddEpisodeModalProps {
  onClose: () => void;
  onSave: (data: { showId: number; seasonNumber: number; title: string; description: string; youtubeUrl: string; duration: string; }) => void;
  shows: Animation[];
}

const AddEpisodeModal: React.FC<AddEpisodeModalProps> = ({ onClose, onSave, shows }) => {
  const [showId, setShowId] = useState<number | undefined>(shows[0]?.id);
  const [seasonNumber, setSeasonNumber] = useState(1);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [youtubeUrl, setYoutubeUrl] = useState('');
  const [duration, setDuration] = useState('');

  useEffect(() => {
    // Auto-select first show if not already selected
    if (!showId && shows.length > 0) {
      setShowId(shows[0].id);
    }
  }, [shows, showId]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!showId || !seasonNumber || !title || !youtubeUrl || !duration) {
      alert('Please fill in all fields.');
      return;
    }
    onSave({
      showId,
      seasonNumber,
      title,
      description,
      youtubeUrl,
      duration,
    });
  };
  
  return (
    <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center backdrop-blur-sm p-4">
      <div className="bg-slate-800 p-8 rounded-lg shadow-2xl w-full max-w-2xl relative border border-slate-700 max-h-[90vh] overflow-y-auto">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <h2 className="text-2xl font-bold text-amber-400 mb-6">Add a New Episode</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="showId" className="block text-sm font-medium text-gray-300 mb-1">Show</label>
              <select
                id="showId"
                value={showId}
                onChange={(e) => setShowId(Number(e.target.value))}
                className="w-full bg-slate-700 border border-slate-600 rounded-md px-3 py-2 text-white"
                required
              >
                <option value="" disabled>Select a show</option>
                {shows.map(show => (
                  <option key={show.id} value={show.id}>{show.title}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="seasonNumber" className="block text-sm font-medium text-gray-300 mb-1">Season Number</label>
              <input type="number" id="seasonNumber" value={seasonNumber} onChange={(e) => setSeasonNumber(Number(e.target.value))} min="1" className="w-full bg-slate-700 border border-slate-600 rounded-md px-3 py-2 text-white" required />
            </div>
          </div>
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-300 mb-1">Episode Title</label>
            <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full bg-slate-700 border border-slate-600 rounded-md px-3 py-2 text-white" required />
          </div>
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-300 mb-1">Description</label>
            <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} rows={3} className="w-full bg-slate-700 border border-slate-600 rounded-md px-3 py-2 text-white" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
                <label htmlFor="youtubeUrl" className="block text-sm font-medium text-gray-300 mb-1">YouTube URL</label>
                <input type="url" id="youtubeUrl" value={youtubeUrl} onChange={(e) => setYoutubeUrl(e.target.value)} placeholder="https://www.youtube.com/watch?v=..." className="w-full bg-slate-700 border border-slate-600 rounded-md px-3 py-2 text-white" required />
            </div>
            <div>
                <label htmlFor="duration" className="block text-sm font-medium text-gray-300 mb-1">Duration (e.g., 2m 34s)</label>
                <input type="text" id="duration" value={duration} onChange={(e) => setDuration(e.target.value)} className="w-full bg-slate-700 border border-slate-600 rounded-md px-3 py-2 text-white" required />
            </div>
          </div>
          <div className="flex justify-end space-x-4 pt-4">
            <button type="button" onClick={onClose} className="px-4 py-2 rounded-md text-sm font-semibold text-gray-300 bg-slate-600 hover:bg-slate-500">
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 rounded-md text-sm font-semibold text-slate-900 bg-amber-400 hover:bg-amber-500">
              Save Episode
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEpisodeModal;