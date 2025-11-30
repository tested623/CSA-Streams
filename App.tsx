
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import ContentCarousel from './components/ContentCarousel';
import ShowDetailView from './components/ShowDetailView';
import ShowsGridPage from './components/ShowsGridPage';
import ShortFilmsPage from './components/ShortFilmsPage';
import NewsPage from './components/NewsPage';
import ComingSoonPage from './components/ComingSoonPage';
import SearchOverlay from './components/SearchOverlay';
import NewsArticleModal from './components/NewsArticleModal';
import ProfileGate from './components/ProfileGate';
import EditProfileModal from './components/EditProfileModal';
import LoadingScreen from './components/LoadingScreen';
import AuthPage from './components/AuthPage';
import MyListPage from './components/MyListPage';
import VideoPlayer from './components/VideoPlayer';
import AboutPage from './components/AboutPage';
import CareersPage from './components/CareersPage';
import PressPage from './components/PressPage';
import HelpCenterPage from './components/HelpCenterPage';
import ContactPage from './components/ContactPage';
import AccountPage from './components/AccountPage';
import TermsOfUsePage from './components/TermsOfUsePage';
import PrivacyPolicyPage from './components/PrivacyPolicyPage';
import CookiePreferencesPage from './components/CookiePreferencesPage';
import { NEWS_ARTICLES, PROFILES as DEFAULT_PROFILES, AVATARS, AVATAR_SECTIONS, ANIMATIONS as INITIAL_ANIMATIONS } from './constants';
import type { Animation, NewsArticle, Profile, User, WatchHistoryItem } from './types';

// --- Data Persistence Logic (from former api.ts) ---
const LOCAL_STORAGE_KEY = 'chickensoup_data';

interface RemoteData {
  users: User[];
}

const loadRemoteData = async (): Promise<RemoteData> => {
  try {
    const storedData = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storedData) {
      console.log('✅ Loaded data from localStorage.');
      const parsedData = JSON.parse(storedData);
      // Migrate or just extract users
      if (parsedData.users) {
        return { users: parsedData.users };
      }
    } else {
      console.log('ℹ️ No data in localStorage.');
    }
  } catch (error) {
    console.error('❌ Error loading data from localStorage:', error);
  }
  
  // If no data or error, return initial state with no users
  return { users: [] };
};

const saveRemoteData = async (data: RemoteData): Promise<void> => {
  try {
    const dataString = JSON.stringify(data);
    localStorage.setItem(LOCAL_STORAGE_KEY, dataString);
    console.log('✅ Saved data to localStorage.', data);
  } catch (error) {
    console.error('❌ Error saving data to localStorage:', error);
  }
};
// --- End of Data Persistence Logic ---

export type View = 'home' | 'shows' | 'short-films' | 'news' | 'coming-soon' | 'my-list' | 'about' | 'careers' | 'help' | 'account' | 'terms' | 'privacy' | 'cookies' | 'contact';

const VIEWS: View[] = ['home', 'shows', 'short-films', 'news', 'coming-soon', 'my-list', 'about', 'careers', 'help', 'account', 'terms', 'privacy', 'cookies', 'contact'];

interface PlayingVideoState {
  url: string;
  poster?: string;
}

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [view, setView] = useState<View>('home');
  const [previousView, setPreviousView] = useState<View>('home');
  const [selectedAnimation, setSelectedAnimation] = useState<Animation | null>(null);
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(null);
  const [playingVideo, setPlayingVideo] = useState<PlayingVideoState | null>(null);

  // Data State
  const [users, setUsers] = useState<User[]>([]);
  // Animations are now static from constants to ensure code updates are always reflected immediately
  const [animations, setAnimations] = useState<Animation[]>(INITIAL_ANIMATIONS);

  // Account State
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  // Profile State
  const [currentProfile, setCurrentProfile] = useState<Profile | null>(null);
  const [isManagingProfiles, setIsManagingProfiles] = useState(false);
  const [editingProfile, setEditingProfile] = useState<Profile | 'new' | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const { users: allUsers } = await loadRemoteData();
        setUsers(allUsers);
        // Animations always come from constants now
        setAnimations(INITIAL_ANIMATIONS);
        
        const currentUserId = sessionStorage.getItem('chickensoup_currentUser');
        if (currentUserId) {
          const loggedInUser = allUsers.find((u: User) => u.id === Number(currentUserId));
          if (loggedInUser) {
            setCurrentUser(loggedInUser);
          }
        }
      } catch (error) {
        console.error("Failed to load data from remote source", error);
      } finally {
        setTimeout(() => setIsLoading(false), 500);
      }
    };
    
    loadData();
  }, []);

  // --- Hash Routing for GitHub Pages Compatibility ---
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1); // remove #
      
      // Check for watch link: #watch/123
      if (hash.startsWith('watch/')) {
        const id = parseInt(hash.split('/')[1]);
        if (!isNaN(id)) {
          const anim = animations.find(a => a.id === id);
          if (anim) {
            setSelectedAnimation(anim);
            return;
          }
        }
      }

      // If not watching or invalid ID, fallback to view navigation
      setSelectedAnimation(null);
      if (VIEWS.includes(hash as View)) {
        setView(hash as View);
      } else {
        // Default to home if hash is invalid or empty
        setView('home');
        if (hash !== 'home' && hash !== '') {
           window.history.replaceState(null, '', '#home');
        }
      }
    };

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    
    // Check hash on initial load (after data load)
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [animations]); // Re-run when animations are loaded

  useEffect(() => {
    if (!isLoading) {
      saveRemoteData({ users });
    }
  }, [users, isLoading]);

  useEffect(() => {
    if (view === 'home' && !selectedAnimation && animations.length > 0) {
      const timer = setInterval(() => {
        setCurrentHeroIndex(prevIndex => (prevIndex + 1) % animations.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [view, selectedAnimation, animations.length]);
  
  // --- Account Handlers ---
  const handleSignUp = (email: string, password?: string): boolean => {
    if (users.some(u => u.email.toLowerCase() === email.toLowerCase())) {
      return false;
    }
    const newUser: User = {
      id: Date.now(),
      email,
      password,
      profiles: DEFAULT_PROFILES,
    };
    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    handleLogin(email, password);
    return true;
  };

  const handleLogin = (email: string, password?: string): boolean => {
    const user = users.find(u => u.email.toLowerCase() === email.toLowerCase() && u.password === password);
    if (user) {
      setCurrentUser(user);
      sessionStorage.setItem('chickensoup_currentUser', String(user.id));
      return true;
    }
    return false;
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setCurrentProfile(null);
    sessionStorage.removeItem('chickensoup_currentUser');
    window.location.hash = ''; // Reset route
  };
  
  const handleBypassLogin = () => {
    const guestEmail = 'guest@test.com';
    const guestPassword = 'password';
    
    const guestUser = users.find(u => u.email.toLowerCase() === guestEmail);
    
    if (guestUser) {
        handleLogin(guestEmail, guestPassword);
    } else {
        handleSignUp(guestEmail, guestPassword);
    }
  };

  // --- Profile Handlers ---
  const handleSelectProfile = (profile: Profile) => {
    setCurrentProfile(profile);
    setIsManagingProfiles(false);
  };
  
  const handleSwitchProfile = () => {
    setCurrentProfile(null);
  };
  
  const handleManageProfiles = () => {
    setIsManagingProfiles(prev => !prev);
  };
  
  const handleStartEditingProfile = (profile: Profile) => {
    setEditingProfile(profile);
  };
  
  const handleStartAddingProfile = () => {
    setEditingProfile('new');
  };

  const handleSaveProfile = (profileData: { id?: number; name: string; avatarUrl: string }) => {
    if (!currentUser) return;

    let updatedProfiles;
    if (profileData.id) {
      updatedProfiles = currentUser.profiles.map(p => p.id === profileData.id ? { ...p, name: profileData.name, avatarUrl: profileData.avatarUrl } : p);
    } else {
      const newProfile: Profile = {
        id: Date.now(),
        name: profileData.name,
        avatarUrl: profileData.avatarUrl,
        watchHistory: [],
        myList: [],
        ratings: {},
      };
      updatedProfiles = [...currentUser.profiles, newProfile];
    }
    
    const updatedUser = { ...currentUser, profiles: updatedProfiles };
    setCurrentUser(updatedUser);
    setUsers(users.map(u => u.id === currentUser.id ? updatedUser : u));
    setEditingProfile(null);
  };

  const handleDeleteProfile = (profileId: number) => {
    if (!currentUser || currentUser.profiles.length <= 1) return;

    const updatedProfiles = currentUser.profiles.filter(p => p.id !== profileId);
    const updatedUser = { ...currentUser, profiles: updatedProfiles };
    setCurrentUser(updatedUser);
    setUsers(users.map(u => u.id === currentUser.id ? updatedUser : u));
    setEditingProfile(null);
  };

  const updateCurrentUser = (updatedProfile: Profile) => {
      if (!currentUser) return;
      
      const updatedProfiles = currentUser.profiles.map(p => p.id === updatedProfile.id ? updatedProfile : p);
      const updatedUser = { ...currentUser, profiles: updatedProfiles };
      
      setCurrentProfile(updatedProfile);
      setCurrentUser(updatedUser);
      setUsers(users.map(u => u.id === currentUser.id ? updatedUser : u));
  };

  const handleAddToWatchHistory = (animationId: number) => {
    if (!currentProfile) return;

    const existingItemIndex = (currentProfile.watchHistory || []).findIndex(item => item.animationId === animationId);
    let updatedHistory: WatchHistoryItem[];

    if (existingItemIndex > -1) {
      const item = (currentProfile.watchHistory as WatchHistoryItem[])[existingItemIndex];
      updatedHistory = [
        { ...item, progress: 0.8 },
        ...(currentProfile.watchHistory as WatchHistoryItem[]).slice(0, existingItemIndex),
        ...(currentProfile.watchHistory as WatchHistoryItem[]).slice(existingItemIndex + 1),
      ];
    } else {
      const newItem: WatchHistoryItem = { animationId, progress: 0.8 };
      updatedHistory = [newItem, ...(currentProfile.watchHistory || [])];
    }

    const updatedProfile = { ...currentProfile, watchHistory: updatedHistory };
    updateCurrentUser(updatedProfile);
  };
  
  const handleToggleMyList = (animationId: number) => {
    if (!currentProfile) return;

    const isInList = (currentProfile.myList || []).includes(animationId);
    const updatedList = isInList
      ? (currentProfile.myList || []).filter(id => id !== animationId)
      : [...(currentProfile.myList || []), animationId];

    const updatedProfile = { ...currentProfile, myList: updatedList };
    updateCurrentUser(updatedProfile);
  };
  
  const handleRateAnimation = (animationId: number, newRating: 'like' | 'superlike' | 'dislike' | null) => {
    if (!currentProfile) return;

    const animIndex = animations.findIndex(a => a.id === animationId);
    if (animIndex === -1) return;

    const animationToUpdate = { ...animations[animIndex] };
    animationToUpdate.likes = animationToUpdate.likes ?? 0;
    animationToUpdate.superlikes = animationToUpdate.superlikes ?? 0;
    animationToUpdate.dislikes = animationToUpdate.dislikes ?? 0;

    const currentRatings = currentProfile.ratings || {};
    const previousRating = currentRatings[animationId];

    if (previousRating === newRating) return;

    // Decrement previous rating if it existed
    if (previousRating) {
      if (previousRating === 'like') animationToUpdate.likes--;
      if (previousRating === 'superlike') animationToUpdate.superlikes--;
      if (previousRating === 'dislike') animationToUpdate.dislikes--;
    }

    // Increment new rating if it exists
    if (newRating) {
      if (newRating === 'like') animationToUpdate.likes++;
      if (newRating === 'superlike') animationToUpdate.superlikes++;
      if (newRating === 'dislike') animationToUpdate.dislikes++;
    }

    animationToUpdate.likes = Math.max(0, animationToUpdate.likes);
    animationToUpdate.superlikes = Math.max(0, animationToUpdate.superlikes);
    animationToUpdate.dislikes = Math.max(0, animationToUpdate.dislikes);

    // Update animations state
    const updatedAnimations = [...animations];
    updatedAnimations[animIndex] = animationToUpdate;
    setAnimations(updatedAnimations);

    // Update profile ratings
    const updatedRatings = { ...currentRatings };
    if (newRating) {
      updatedRatings[animationId] = newRating;
    } else {
      delete updatedRatings[animationId];
    }

    const updatedProfile = { ...currentProfile, ratings: updatedRatings };
    updateCurrentUser(updatedProfile);
  };


  // --- Video Playback Handlers ---
  const handlePlayVideo = (videoUrl: string, poster?: string) => {
    setPlayingVideo({ url: videoUrl, poster });
  };
  
  const handleClosePlayer = () => {
    setPlayingVideo(null);
  };

  const handlePlayFromCard = (animation: Animation) => {
    const urlToPlay = animation.videoUrl || animation.trailerUrl || animation.seasons?.[0]?.episodes?.[0]?.videoUrl;
    if (urlToPlay) {
      setPlayingVideo({ 
        url: urlToPlay,
        poster: animation.heroImageUrl || animation.thumbnailUrl
      });
      handleAddToWatchHistory(animation.id);
    }
  };
  
  // --- RENDER LOGIC ---

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (!currentUser) {
    return <AuthPage onLogin={handleLogin} onSignUp={handleSignUp} onBypass={handleBypassLogin} />;
  }

  if (!currentProfile) {
    return (
      <>
        <ProfileGate
          profiles={currentUser.profiles}
          onSelectProfile={handleSelectProfile}
          isManaging={isManagingProfiles}
          onManageProfiles={handleManageProfiles}
          onAddProfile={handleStartAddingProfile}
          onEditProfile={handleStartEditingProfile}
        />
        <EditProfileModal
          profile={editingProfile}
          onClose={() => setEditingProfile(null)}
          onSave={handleSaveProfile}
          onDelete={handleDeleteProfile}
          avatars={AVATARS}
          avatarSections={AVATAR_SECTIONS}
          canDelete={currentUser.profiles.length > 1}
        />
      </>
    );
  }

  const handleNavigation = (newView: View) => {
    setPreviousView(view);
    // Update hash instead of state directly
    window.location.hash = newView;
    window.scrollTo(0, 0);
  };

  const handleSelectAnimation = (animation: Animation) => {
    // Update hash for deep linking support
    window.location.hash = `watch/${animation.id}`;
  };

  const handleBack = () => {
    // Navigate back via hash
    window.location.hash = previousView;
  };
  
  const filteredAnimations = animations.filter(animation =>
    animation.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const continueWatchingItems = (currentProfile?.watchHistory || [])
    .map(item => {
      const animation = animations.find(anim => anim.id === item.animationId);
      return animation ? { animation, progress: item.progress } : null;
    })
    .filter((a): a is { animation: Animation; progress: number } => a !== null);
    
  const continueWatchingAnims = continueWatchingItems.map(item => item.animation);
  const progressMap = Object.fromEntries(continueWatchingItems.map(item => [item.animation.id, item.progress]));
  
  const myListAnims = (currentProfile?.myList || [])
    .map(id => animations.find(anim => anim.id === id))
    .filter((a): a is Animation => a !== undefined);

  const topRatedAnims = [...animations]
    .filter(a => (a.likes || 0) > 0 || (a.superlikes || 0) > 0)
    .sort((a, b) => {
      const scoreA = (a.superlikes || 0) * 2 + (a.likes || 0);
      const scoreB = (b.superlikes || 0) * 2 + (a.likes || 0);
      return scoreB - scoreA;
    }).slice(0, 10);

  const renderContent = () => {
    if (selectedAnimation) {
      const freshAnimation = animations.find(a => a.id === selectedAnimation.id) || selectedAnimation;
      return <ShowDetailView 
                animation={freshAnimation} 
                onBack={handleBack} 
                onAddToWatchHistory={handleAddToWatchHistory}
                onToggleMyList={handleToggleMyList}
                isInMyList={(currentProfile?.myList || []).includes(selectedAnimation.id)}
                onPlayVideo={handlePlayVideo}
                userRating={(currentProfile?.ratings || {})[selectedAnimation.id]}
                onRateAnimation={handleRateAnimation}
              />;
    }
    switch (view) {
      case 'home':
        return (
          <>
            <HeroSection
              animations={animations}
              currentIndex={currentHeroIndex}
              onSelect={handleSelectAnimation}
              onNext={() => setCurrentHeroIndex((currentHeroIndex + 1) % animations.length)}
              onPrev={() => setCurrentHeroIndex((currentHeroIndex - 1 + animations.length) % animations.length)}
              onSetIndex={setCurrentHeroIndex}
            />
            <main className="container mx-auto px-4 md:px-12 py-8 space-y-12">
               {continueWatchingAnims.length > 0 && (
                 <ContentCarousel title="Continue Watching" animations={continueWatchingAnims} onSelectAnimation={handleSelectAnimation} progressMap={progressMap} />
               )}
               {myListAnims.length > 0 && (
                 <ContentCarousel title="My List" animations={myListAnims} onSelectAnimation={handleSelectAnimation} />
               )}
               <ContentCarousel title="Shows" animations={animations.filter(a => a.category === 'shows')} onSelectAnimation={handleSelectAnimation} />
               {topRatedAnims.length > 0 && (
                 <ContentCarousel title="Top Rated" animations={topRatedAnims} onSelectAnimation={handleSelectAnimation} />
               )}
               <ContentCarousel title="Short Films" animations={animations.filter(a => a.category === 'short-films')} onSelectAnimation={handleSelectAnimation} />
            </main>
          </>
        );
      case 'shows':
        return <ShowsGridPage animations={animations} onSelectAnimation={handleSelectAnimation} onPlayAnimation={handlePlayFromCard} />;
      case 'short-films':
        return <ShortFilmsPage 
                  animations={animations} 
                  onSelectAnimation={handleSelectAnimation} 
                  onPlayAnimation={handlePlayFromCard} 
                />;
      case 'news':
        return <NewsPage articles={NEWS_ARTICLES} onSelectArticle={setSelectedArticle} />;
      case 'my-list':
        return <MyListPage animations={myListAnims} onSelectAnimation={handleSelectAnimation} onPlayAnimation={handlePlayFromCard} />;
      case 'coming-soon':
        return <ComingSoonPage />;
      case 'about':
        return <AboutPage />;
      case 'careers':
        return <CareersPage />;
      case 'help':
        return <HelpCenterPage />;
      case 'account':
        return <AccountPage user={currentUser} onManageProfiles={handleSwitchProfile} onNavigate={handleNavigation} />;
      case 'terms':
        return <TermsOfUsePage />;
      case 'privacy':
        return <PrivacyPolicyPage />;
      case 'cookies':
        return <CookiePreferencesPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-slate-900 text-white min-h-screen">
      <Header
        onNavigate={handleNavigation}
        onSearchClick={() => setIsSearchOpen(true)}
        currentUser={currentUser}
        currentProfile={currentProfile}
        onSwitchProfile={handleSwitchProfile}
        onLogout={handleLogout}
      />
      <div key={view} className="animate-fade-in">
        {renderContent()}
      </div>
      <Footer onNavigate={handleNavigation} />
      <SearchOverlay
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        searchQuery={searchQuery}
        onSearchQueryChange={setSearchQuery}
        results={filteredAnimations}
        onSelectAnimation={(anim) => {
          handleSelectAnimation(anim);
          setIsSearchOpen(false);
        }}
        onPlayAnimation={(anim) => {
          handlePlayFromCard(anim);
          setIsSearchOpen(false);
        }}
      />
      {selectedArticle && <NewsArticleModal article={selectedArticle} onClose={() => setSelectedArticle(null)} />}
      {playingVideo && <VideoPlayer videoUrl={playingVideo.url} poster={playingVideo.poster} onClose={handleClosePlayer} />}
    </div>
  );
};

export default App;
