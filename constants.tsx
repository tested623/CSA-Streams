
import React from 'react';
import type { Animation, AnimationCategory, NewsArticle, Profile } from './types';

// --- ICONS ---

export const PLAY_ICON = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.647c1.295.742 1.295 2.545 0 3.286L7.279 20.99c-1.25.717-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
  </svg>
);

export const INFO_ICON = (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
  </svg>
);

export const LIKE_ICON = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M7.493 18.75c-.425 0-.82-.236-.975-.632A7.48 7.48 0 016 15.375c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75 2.25 2.25 0 012.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.233 18.748c.576 0 1.07.274 1.403.727a1.5 1.5 0 001.194.595h4.156c.365 0 .668-.27.708-.636a.751.751 0 00-.708-.864h-3.61a3.003 3.003 0 01-2.138-5.118M7.494 18.75c.425 0 .82-.236.975-.632A7.48 7.48 0 009 15.375c0-1.75-.599-3.358-1.602-4.634-.151-.192-.373-.309-.6-.397a1.873 1.873 0 00-1.595 2.506 1.877 1.877 0 01-.195.966c-.333.666-1.163.926-1.83.606a.75.75 0 10-.646 1.353c1.065.51 1.734 1.583 1.734 2.77 0 .584-.13 1.134-.365 1.632a.75.75 0 101.355.645A9.01 9.01 0 017.494 18.75z" />
  </svg>
);

export const SUPERLIKE_ICON = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
  </svg>
);

export const DISLIKE_ICON = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M15.73 5.25h1.335c.775 0 1.406.63 1.406 1.406v13.069c0 .775-.63 1.406-1.406 1.406H9.428a2.813 2.813 0 01-1.99-.844l-4.522-4.522a2.813 2.813 0 01-.844-1.99V9.469c0-.775.63-1.406 1.406-1.406h1.336c.55 0 1.055-.262 1.366-.69l1.62-2.228a2.813 2.813 0 012.275-1.157h2.822a2.813 2.813 0 012.833 1.262z" />
  </svg>
);

// --- DATA ---

export const AVATAR_SECTIONS = [
  {
    title: 'The Slayer',
    avatars: [
      'https://img.gs/fhcphvsghs/150/https://i.ibb.co/35MPWb5L/IMG-3461.png',
      'https://img.gs/fhcphvsghs/150/https://i.postimg.cc/XrJ52zTH/Screenshot-2025-10-21-182643.png',
    ]
  },
  {
    title: 'Two Tales',
    avatars: [
      'https://img.gs/fhcphvsghs/150/https://i.postimg.cc/phwMmrFg/Screenshot-2025-10-21-193413.png',
      'https://img.gs/fhcphvsghs/150/https://i.ibb.co/TBHKFS22/IMG-3459.png',
    ]
  },
  {
    title: 'Fruity Toons',
    avatars: [
      'https://img.gs/fhcphvsghs/150/https://i.ibb.co/HDPJYyVb/Screenshot-2025-10-21-173823.png',
    ]
  },
  {
    title: 'Freaky Falls',
    avatars: [
      'https://img.gs/fhcphvsghs/150/https://i.ibb.co/KcZy3syF/Screenshot-2025-10-21-173625.png',
    ]
  },
  {
    title: 'Short Films',
    avatars: [
      'https://img.gs/fhcphvsghs/150/https://i.postimg.cc/5Qw91T0M/Screenshot-2025-10-21-203948.png',
      'https://img.gs/fhcphvsghs/150/https://i.postimg.cc/1nKPj67W/Screenshot-2025-10-21-204622.png',
    ]
  }
];

export const AVATARS: string[] = AVATAR_SECTIONS.flatMap(section => section.avatars);

export const PROFILES: Profile[] = [
  {
    id: 1,
    name: 'Watcher',
    avatarUrl: AVATARS[0],
    watchHistory: [],
    myList: [],
    ratings: {},
  },
];

export const ANIMATION_CATEGORIES: AnimationCategory[] = [
  { id: 'shows', title: 'Shows' },
  { id: 'short-films', title: 'Short Films' }
];

export const NEWS_ARTICLES: NewsArticle[] = [
  {
    id: 2,
    title: 'ChickenSoup animations Acquires Ploto-Samir Studios.',
    date: 'October 22, 2025',
    imageUrl: 'https://img.gs/fhcphvsghs/1920/https://i.postimg.cc/G471GdTh/Screenshot-2025-10-21-211559.png',
    summary: 'The Studio Behind Shows such as the slayer, and Two tales, Chickensoup Studios, has acquired Ploto-Samir Studios. This acquisition follows studios search to increase auidence.',
    content: `The Studio Behind Shows such as the slayer, and Two tales, Chickensoup Studios, has acquired Ploto-Samir Studios. This acquisition follows studios search to increase auidence.

Ploto-Samir Studios is a Channel detected the the story's of Samir. His life is hectic, and also shares a Lgbt+ Indians standpoint of life.

Along with this acquisition , ChickenSoup studios now gains a new platform to share there creative storys on.

in times like these we can be sure that ChickenSoup studios will provide us quality content`
  },
  {
    id: 1,
    title: 'After About a year two tales Has been renewed for a Halloween episode',
    date: 'October 22, 2025',
    imageUrl: 'https://img.gs/fhcphvsghs/1920/https://i.postimg.cc/D42Cx4RD/ep-islanmd.png',
    summary: 'After a 6 month hiatus From Chicken Soup Animations, they make their great return with a new Two Tales Episode.',
    content: `After a 6 month hiatus From Chicken Soup Animations, they make there Great return with a new Two tails Episode.

The Beloved Show, praised Among fans for there outlandish stories, will finally make its return, But many people wonder, why did it take so long?

Rumor has it that this episode may be a Halloween episode, witch the last one was adored by fans.`
  }
];

export const ANIMATIONS: Animation[] = [
  {
    id: 1,
    title: 'The Slayer',
    description: 'A Lonesome Nonchalant Slayer searches for his magical PeeWee.',
    thumbnailUrl: 'https://img.gs/fhcphvsghs/1920/https://i.ibb.co/35MPWb5L/IMG-3461.png',
    heroImageUrl: 'https://img.gs/fhcphvsghs/1920/https://i.ibb.co/35MPWb5L/IMG-3461.png',
    category: 'shows',
    year: 2021,
    rating: 'TV-MA',
    duration: '4 Seasons',
    trailerUrl: 'https://www.youtube.com/watch?v=oy-43ZNNKts',
    likes: 0,
    superlikes: 0,
    dislikes: 0,
    seasons: [
      {
        seasonNumber: 1,
        episodes: [
          {
            id: 101,
            title: 'Pilot',
            description: "The first Battle, a hero will emerge",
            thumbnailUrl: 'https://img.gs/fhcphvsghs/500/https://i.ibb.co/V0X6tSb8/Screenshot-2025-10-21-174842.png',
            duration: '13s',
            videoUrl: 'https://www.youtube.com/watch?v=oy-43ZNNKts'
          },
          {
            id: 102,
            title: 'Ninja Battle',
            description: "these are really badly animated so i try to do better",
            thumbnailUrl: 'https://img.gs/fhcphvsghs/500/https://i.ibb.co/rffKT6s5/Screenshot-2025-10-21-175112.png',
            duration: '11s',
            videoUrl: 'https://www.youtube.com/watch?v=rtv-bwXIoy8'
          },
          {
            id: 103,
            title: 'The Peewee killer',
            description: "The slayer gets his Peewee back.",
            thumbnailUrl: 'https://img.gs/fhcphvsghs/500/https://i.ibb.co/pv3Z048X/Screenshot-2025-10-21-175433.png',
            duration: '16s',
            videoUrl: 'https://www.youtube.com/watch?v=rtv-bwXIoy8'
          },
          {
            id: 104,
            title: 'Stars and slashes',
            description: 'The slayer defeats another group of ninjas.',
            thumbnailUrl: 'https://img.gs/fhcphvsghs/500/https://i.ibb.co/MDzZf5c7/Screenshot-2025-10-21-175926.png',
            duration: '18s',
            videoUrl: 'https://www.youtube.com/watch?v=FYmvGqv-Ghk'
          },
          {
            id: 105,
            title: 'Finale I - The Three Sons',
            description: 'The slayer introduces his three children. We also see him sucessfully win a battle',
            thumbnailUrl: 'https://img.gs/fhcphvsghs/500/https://i.postimg.cc/mhv7gjzm/Screenshot-2025-10-21-181153.png',
            duration: '27s',
            videoUrl: 'https://www.youtube.com/watch?v=gxnxzdWld38'
          }
        ],
      },
      {
        seasonNumber: 2,
        title: 'Origins',
        episodes: [
          {
            id: 201,
            title: 'The chase',
            description: 'The chase for the Peewee',
            thumbnailUrl: 'https://img.gs/fhcphvsghs/500/https://i.postimg.cc/bS1XfgW4/Screenshot-2025-10-21-183113.png',
            duration: '33s',
            videoUrl: 'https://www.youtube.com/watch?v=3jHhXsxF8FY'
          },
          {
            id: 202,
            title: 'The Catch',
            description: 'The ButtChin Ninjas Attack!',
            thumbnailUrl: 'https://img.gs/fhcphvsghs/500/https://i.postimg.cc/MMx3jwFP/Screenshot-2025-10-21-183303.png',
            duration: '26s',
            videoUrl: 'https://www.youtube.com/watch?v=OuGZ0EucAWo'
          },
          {
            id: 203,
            title: 'Red World',
            description: 'A world ending Explosion Causes half of the world to turn red. (Brudda this aint the third impact 💔)',
            thumbnailUrl: 'https://img.gs/fhcphvsghs/500/https://i.postimg.cc/RJxStWzj/Screenshot-2025-10-21-183539.png',
            duration: '30s',
            videoUrl: 'https://www.youtube.com/watch?v=-DIAV1SYkhM'
          },
          {
            id: 204,
            title: 'Gear up',
            description: 'The Slayer befriends a black man and gets ready for a fierce battle.',
            thumbnailUrl: 'https://img.gs/fhcphvsghs/500/https://i.postimg.cc/XrJ52zTH/Screenshot-2025-10-21-182643.png',
            duration: '1m 8s',
            videoUrl: 'https://www.youtube.com/watch?v=jgqM1Qv3p8k'
          },
          {
            id: 205,
            title: 'The final stand.',
            description: 'The Final battle leading up to the next season.',
            thumbnailUrl: 'https://img.gs/fhcphvsghs/500/https://i.postimg.cc/7bS7W7hF/Screenshot-2025-10-21-184023.png',
            duration: '4m 6s',
            videoUrl: 'https://www.youtube.com/watch?v=5aT5eDbvcdE'
          }
        ],
      },
      {
        seasonNumber: 3,
        title: 'Season 2',
        episodes: [
          {
            id: 301,
            title: 'Defusing',
            description: 'The Slayer kill lost souls',
            thumbnailUrl: 'https://img.gs/fhcphvsghs/500/https://i.postimg.cc/c6Z4d5dT/Screenshot-2025-10-21-185256.png',
            duration: '30s',
            videoUrl: 'https://www.youtube.com/watch?v=MsdTEe-gIIY'
          },
          {
            id: 302,
            title: 'Old Friends',
            description: 'Slayers lost friend saves him',
            thumbnailUrl: 'https://img.gs/fhcphvsghs/500/https://i.postimg.cc/cgTqxhct/Screenshot-2025-10-21-185433.png',
            duration: '28s',
            videoUrl: 'https://www.youtube.com/watch?v=NeqvrJlvQQw'
          },
          {
            id: 303,
            title: 'Slayer: The Movie;The Final Beast',
            description: 'the earth is in danger',
            thumbnailUrl: 'https://img.gs/fhcphvsghs/500/https://i.postimg.cc/k6GsSym1/Screenshot-2025-10-21-185713.png',
            duration: '7m 24s',
            videoUrl: 'https://www.youtube.com/watch?v=yTdkYWeVYTk'
          }
        ],
      },
      {
        seasonNumber: 4,
        title: 'Season 3',
        episodes: [
          {
            id: 401,
            title: 'Crash Landing',
            description: 'A Unknown crash brings a new alien species to life.',
            thumbnailUrl: 'https://img.gs/fhcphvsghs/500/https://i.postimg.cc/F1gqQTKF/Screenshot-2025-10-21-190627.png',
            duration: '2m 22s',
            videoUrl: 'https://www.youtube.com/watch?v=B0tJinVUzSU'
          },
          {
            id: 402,
            title: 'Runited',
            description: 'The Slayer Meats the Fruity toons universe',
            thumbnailUrl: 'https://img.gs/fhcphvsghs/500/https://i.postimg.cc/GBd863gc/Screenshot-2025-10-21-190840.png',
            duration: '2m 16s',
            videoUrl: 'https://www.youtube.com/watch?v=96NoGPJCd30'
          },
          {
            id: 403,
            title: 'Training',
            description: 'The slayer trains his army and goes straight into battle',
            thumbnailUrl: 'https://img.gs/fhcphvsghs/500/https://i.postimg.cc/mPXWW88h/Screenshot-2025-10-21-191027.png',
            duration: '2m 47s',
            videoUrl: 'https://www.youtube.com/watch?v=M5jkIHob7m0'
          },
          {
            id: 404,
            title: '0:1',
            description: 'i dont even know bro',
            thumbnailUrl: 'https://img.gs/fhcphvsghs/500/https://i.postimg.cc/YjHr3DV4/Screenshot-2025-10-21-191229.png',
            duration: '2m 50s',
            videoUrl: 'https://www.youtube.com/watch?v=QOUCNXvuiGA'
          },
          {
            id: 405,
            title: 'The last Stand',
            description: 'The slayer goes onto a training arc to find his dirty Peewee',
            thumbnailUrl: 'https://img.gs/fhcphvsghs/500/https://i.postimg.cc/qz7dbPGz/Screenshot-2025-10-21-191432.png',
            duration: '6m',
            videoUrl: 'https://www.youtube.com/watch?v=M5xdF02B5Q8'
          }
        ],
      },
      {
        seasonNumber: 5,
        title: 'Season 4',
        episodes: [
          {
            id: 501,
            title: 'The Return',
            description: 'The slayer returns after a long wait and meets his long lost friend on a world no one one’s',
            thumbnailUrl: 'https://img.gs/fhcphvsghs/500/https://i.postimg.cc/4mnx77qV/Screenshot-2025-10-21-191939.png',
            duration: '2m',
            videoUrl: 'https://www.youtube.com/watch?v=21g36siFmJQ'
          },
          {
            id: 502,
            title: 'DEPTHSTAR',
            description: 'The Slayer and his friend Visits the DEPTHSTAR',
            thumbnailUrl: 'https://img.gs/fhcphvsghs/500/https://i.postimg.cc/JGjdQK9S/Screenshot-2025-10-21-192109.png',
            duration: '2m 14s',
            videoUrl: 'https://www.youtube.com/watch?v=5-c_yM2TH20'
          },
          {
            id: 503,
            title: 'The Quest For Redemption',
            description: 'the Slayer Explores Weedomia',
            thumbnailUrl: 'https://img.gs/fhcphvsghs/500/https://i.postimg.cc/Z9QcmyGx/Screenshot-2025-10-21-192226.png',
            duration: '2m 2s',
            videoUrl: 'https://www.youtube.com/watch?v=VcW9xwDA3yk'
          },
          {
            id: 504,
            title: 'The Reunion',
            description: 'The family returns',
            thumbnailUrl: 'https://img.gs/fhcphvsghs/500/https://i.postimg.cc/r0sq0zwN/Screenshot-2025-10-21-201851.png',
            duration: '4m 13s',
            videoUrl: 'https://www.youtube.com/watch?v=GZCQKbh__c4'
          }
        ],
      },
    ],
  },
  {
    id: 2,
    title: 'Two Tales',
    description: "two friends navigate life together as it is there job to save the day. what crazy indevoured will they encounter?",
    thumbnailUrl: 'https://img.gs/fhcphvsghs/1920/https://i.ibb.co/TBHKFS22/IMG-3459.png',
    heroImageUrl: 'https://img.gs/fhcphvsghs/1920/https://i.ibb.co/TBHKFS22/IMG-3459.png',
    category: 'shows',
    year: 2024,
    rating: 'TV-13',
    duration: '1 Season',
    trailerUrl: 'https://www.youtube.com/watch?v=yCxFpOL1Pe8',
    likes: 0,
    superlikes: 0,
    dislikes: 0,
    seasons: [
      {
        seasonNumber: 1,
        episodes: [
          {
            id: 2101,
            title: 'The Yapper',
            description: 'The Two friends go stop the yapper (Luca DEMANDED he was removed from this video.)',
            thumbnailUrl: 'https://img.gs/fhcphvsghs/500/https://i.postimg.cc/phwMmrFg/Screenshot-2025-10-21-193413.png',
            duration: '2m 59s',
            videoUrl: 'https://www.youtube.com/watch?v=qCzzQxfiAyg'
          },
          {
            id: 2102,
            title: 'Cornball',
            description: 'The gang goes find the corn ball',
            thumbnailUrl: 'https://img.gs/fhcphvsghs/500/https://i.postimg.cc/f3P6PyBZ/Screenshot-2025-10-21-193533.png',
            duration: '2m 53s',
            videoUrl: 'https://www.youtube.com/watch?v=0LfQro26T5Q'
          },
          {
            id: 2103,
            title: 'Billiam Whiper freaky Tales',
            description: 'A new discovery is found what will happen and will they defend them',
            thumbnailUrl: 'https://img.gs/fhcphvsghs/500/https://i.postimg.cc/yJ3fkPXG/Screenshot-2025-10-21-193730.png',
            duration: '1m 43s',
            videoUrl: 'https://www.youtube.com/watch?v=rydQfVV500E'
          },
          {
            id: 2104,
            title: 'Diddy Party',
            description: 'What does diddy do in this episode why does micheal not know where his airpods are',
            thumbnailUrl: 'https://img.gs/fhcphvsghs/500/https://i.postimg.cc/FYYtV0V8/Screenshot-2025-10-21-193908.png',
            duration: '2m 12s',
            videoUrl: 'https://www.youtube.com/watch?v=YAIC28g651E'
          },
          {
            id: 2105,
            title: 'Roach',
            description: 'The two tale palls go on a roach filled adventure!',
            thumbnailUrl: 'https://img.gs/fhcphvsghs/500/https://i.postimg.cc/grgBtnJ4/Screenshot-2025-10-21-194113.png',
            duration: '3m 9s',
            videoUrl: 'https://www.youtube.com/watch?v=jOHXkVaq_HI'
          },
          {
            id: 2106,
            title: 'The island',
            description: 'The two tales go to the island where no one leaves what happened next is even crazier',
            thumbnailUrl: 'https://img.gs/fhcphvsghs/500/https://i.postimg.cc/sM4b6fPF/Screenshot-2025-10-24-174107.png',
            duration: '2m 6s',
            videoUrl: 'https://www.youtube.com/watch?v=WzT_AvWQf9A',
            isNew: true,
          }
        ]
      }
    ]
  },
  {
    id: 3,
    title: 'Freaky Falls',
    description: "A quirky town where supernatural occurrences are just part of daily life.",
    thumbnailUrl: 'https://img.gs/fhcphvsghs/1920/https://i.ibb.co/KcZy3syF/Screenshot-2025-10-21-173625.png',
    heroImageUrl: 'https://img.gs/fhcphvsghs/1920/https://i.ibb.co/KcZy3syF/Screenshot-2025-10-21-173625.png',
    category: 'shows',
    year: 2024,
    rating: 'TV-MA',
    duration: '1 Season',
    likes: 0,
    superlikes: 0,
    dislikes: 0,
    seasons: [
      {
        seasonNumber: 1,
        episodes: [
          {
            id: 3101,
            title: 'Little Lovers',
            description: '(Parody of Gravity Falls)',
            thumbnailUrl: 'https://img.gs/fhcphvsghs/500/https://i.postimg.cc/MvM2yyDN/Screenshot-2025-10-21-195918.png',
            duration: '1m 48s',
            videoUrl: 'https://www.youtube.com/watch?v=VT8q1HYP980'
          },
          {
            id: 3102,
            title: 'The haunting',
            description: '(Parody of Gravity Falls)',
            thumbnailUrl: 'https://i.ibb.co/bMgmWSGh/Screenshot-2025-11-29-133425.png',
            duration: '2m 52s',
            videoUrl: 'https://www.youtube.com/watch?v=h-eXbLpFHgc'
          }
        ]
      }
    ]
  },
  {
    id: 4,
    title: 'Fruity Toons',
    description: "The two friends navigate there zesty life.",
    thumbnailUrl: 'https://img.gs/fhcphvsghs/1920/https://i.ibb.co/HDPJYyVb/Screenshot-2025-10-21-173823.png',
    heroImageUrl: 'https://img.gs/fhcphvsghs/1920/https://i.ibb.co/HDPJYyVb/Screenshot-2025-10-21-173823.png',
    category: 'shows',
    year: 2021,
    rating: 'PG-13',
    duration: '2 Seasons',
    trailerUrl: 'https://www.youtube.com/watch?v=zJQXscBSIlM',
    likes: 0,
    superlikes: 0,
    dislikes: 0,
    seasons: [
      {
        seasonNumber: 1,
        episodes: [
          {
            id: 4101,
            title: 'Cockroach infestation',
            description: 'The Cockroaches Invade',
            thumbnailUrl: 'https://img.gs/fhcphvsghs/500/https://i.postimg.cc/GHq8ynXF/Screenshot-2025-10-21-200811.png',
            duration: '2m 34s',
            videoUrl: 'https://www.youtube.com/watch?v=23Msq8Ta_hM'
          },
          {
            id: 4102,
            title: 'Evil Carrot',
            description: 'The second invasion has started.',
            thumbnailUrl: 'https://img.gs/fhcphvsghs/500/https://i.postimg.cc/hXYsW57B/Screenshot-2025-10-21-201006.png',
            duration: '5m',
            videoUrl: 'https://www.youtube.com/watch?v=W1tIgwUn4K4'
          },
          {
            id: 4103,
            title: 'Couch',
            description: 'the Couch story',
            thumbnailUrl: 'https://img.gs/fhcphvsghs/500/https://i.postimg.cc/PvdzQG0C/Screenshot-2025-10-21-201107.png',
            duration: '3m 14s',
            videoUrl: 'https://www.youtube.com/watch?v=_hIIhf0kJTA'
          }
        ]
      },
      {
        seasonNumber: 2,
        title: 'Bloopers',
        episodes: [
          {
            id: 4201,
            title: 'The funny show',
            description: 'a little joke',
            thumbnailUrl: 'https://img.gs/fhcphvsghs/500/https://i.postimg.cc/MXZQ5YvB/Screenshot-2025-10-21-201314.png',
            duration: '28s',
            videoUrl: 'https://www.youtube.com/watch?v=wunNNKRI1P8'
          }
        ]
      }
    ]
  },
  {
    id: 5,
    title: 'My New Character',
    description: 'The Alien Abducts My New character. (Original creator allowed us to use the character)',
    thumbnailUrl: 'https://img.gs/fhcphvsghs/500/https://i.postimg.cc/5Qw91T0M/Screenshot-2025-10-21-203948.png',
    heroImageUrl: 'https://img.gs/fhcphvsghs/1920/https://i.postimg.cc/5Qw91T0M/Screenshot-2025-10-21-203948.png',
    category: 'short-films',
    year: 2024,
    rating: 'NR',
    duration: '1m 55s',
    videoUrl: 'https://www.youtube.com/watch?v=QEyBF_gaL7Y',
    likes: 0,
    superlikes: 0,
    dislikes: 0,
  },
  {
    id: 6,
    title: 'Galactic Guardians',
    description: 'A bounty hunter gets arrested after something happens. They have to stop the most notorious bounty akul. Find out what happneds.',
    thumbnailUrl: 'https://img.gs/fhcphvsghs/500/https://i.postimg.cc/TKZRLTWg/Screenshot-2025-10-21-204437.png',
    heroImageUrl: 'https://img.gs/fhcphvsghs/1920/https://i.postimg.cc/1nKPj67W/Screenshot-2025-10-21-204622.png',
    category: 'short-films',
    year: 2024,
    rating: 'NR',
    duration: '6m 18s',
    videoUrl: 'https://www.youtube.com/watch?v=bKrHeSFmw_s',
    likes: 0,
    superlikes: 0,
    dislikes: 0,
  },
  {
    id: 7,
    title: 'Burger Bandits',
    description: 'So dark fantasy.',
    thumbnailUrl: 'https://img.gs/fhcphvsghs/500/https://i.postimg.cc/njSSrhX7/Screenshot-2025-10-21-205129.png',
    heroImageUrl: 'https://img.gs/fhcphvsghs/1920/https://i.postimg.cc/njhwnDht/Screenshot-2025-10-21-205121.png',
    category: 'short-films',
    year: 2024,
    rating: 'NR',
    duration: '30s',
    videoUrl: 'https://www.youtube.com/watch?v=PomdGCbxFkE',
    likes: 0,
    superlikes: 0,
    dislikes: 0,
  },
  {
    id: 8,
    title: "Samir's Stories",
    description: "The stories of Samir. His life is hectic, and shares an LGBTQ+ Indian standpoint of life.",
    thumbnailUrl: 'https://i.ibb.co/qMKsKd4J/Screenshot-2025-11-28-225603.png',
    heroImageUrl: 'https://i.ibb.co/qMKsKd4J/Screenshot-2025-11-28-225603.png',
    category: 'shows',
    year: 2020,
    rating: 'PG',
    duration: '1 Season',
    trailerUrl: 'https://www.youtube.com/watch?v=q6tHK0NRY5s',
    status: 'Discontinued',
    likes: 0,
    superlikes: 0,
    dislikes: 0,
    seasons: [
      {
        seasonNumber: 1,
        episodes: [
          {
            id: 801,
            title: 'Samir Hides The House',
            description: "Samir Hides the house to avoid his mistakes",
            thumbnailUrl: 'https://i.ibb.co/spv9kbTy/Screenshot-2025-11-29-001310.png',
            duration: '1m 31s',
            videoUrl: 'https://www.youtube.com/watch?v=8z86XCCeFrw'
          },
          {
            id: 802,
            title: 'tested Finds Samir',
            description: "The words Samir uses the kill tested: Shshshshsshshshshsh Shshshshsshshshshsh Shshshshsshshshshsh Shshshshsshshshshsh",
            thumbnailUrl: 'https://i.ibb.co/WWjSKzH5/Screenshot-2025-11-29-001345.png',
            duration: '2m 15s',
            videoUrl: 'https://www.youtube.com/watch?v=d5XSaiPqhvM'
          },
          {
            id: 803,
            title: 'Samir Plays Roblox',
            description: "a quick episode about gaming",
            thumbnailUrl: 'https://i.ibb.co/q3zx98x4/Screenshot-2025-11-29-001424.png',
            duration: '4m 32s',
            videoUrl: 'https://www.youtube.com/watch?v=IPg9VHsaUD4'
          },
          {
            id: 804,
            title: 'Samir Dumpster Dives;part one',
            description: "Including tested623 and a secret tape 🤫📼\nPart 2 could be a huge plot twist!",
            thumbnailUrl: 'https://i.ibb.co/fzgBBgRy/Screenshot-2025-11-29-001516.png',
            duration: '2m 16s',
            videoUrl: 'https://www.youtube.com/watch?v=hokLazNNbdI'
          },
          {
            id: 805,
            title: 'Samir Dumpster Dives; Part Two',
            description: "Video comes with mystery for later seasons",
            thumbnailUrl: 'https://i.ibb.co/4ZLDZ0d4/Screenshot-2025-11-29-001621.png',
            duration: '3m 56s',
            videoUrl: 'https://www.youtube.com/watch?v=wXk7ARStyY8'
          },
          {
            id: 806,
            title: '1,2,3 Tragedy!',
            description: "This episode is a tragic episode",
            thumbnailUrl: 'https://i.ibb.co/Mx5PzjK1/Screenshot-2025-11-29-001656.png',
            duration: '2m 00s',
            videoUrl: 'https://www.youtube.com/watch?v=QI2tGTYd3JE'
          },
          {
            id: 807,
            title: 'the fight Begins...',
            description: "This time they fight",
            thumbnailUrl: 'https://i.ibb.co/WvYL855M/Screenshot-2025-11-29-001719.png',
            duration: '1m 09s',
            videoUrl: 'https://www.youtube.com/watch?v=vb0l0Mv_qMU'
          },
          {
            id: 808,
            title: 'Death to Samir',
            description: "1 This will be one of the worst episodes made. But, it does give of many hints. Expect more uploads soon.",
            thumbnailUrl: 'https://i.ibb.co/5hxWh0DQ/Screenshot-2025-11-29-001741.png',
            duration: '1m 17s',
            videoUrl: 'https://www.youtube.com/watch?v=zTKwuYiInKE',
            isNew: true
          }
        ]
      }
    ]
  }
];
