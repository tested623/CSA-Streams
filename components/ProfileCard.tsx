import React from 'react';
import type { Profile } from '../types';

interface ProfileCardProps {
  profile: Profile;
  onClick: (profile: Profile) => void;
  isManaging: boolean;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ profile, onClick, isManaging }) => {
  return (
    <div 
      onClick={() => onClick(profile)}
      className="flex flex-col items-center gap-2 text-gray-400 hover:text-white cursor-pointer group transition-transform duration-200 active:scale-95 w-24 md:w-36"
    >
      <div className="relative w-24 h-24 md:w-36 md:h-36 transition-transform duration-300 group-hover:scale-105">
        <img 
          src={profile.avatarUrl} 
          alt={profile.name}
          className="w-full h-full object-cover rounded-md group-hover:ring-4 ring-white transition-all"
        />
        {isManaging && (
          <div className="absolute inset-0 bg-black/60 rounded-md flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
              <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
            </svg>
          </div>
        )}
      </div>
      <p className="font-semibold text-center truncate w-full">{profile.name}</p>
    </div>
  );
};

export default ProfileCard;