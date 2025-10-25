import React from 'react';
import type { Animation, AnimationCategory, NewsArticle, Profile } from './types';

export const PLAY_ICON = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.647c1.295.742 1.295 2.545 0 3.286L7.279 20.99c-1.25.717-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
  </svg>
);

export const INFO_ICON = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.042.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
  </svg>
);

export const LIKE_ICON = (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
    <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333V17a1 1 0 001 1h6.364a1 1 0 00.949-.684l2.121-6.364A1 1 0 0015.434 9H11V5.5a2.5 2.5 0 00-5 0V10h1.5a.5.5 0 01.5.5v.333a.5.5 0 01-.5.5H6z" />
  </svg>
);

export const SUPERLIKE_ICON = (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

export const DISLIKE_ICON = (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
    <path d="M18 9.5a1.5 1.5 0 11-3 0v-6a1.5 1.5 0 013 0v6zM14 9.667V3a1 1 0 00-1-1H6.636a1 1 0 00-.949.684L3.566 9A1 1 0 004.566 11H9v4.5a2.5 2.5 0 005 0V10h-1.5a.5.5 0 01-.5-.5v-.333a.5.5 0 01.5-.5H14z" />
  </svg>
);

export const ADMIN_EMAILS = ['admin@chickensoup.com'];

export const AVATARS: string[] = [
  'https://img.gs/fhcphvsghs/150/https://i.ibb.co/35MPWb5L/IMG-3461.png', // The Slayer
  'https://img.gs/fhcphvsghs/150/https://i.postimg.cc/XrJ52zTH/Screenshot-2025-10-21-182643.png', // Slayer's friend
  'https://img.gs/fhcphvsghs/150/https://i.postimg.cc/phwMmrFg/Screenshot-2025-10-21-193413.png', // The Yapper from Two Tales
  'https://img.gs/fhcphvsghs/150/https://i.ibb.co/TBHKFS22/IMG-3459.png', // Two Tales main duo
  'https://img.gs/fhcphvsghs/150/https://i.ibb.co/HDPJYyVb/Screenshot-2025-10-21-173823.png', // Fruity Toons duo
  'https://img.gs/fhcphvsghs/150/https://i.postimg.cc/5Qw91T0M/Screenshot-2025-10-21-203948.png', // My New Character
  'https://img.gs/fhcphvsghs/150/https://i.postimg.cc/1nKPj67W/Screenshot-2025-10-21-204622.png', // Galactic Guardians hero
  'https://img.gs/fhcphvsghs/150/https://i.ibb.co/KcZy3syF/Screenshot-2025-10-21-173625.png', // Freaky Falls duo
];

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

Not only Will alll "Samir Story's" Episodess Release on the platform, His partner,
Billyrobloxipadyt has also provided us with a short series to release. in times like these we can be sure that ChickenSoup studios will provide us quality content`
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
            videoUrl: 'https://www.youtube.com/watch?v=iNJOgRu_u0Q'
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
            thumbnailUrl: 'https://img.gs/fhcphvsghs/500/https://i.postimg.cc/7bhpkgpY/Screenshot-2025-10-21-200049.png',
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
];