
export interface Episode {
  id: number;
  title: string;
  description: string;
  thumbnailUrl: string;
  duration: string;
  videoUrl: string;
  isNew?: boolean;
}

export interface Season {
  seasonNumber: number;
  title?: string;
  episodes: Episode[];
}

export interface Animation {
  id: number;
  title:string;
  description: string;
  thumbnailUrl: string;
  heroImageUrl: string;
  category: string;
  year: number;
  rating: string;
  duration: string;
  seasons?: Season[];
  trailerUrl?: string;
  videoUrl?: string;
  likes?: number;
  superlikes?: number;
  dislikes?: number;
  status?: string;
  studio?: string; // New property for brand intermission logic
}

export interface AnimationCategory {
  id: string;
  title: string;
}

export interface NewsArticle {
  id: number;
  title: string;
  date: string;
  imageUrl: string;
  summary: string;
  content: string;
}

export interface WatchHistoryItem {
  animationId: number;
  progress: number; // 0 to 1
}

export interface Profile {
  id: number;
  name: string;
  avatarUrl: string;
  watchHistory?: WatchHistoryItem[];
  myList?: number[];
  ratings?: { [animationId: number]: 'like' | 'superlike' | 'dislike' };
}

export interface User {
  id: number;
  email: string;
  password?: string; // In a real app, this would be a hash
  profiles: Profile[];
}
