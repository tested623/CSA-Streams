import React, { useState } from 'react';
import type { Animation } from '../types';

type ShowData = Omit<Animation, 'id' | 'category' | 'seasons' | 'likes' | 'superlikes' | 'dislikes'>;

interface AddShowModalProps {
  onClose: () => void;
  onSave: (showData: ShowData) => void;
}

const AddShowModal: React.FC<AddShowModalProps> = ({ onClose, onSave }) => {
  const [formData, setFormData] = useState<ShowData>({
    title: '',
    description: '',
    thumbnailUrl: '',
    heroImageUrl: '',
    year: new Date().getFullYear(),
    rating: 'NR',
    duration: '1 Season',
    trailerUrl: '',
    videoUrl: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'number' ? parseInt(value, 10) || 0 : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.thumbnailUrl || !formData.heroImageUrl) {
      alert('Please fill in at least the title and image URLs.');
      return;
    }
    onSave(formData);
  };

  return (
    <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center backdrop-blur-sm p-4">
      <div className="bg-slate-800 p-8 rounded-lg shadow-2xl w-full max-w-2xl relative border border-slate-700 max-h-[90vh] overflow-y-auto">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <h2 className="text-2xl font-bold text-amber-400 mb-6">Add a New Show</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-300 mb-1">Title</label>
            <input type="text" name="title" value={formData.title} onChange={handleChange} className="w-full bg-slate-700 border border-slate-600 rounded-md px-3 py-2 text-white" required />
          </div>
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-300 mb-1">Description</label>
            <textarea name="description" value={formData.description} onChange={handleChange} rows={3} className="w-full bg-slate-700 border border-slate-600 rounded-md px-3 py-2 text-white" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="thumbnailUrl" className="block text-sm font-medium text-gray-300 mb-1">Thumbnail URL</label>
              <input type="url" name="thumbnailUrl" value={formData.thumbnailUrl} onChange={handleChange} className="w-full bg-slate-700 border border-slate-600 rounded-md px-3 py-2 text-white" required />
            </div>
            <div>
              <label htmlFor="heroImageUrl" className="block text-sm font-medium text-gray-300 mb-1">Hero Image URL</label>
              <input type="url" name="heroImageUrl" value={formData.heroImageUrl} onChange={handleChange} className="w-full bg-slate-700 border border-slate-600 rounded-md px-3 py-2 text-white" required />
            </div>
          </div>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label htmlFor="year" className="block text-sm font-medium text-gray-300 mb-1">Year</label>
                <input type="number" name="year" value={formData.year} onChange={handleChange} className="w-full bg-slate-700 border border-slate-600 rounded-md px-3 py-2 text-white" />
              </div>
              <div>
                <label htmlFor="rating" className="block text-sm font-medium text-gray-300 mb-1">Rating (e.g., TV-MA)</label>
                <input type="text" name="rating" value={formData.rating} onChange={handleChange} className="w-full bg-slate-700 border border-slate-600 rounded-md px-3 py-2 text-white" />
              </div>
               <div>
                <label htmlFor="duration" className="block text-sm font-medium text-gray-300 mb-1">Duration (e.g., 4 Seasons)</label>
                <input type="text" name="duration" value={formData.duration} onChange={handleChange} className="w-full bg-slate-700 border border-slate-600 rounded-md px-3 py-2 text-white" />
              </div>
          </div>
           <div>
            <label htmlFor="trailerUrl" className="block text-sm font-medium text-gray-300 mb-1">Trailer URL (YouTube)</label>
            <input type="url" name="trailerUrl" value={formData.trailerUrl} onChange={handleChange} placeholder="https://www.youtube.com/watch?v=..." className="w-full bg-slate-700 border border-slate-600 rounded-md px-3 py-2 text-white" />
          </div>
          <div className="flex justify-end space-x-4 pt-4">
            <button type="button" onClick={onClose} className="px-4 py-2 rounded-md text-sm font-semibold text-gray-300 bg-slate-600 hover:bg-slate-500">
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 rounded-md text-sm font-semibold text-slate-900 bg-amber-400 hover:bg-amber-500">
              Save Show
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddShowModal;
