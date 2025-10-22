export interface Episode {
  id: number;
  title: string;
  description: string;
  thumbnailUrl: string;
  duration: string;
  videoUrl: string;
}

export interface Season {
  seasonNumber: number;
  title?: string;
  episodes: Episode[];
}

export interface Animation {
  id: number;
  title: string;
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

export interface Profile {
  id: number;
  name: string;
  avatarUrl: string;
  watchHistory?: number[];
}