
import React, { useState, useEffect } from 'react';
import type { Profile } from '../types';

interface EditProfileModalProps {
  profile: Profile | 'new' | null;
  onClose: () => void;
  onSave: (profileData: { id?: number; name: string; avatarUrl: string }) => void;
  onDelete: (profileId: number) => void;
  avatars: string[];
  avatarSections?: { title: string; avatars: string[] }[];
  canDelete: boolean;
}

const EditProfileModal: React.FC<EditProfileModalProps> = ({ profile, onClose, onSave, onDelete, avatars, avatarSections, canDelete }) => {
  const isNew = profile === 'new';
  const [name, setName] = useState('');
  const [selectedAvatar, setSelectedAvatar] = useState(avatars[0]);

  useEffect(() => {
    if (profile && !isNew) {
      setName(profile.name);
      setSelectedAvatar(profile.avatarUrl);
    } else {
      setName('');
      setSelectedAvatar(avatars[Math.floor(Math.random() * avatars.length)]);
    }
  }, [profile, isNew, avatars]);
  
  const handleSave = () => {
    if (name.trim()) {
      onSave({
        id: isNew ? undefined : (profile as Profile).id,
        name,
        avatarUrl: selectedAvatar,
      });
    }
  };
  
  const handleDelete = () => {
    if (!isNew && window.confirm(`Are you sure you want to delete the "${(profile as Profile).name}" profile?`)) {
      onDelete((profile as Profile).id);
    }
  };

  if (!profile) return null;

  return (
    <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center backdrop-blur-sm animate-fade-in" onClick={onClose}>
      <div 
        className="bg-slate-800 p-8 rounded-lg shadow-2xl w-full max-w-2xl relative border border-slate-700 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-3xl font-bold text-amber-400 mb-6 flex-shrink-0">{isNew ? 'Add Profile' : 'Edit Profile'}</h2>
        
        <div className="flex flex-col md:flex-row gap-8 items-start flex-shrink-0 mb-6">
            <div className="flex-grow w-full md:w-auto">
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Profile Name</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-slate-700 border border-slate-600 rounded-md px-3 py-2 text-white focus:ring-amber-400 focus:border-amber-400 text-lg"
                  maxLength={20}
                  required
                />
            </div>
            <div className="flex-shrink-0">
                <img src={selectedAvatar} alt="Selected Avatar" className="w-24 h-24 md:w-32 md:h-32 rounded-md object-cover" />
            </div>
        </div>

        <div className="overflow-y-auto pr-2 min-h-0 flex-grow">
            <h3 className="text-lg font-semibold text-white mb-4">Choose an Avatar</h3>
            
            {avatarSections ? (
              <div className="space-y-6">
                {avatarSections.map((section) => (
                  <div key={section.title}>
                     <h4 className="text-sm font-medium text-gray-400 mb-3 uppercase tracking-wider sticky top-0 bg-slate-800 py-1 z-10">{section.title}</h4>
                     <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-3">
                        {section.avatars.map(avatar => (
                            <button key={avatar} onClick={() => setSelectedAvatar(avatar)} className={`w-16 h-16 rounded-md overflow-hidden ring-2 transition ${selectedAvatar === avatar ? 'ring-amber-400' : 'ring-transparent hover:ring-white'}`}>
                                <img src={avatar} alt="Avatar option" className="w-full h-full object-cover" />
                            </button>
                        ))}
                     </div>
                  </div>
                ))}
              </div>
            ) : (
               <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-3">
                  {avatars.map(avatar => (
                      <button key={avatar} onClick={() => setSelectedAvatar(avatar)} className={`w-16 h-16 rounded-md overflow-hidden ring-2 transition ${selectedAvatar === avatar ? 'ring-amber-400' : 'ring-transparent hover:ring-white'}`}>
                          <img src={avatar} alt="Avatar option" className="w-full h-full object-cover" />
                      </button>
                  ))}
              </div>
            )}
        </div>

        <div className="flex justify-between items-center mt-6 pt-6 border-t border-slate-700 flex-shrink-0">
          <div>
            {!isNew && canDelete && (
                <button
                  onClick={handleDelete}
                  className="px-6 py-2 rounded-md text-sm font-semibold text-red-400 bg-transparent border border-red-400/50 hover:bg-red-400/10 hover:border-red-400 transition-all active:scale-95"
                >
                  Delete Profile
                </button>
            )}
          </div>
          <div className="flex space-x-4">
            <button
              onClick={onClose}
              className="px-6 py-2 rounded-md text-sm font-semibold text-gray-300 bg-slate-600 hover:bg-slate-500 transition-all active:scale-95"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              disabled={!name.trim()}
              className="px-6 py-2 rounded-md text-sm font-semibold text-slate-900 bg-amber-400 hover:bg-amber-500 transition-all active:scale-95 disabled:bg-gray-500 disabled:cursor-not-allowed"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfileModal;
