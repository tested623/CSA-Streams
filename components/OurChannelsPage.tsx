
import React from 'react';

const OurChannelsPage: React.FC = () => {
  const channels = [
    {
      name: 'Chickensoup Animations',
      description: 'The main hub for all our original shows, short films, and trailers.',
      url: 'https://www.youtube.com/@chickensoupANIMATION',
      color: 'bg-red-600',
      textColor: 'text-red-500',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
        </svg>
      )
    },
    {
      name: 'Ploto-Samir Studios',
      description: 'Home to the chaotic and diverse stories of Samir. Recently acquired by Chickensoup Animations.',
      url: 'https://www.youtube.com/@samir1919',
      color: 'bg-pink-600',
      textColor: 'text-pink-500',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  return (
    <div className="container mx-auto px-4 md:px-12 py-24 md:py-32 animate-fade-in">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-amber-300 mb-8 text-center">
          Our Channels
        </h1>
        <p className="text-lg text-gray-300 text-center mb-12">
          Explore the different worlds of our creative network.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {channels.map((channel) => (
            <a 
              key={channel.name}
              href={channel.url}
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-white hover:bg-slate-800 transition-all group flex flex-col items-center text-center"
            >
              <div className={`${channel.color} p-6 rounded-full mb-6 shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                {channel.icon}
              </div>
              <h3 className="text-2xl font-bold text-white group-hover:text-amber-300 transition-colors mb-2">{channel.name}</h3>
              <p className="text-gray-400 mb-6">{channel.description}</p>
              <span className={`font-bold ${channel.textColor} uppercase tracking-wider text-sm border border-current px-4 py-2 rounded-full group-hover:bg-white/10 transition-colors`}>
                Visit Channel
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurChannelsPage;
