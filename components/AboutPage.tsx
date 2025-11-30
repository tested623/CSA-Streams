
import React from 'react';

const AboutPage: React.FC = () => {
  const teamMembers = [
    { name: 'Doubleuwill', role: 'Founder - Lead Animator - and Head of Storytelling', imageUrl: 'https://img.gs/fhcphvsghs/150/https://i.ibb.co/35MPWb5L/IMG-3461.png' },
    { name: 'Thedragon623', role: 'Script Writer - Animator', imageUrl: 'https://img.gs/fhcphvsghs/150/https://i.postimg.cc/XrJ52zTH/Screenshot-2025-10-21-182643.png' },
    { name: 'Mechnoviking333', role: 'Chief ideas officer - co founder', imageUrl: 'https://img.gs/fhcphvsghs/150/https://i.postimg.cc/phwMmrFg/Screenshot-2025-10-21-193413.png' },
  ];

  return (
    <div className="container mx-auto px-4 md:px-12 py-24 md:py-32 animate-fade-in">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-amber-300 mb-8 text-center">
          About Chickensoup Animations
        </h1>
        
        <div className="bg-slate-800/50 p-8 rounded-lg border border-slate-700">
          <h2 className="text-3xl font-bold text-white mb-4">Our Story</h2>
          <p className="text-lg text-gray-300 mb-6">
            Founded on the principle that animation should be bold, funny, and a little bit weird, Chickensoup Animations is a creative studio dedicated to bringing unique stories to life. We started as a small passion project, fueled by late nights and a shared love for cartoons that break the mold. Today, we're a bubbling cauldron of creativity, serving up freshly hatched stories and classic animations, served warm for your soul.
          </p>
          
          <h2 className="text-3xl font-bold text-white mb-4">Our Philosophy</h2>
          <p className="text-lg text-gray-300">
            We believe in the power of laughter and the importance of telling stories that resonate. Our animations are crafted with a blend of humor, heart, and high-energy action. From the epic quests of "The Slayer" to the bizarre adventures in "Two Tales," we aim to create worlds that are as entertaining as they are unforgettable.
          </p>
        </div>

        <div className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">Meet the Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {teamMembers.map(member => (
              <div key={member.name} className="bg-slate-800/50 p-6 rounded-lg text-center border border-slate-700">
                <img src={member.imageUrl} alt={member.name} className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-amber-400" />
                <h3 className="text-xl font-bold text-white">{member.name}</h3>
                <p className="text-amber-300">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;