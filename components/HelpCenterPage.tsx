
import React from 'react';

const FaqItem: React.FC<{ question: string; children: React.ReactNode }> = ({ question, children }) => (
  <details className="bg-slate-800/50 p-4 rounded-lg border border-slate-700 cursor-pointer group">
    <summary className="text-lg font-semibold text-white list-none flex justify-between items-center">
      {question}
      <span className="transform transition-transform duration-300 group-open:rotate-45">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
        </svg>
      </span>
    </summary>
    <div className="mt-4 text-gray-300">
      {children}
    </div>
  </details>
);

const HelpCenterPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 md:px-12 py-24 md:py-32 animate-fade-in">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-amber-300 mb-4 text-center">
          Help Center
        </h1>
        <p className="text-lg text-gray-300 text-center mb-8">
          Have questions? We're here to help.
        </p>

        <div className="mb-12">
          <input 
            type="search"
            placeholder="Search for help articles..."
            className="w-full bg-slate-800 border border-slate-600 rounded-md px-4 py-3 text-white focus:ring-amber-400 focus:border-amber-400"
          />
        </div>

        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Account & Billing</h2>
            <div className="space-y-4">
              <FaqItem question="How do I create a profile?">
                <p>You can create a new profile by logging in, clicking your avatar in the top-right, and selecting "Switch Profile." On the "Who's Watching?" screen, click "Manage Profiles" and then "Add Profile."</p>
              </FaqItem>
              <FaqItem question="How many users can each account have?">
                <p>Up to 5 users.</p>
              </FaqItem>
              <FaqItem question="How much does this service cost?">
                <p>Nothing. We are committed to providing quality content for free.</p>
              </FaqItem>
              <FaqItem question="My account is gone. What do i do?">
                <p>Please contact support if you have this issue, as it is a glitch that is still happening to a few users.</p>
              </FaqItem>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Troubleshooting</h2>
            <div className="space-y-4">
              <FaqItem question="Why is the video not playing?">
                <p>If a video fails to play, please try the following steps:
                  <br />1. Refresh the page.
                  <br />2. Ensure you have a stable internet connection.
                  <br />3. Clear your browser's cache and cookies.
                  <br />4. Make sure your browser is up-to-date.
                  <br />If the problem persists, please contact support.
                </p>
              </FaqItem>
               <FaqItem question="The website is not loading correctly.">
                <p>A white screen or improper loading is often caused by an issue with file paths. If you are running this application locally outside of its intended development environment, please ensure all file paths in `index.html` are relative (e.g., `./index.tsx` instead of `/index.tsx`).</p>
              </FaqItem>
              <FaqItem question="How to Resolve Error 513?">
                <p>Error 513 cannot be fixed by a user. We are currently trying to fix it. In the meantime, you can click the link that goes with the error and watch the video on YouTube.</p>
              </FaqItem>
              <FaqItem question="A button is greyed out/Disabled. Why?">
                <p>This is a feature because some things might not be up to date.</p>
              </FaqItem>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpCenterPage;
