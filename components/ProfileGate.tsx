import React from 'react';
import type { Profile } from '../types';
import ProfileCard from './ProfileCard';

interface ProfileGateProps {
  profiles: Profile[];
  onSelectProfile: (profile: Profile) => void;
  onManageProfiles: () => void;
  isManaging: boolean;
  onAddProfile: () => void;
  onEditProfile: (profile: Profile) => void;
}

const ProfileGate: React.FC<ProfileGateProps> = ({ 
  profiles, 
  onSelectProfile, 
  onManageProfiles, 
  isManaging, 
  onAddProfile, 
  onEditProfile 
}) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 animate-fade-in">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-12">
        {isManaging ? 'Manage Profiles' : 'Who\'s Watching?'}
      </h1>

      <div className="flex flex-wrap justify-center items-start gap-4 md:gap-8 max-w-4xl">
        {profiles.map(profile => (
          <ProfileCard 
            key={profile.id}
            profile={profile}
            onClick={isManaging ? onEditProfile : onSelectProfile}
            isManaging={isManaging}
          />
        ))}
        {profiles.length < 5 && (
           <div 
             onClick={onAddProfile}
             className="flex flex-col items-center gap-2 text-gray-400 hover:text-white cursor-pointer group transition-all active:scale-95"
           >
              <div className="w-24 h-24 md:w-36 md:h-36 rounded-md bg-transparent group-hover:bg-slate-800 border-2 border-slate-700 group-hover:border-white flex items-center justify-center transition-all duration-300 group-hover:scale-105">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </div>
              <p className="font-semibold">Add Profile</p>
           </div>
        )}
      </div>

      <div className="mt-16">
        <button 
          onClick={onManageProfiles}
          className="bg-transparent border border-gray-500 hover:border-white hover:bg-white/10 text-gray-300 hover:text-white font-semibold py-2 px-8 rounded transition-all active:scale-95"
        >
          {isManaging ? 'Done' : 'Manage Profiles'}
        </button>
      </div>
    </div>
  );
};

export default ProfileGate;