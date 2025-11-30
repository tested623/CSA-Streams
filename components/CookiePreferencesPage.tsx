
import React, { useState } from 'react';

const CookieToggle: React.FC<{ title: string; description: string; enabled: boolean; onToggle?: (enabled: boolean) => void; disabled?: boolean }> = 
({ title, description, enabled, onToggle, disabled }) => {
  // Apply opacity if disabled and unchecked to simulate "greyed out" unavailable state, 
  // while keeping "Essential" (disabled + checked) fully visible.
  const containerClasses = `flex justify-between items-start bg-slate-800/50 p-4 rounded-lg border border-slate-700 ${disabled && !enabled ? 'opacity-50' : ''}`;

  return (
    <div className={containerClasses}>
      <div className="pr-4">
        <h3 className="font-semibold text-white">{title}</h3>
        <p className="text-sm text-gray-400">{description}</p>
      </div>
      <div className="flex-shrink-0">
        <label className={`relative inline-flex items-center ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}`}>
          <input 
            type="checkbox" 
            className="sr-only peer" 
            checked={enabled} 
            onChange={onToggle ? (e) => onToggle(e.target.checked) : undefined}
            disabled={disabled}
          />
          <div className="w-11 h-6 bg-slate-600 rounded-full peer peer-focus:ring-2 peer-focus:ring-amber-500 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-amber-400"></div>
        </label>
      </div>
    </div>
  );
};

const CookiePreferencesPage: React.FC = () => {
  const [analytics, setAnalytics] = useState(true);
  const [marketing, setMarketing] = useState(false);

  const handleSave = () => {
    alert(`Preferences Saved: Analytics (${analytics}), Marketing (${marketing}). (This is a demonstration).`);
  };

  return (
    <div className="container mx-auto px-4 md:px-12 py-24 md:py-32 animate-fade-in">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-amber-300 mb-4">
          Cookie Preferences
        </h1>
        <p className="text-lg text-gray-300 mb-8">
          We use cookies to improve your experience on our site. You can customize your cookie settings below. For more detailed information, please see our <a href="#" className="underline">Privacy Policy</a>.
        </p>

        <div className="space-y-4">
          <CookieToggle
            title="Essential Cookies"
            description="These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in or filling in forms."
            enabled={true}
            disabled={true}
          />
          <CookieToggle
            title="Performance & Analytics Cookies"
            description="These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site."
            enabled={analytics}
            onToggle={setAnalytics}
          />
          <CookieToggle
            title="Marketing & Advertising Cookies"
            description="We do not sell any of your cookies."
            enabled={false}
            disabled={true}
            onToggle={setMarketing}
          />
        </div>
        
        <div className="mt-8 flex justify-end">
            <button 
                onClick={handleSave}
                className="bg-amber-400 hover:bg-amber-500 text-slate-900 font-bold py-2 px-6 rounded-lg transition-transform hover:scale-105 active:scale-95"
            >
                Save Preferences
            </button>
        </div>
      </div>
    </div>
  );
};

export default CookiePreferencesPage;
