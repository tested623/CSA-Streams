import React, { useState } from 'react';

interface AddFilmModalProps {
  onClose: () => void;
  onSave: (filmData: { title: string; description: string; youtubeUrl: string }) => void;
}

const AddFilmModal: React.FC<AddFilmModalProps> = ({ onClose, onSave }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [youtubeUrl, setYoutubeUrl] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !youtubeUrl) {
      alert('Please fill in the title and YouTube URL.');
      return;
    }
    onSave({ title, description, youtubeUrl });
  };

  return (
    <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center backdrop-blur-sm">
      <div className="bg-slate-800 p-8 rounded-lg shadow-2xl w-full max-w-lg relative border border-slate-700">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <h2 className="text-2xl font-bold text-amber-400 mb-6">Add a New Short Film</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-300 mb-1">Title</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full bg-slate-700 border border-slate-600 rounded-md px-3 py-2 text-white focus:ring-amber-400 focus:border-amber-400"
              required
            />
          </div>
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-300 mb-1">Description</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={3}
              className="w-full bg-slate-700 border border-slate-600 rounded-md px-3 py-2 text-white focus:ring-amber-400 focus:border-amber-400"
            />
          </div>
          <div>
            <label htmlFor="youtubeUrl" className="block text-sm font-medium text-gray-300 mb-1">YouTube URL</label>
            <input
              type="url"
              id="youtubeUrl"
              value={youtubeUrl}
              onChange={(e) => setYoutubeUrl(e.target.value)}
              placeholder="https://www.youtube.com/watch?v=..."
              className="w-full bg-slate-700 border border-slate-600 rounded-md px-3 py-2 text-white focus:ring-amber-400 focus:border-amber-400"
              required
            />
          </div>
          <div className="flex justify-end space-x-4 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-md text-sm font-semibold text-gray-300 bg-slate-600 hover:bg-slate-500 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-md text-sm font-semibold text-slate-900 bg-amber-400 hover:bg-amber-500 transition-colors"
            >
              Save Film
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddFilmModal;