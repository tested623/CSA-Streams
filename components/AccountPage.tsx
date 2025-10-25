import React from 'react';
import type { User } from '../types';
import type { View } from '../App';

interface AccountPageProps {
  user: User | null;
  onManageProfiles: () => void;
  onNavigate: (view: View) => void;
}

const AccountPage: React.FC<AccountPageProps> = ({ user, onManageProfiles, onNavigate }) => {
  if (!user) {
    return (
       <div className="container mx-auto px-4 md:px-12 py-24 md:py-32">
        <p className="text-center text-gray-400">Loading user data...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 md:px-12 py-24 md:py-32 animate-fade-in">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-amber-300 mb-8 border-b-2 border-slate-700 pb-4">
          Account Settings
        </h1>

        <div className="space-y-8">

          {/* ADMIN TOOLS */}
          {user.isAdmin && (
            <div className="bg-slate-800/50 p-6 rounded-lg border border-amber-400/50">
              <h2 className="text-xl font-semibold text-amber-400 mb-4">Admin Tools</h2>
              <p className="text-gray-300 mb-4">Access admin-only features and application statistics.</p>
              <button 
                onClick={() => onNavigate('admin')}
                className="bg-amber-400 hover:bg-amber-500 text-slate-900 font-bold py-2 px-4 rounded-lg transition-colors"
              >
                Go to Admin Panel
              </button>
            </div>
          )}

          {/* PROFILE & PARENTAL CONTROLS */}
          <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
            <h2 className="text-xl font-semibold text-white mb-4">Profile & Parental Controls</h2>
            <div className="space-y-4">
              {user.profiles.map(profile => (
                <div key={profile.id} className="flex items-center space-x-4">
                  <img src={profile.avatarUrl} alt={profile.name} className="w-12 h-12 rounded-md object-cover" />
                  <p className="text-white font-semibold flex-grow">{profile.name}</p>
                </div>
              ))}
            </div>
            <button 
              onClick={onManageProfiles}
              className="mt-6 bg-slate-700 hover:bg-slate-600 text-white font-bold py-2 px-4 rounded-lg transition-colors w-full sm:w-auto"
            >
              Manage Profiles
            </button>
          </div>
          
          {/* SECURITY */}
          <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
            <h2 className="text-xl font-semibold text-white mb-4">Security</h2>
            <div className="flex justify-between items-center">
                <p className="text-gray-300">Password: ********</p>
                 <button className="text-sm text-gray-400 border border-gray-600 px-3 py-1 rounded hover:border-white hover:text-white transition-colors">
                    Change Password
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;