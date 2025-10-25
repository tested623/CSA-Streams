import React from 'react';

const CareersPage: React.FC = () => {
  const jobOpenings = [
    { title: 'Senior 2D Animator', location: 'Remote', department: 'Animation' },
    { title: 'Storyboard Artist', location: 'Remote', department: 'Pre-Production' },
    { title: 'Social Media Manager', location: 'Remote', department: 'Marketing' },
  ];

  return (
    <div className="container mx-auto px-4 md:px-12 py-24 md:py-32 animate-fade-in">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-amber-300 mb-4 text-center">
          Join Our Creative Cauldron
        </h1>
        <p className="text-lg text-gray-300 text-center mb-12">
          We're always looking for passionate, talented people to become the next key ingredient in our recipe for success.
        </p>
        
        <div className="bg-slate-800/50 p-8 rounded-lg border border-slate-700 mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Why Work at Chickensoup?</h2>
          <p className="text-gray-300">
            At Chickensoup Animations, we foster a culture of creativity, collaboration, and a healthy dose of chaos. We offer a flexible, remote-first work environment where your ideas can thrive. If you're passionate about storytelling and aren't afraid to get a little weird, you'll fit right in.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-white mb-6">Current Openings</h2>
          <div className="space-y-4">
            {jobOpenings.map((job, index) => (
              <div key={index} className="bg-slate-800/50 p-6 rounded-lg flex flex-col sm:flex-row justify-between items-start sm:items-center border border-slate-700">
                <div>
                  <h3 className="text-xl font-bold text-white">{job.title}</h3>
                  <p className="text-gray-400">{job.department} &middot; {job.location}</p>
                </div>
                <a 
                  href="mailto:careers@chickensoupanimations.com?subject=Application for [Job Title]" 
                  className="mt-4 sm:mt-0 bg-amber-400 hover:bg-amber-500 text-slate-900 font-bold py-2 px-4 rounded-lg transition-transform hover:scale-105 active:scale-95 whitespace-nowrap"
                >
                  Apply Now
                </a>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-400 mt-8">
            Don't see a role for you? Send your resume to <a href="mailto:careers@chickensoupanimations.com" className="text-amber-300 underline">careers@chickensoupanimations.com</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CareersPage;