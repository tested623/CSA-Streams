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
import HelpCenterPage from './components/HelpCenterPage';
import ContactPage from './components/ContactPage';
import AccountPage from './components/AccountPage';
import TermsOfUsePage from './components/TermsOfUsePage';
import PrivacyPolicyPage from './components/PrivacyPolicyPage';
import CookiePreferencesPage from './components/CookiePreferencesPage';
import AllAccountsPage from './components/AllAccountsPage';
import OurChannelsPage from './components/OurChannelsPage';
import { NEWS_ARTICLES, PROFILES as DEFAULT_PROFILES, AVATARS, AVATAR_SECTIONS, ANIMATIONS as INITIAL_ANIMATIONS } from './constants';
import type { Animation, NewsArticle, Profile, User, WatchHistoryItem } from './types';

const LOCAL_STORAGE_KEY = 'chickensoup_data';

interface RemoteData {
  users: User[];
}

const loadRemoteData = async (): Promise<RemoteData> => {
  try {
    const storedData = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      if (parsedData.users) return { users: parsedData.users };
    }
  } catch (error) {
    console.error('Error loading data:', error);
  }
  return { users: [] };
};

const saveRemoteData = async (data: RemoteData): Promise<void> => {
  try {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
  } catch (error) {
    console.error('Error saving data:', error);
  }
};

export type View = 'home' | 'shows' | 'short-films' | 'news' | 'coming-soon' | 'my-list' | 'about' | 'careers' | 'help' | 'account' | 'terms' | 'privacy' | 'cookies' | 'contact' | 'all-accounts' | 'our-channels';

const VIEWS: View[] = ['home', 'shows', 'short-films', 'news', 'coming-soon', 'my-list', 'about', 'careers', 'help', 'account', 'terms', 'privacy', 'cookies', 'contact', 'all-accounts', 'our-channels'];

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

  const [users, setUsers] = useState<User[]>([]);
  const [animations, setAnimations] = useState<Animation[]>(INITIAL_ANIMATIONS);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [currentProfile, setCurrentProfile] = useState<Profile | null>(null);
  const [isManagingProfiles, setIsManagingProfiles] = useState(false);
  const [editingProfile, setEditingProfile] = useState<Profile | 'new' | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const { users: allUsers } = await loadRemoteData();
        setUsers(allUsers);
        setAnimations(INITIAL_ANIMATIONS);
        
        const currentUserId = sessionStorage.getItem('chickensoup_currentUser');
        if (currentUserId) {
          const loggedInUser = allUsers.find((u: User) => u.id === Number(currentUserId));
          if (loggedInUser) setCurrentUser(loggedInUser);
        }
      } catch (error) {
        console.error("Failed to load data", error);
      } finally {
        setTimeout(() => setIsLoading(false), 800);
      }
    };
    loadData();
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1);
      if (hash.startsWith('watch/')) {
        const id = parseInt(hash.split('/')[1]);
        if (!isNaN(id)) {
          const anim = animations.find(a => a.id === id);
          if (anim) { setSelectedAnimation(anim); return; }
        }
      }
      setSelectedAnimation(null);
      if (VIEWS.includes(hash as View)) setView(hash as View);
      else if (hash === '') setView('home');
    };
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [animations]);

  useEffect(() => {
    if (!isLoading) saveRemoteData({ users });
  }, [users, isLoading]);

  useEffect(() => {
    if (view === 'home' && !selectedAnimation && animations.length > 0) {
      const timer = setInterval(() => {
        setCurrentHeroIndex(prev => (prev + 1) % animations.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [view, selectedAnimation, animations.length]);
  
  const handleSignUp = (email: string, password?: string): boolean => {
    if (users.some(u => u.email.toLowerCase() === email.toLowerCase())) return false;
    const newUser: User = { id: Date.now(), email, password, profiles: DEFAULT_PROFILES };
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
      setView('home');
      window.location.hash = 'home';
      return true;
    }
    return false;
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setCurrentProfile(null);
    sessionStorage.removeItem('chickensoup_currentUser');
    window.location.hash = '';
    setView('home');
  };
  
  const handleBypassLogin = () => {
    const guestEmail = 'guest@test.com';
    const guestPassword = 'password';
    const guestUser = users.find(u => u.email.toLowerCase() === guestEmail);
    if (guestUser) {
        handleLogin(guestEmail, guestPassword);
    } else {
        const newUser: User = {
          id: Date.now(),
          email: guestEmail,
          password: guestPassword,
          profiles: DEFAULT_PROFILES,
        };
        setUsers(prev => [...prev, newUser]);
        setCurrentUser(newUser);
        sessionStorage.setItem('chickensoup_currentUser', String(newUser.id));
        window.location.hash = 'home';
        setView('home');
    }
  };

  const handleSelectProfile = (profile: Profile) => {
    setCurrentProfile(profile);
    setIsManagingProfiles(false);
  };
  
  const handleSwitchProfile = () => setCurrentProfile(null);
  const handleManageProfiles = () => setIsManagingProfiles(prev => !prev);
  const handleStartEditingProfile = (profile: Profile) => setEditingProfile(profile);
  const handleStartAddingProfile = () => setEditingProfile('new');

  const handleSaveProfile = (profileData: { id?: number; name: string; avatarUrl: string }) => {
    if (!currentUser) return;
    let updatedProfiles;
    if (profileData.id) {
      updatedProfiles = currentUser.profiles.map(p => p.id === profileData.id ? { ...p, name: profileData.name, avatarUrl: profileData.avatarUrl } : p);
    } else {
      updatedProfiles = [...currentUser.profiles, { id: Date.now(), name: profileData.name, avatarUrl: profileData.avatarUrl, watchHistory: [], myList: [], ratings: {} }];
    }
    const updatedUser = { ...currentUser, profiles: updatedProfiles };
    setCurrentUser(updatedUser);
    setUsers(users.map(u => u.id === currentUser.id ? updatedUser : u));
    setEditingProfile(null);
  };

  const handleDeleteProfile = (profileId: number) => {
    if (!currentUser || currentUser.profiles.length <= 1) return;
    const updatedUser = { ...currentUser, profiles: currentUser.profiles.filter(p => p.id !== profileId) };
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
    const existing = (currentProfile.watchHistory || []).findIndex(item => item.animationId === animationId);
    let updated: WatchHistoryItem[];
    if (existing > -1) {
      updated = [{ ...currentProfile.watchHistory![existing], progress: 0.8 }, ...currentProfile.watchHistory!.slice(0, existing), ...currentProfile.watchHistory!.slice(existing + 1)];
    } else {
      updated = [{ animationId, progress: 0.8 }, ...(currentProfile.watchHistory || [])];
    }
    updateCurrentUser({ ...currentProfile, watchHistory: updated });
  };
  
  const handleToggleMyList = (animationId: number) => {
    if (!currentProfile) return;
    const list = currentProfile.myList || [];
    const updated = list.includes(animationId) ? list.filter(id => id !== animationId) : [...list, animationId];
    updateCurrentUser({ ...currentProfile, myList: updated });
  };
  
  const handleRateAnimation = (animationId: number, newRating: 'like' | 'superlike' | 'dislike' | null) => {
    if (!currentProfile) return;
    const animIndex = animations.findIndex(a => a.id === animationId);
    if (animIndex === -1) return;

    const anim = { ...animations[animIndex], likes: animations[animIndex].likes || 0, superlikes: animations[animIndex].superlikes || 0, dislikes: animations[animIndex].dislikes || 0 };
    const prevRating = (currentProfile.ratings || {})[animationId];
    if (prevRating === newRating) return;

    if (prevRating) {
      if (prevRating === 'like') anim.likes--;
      else if (prevRating === 'superlike') anim.superlikes--;
      else if (prevRating === 'dislike') anim.dislikes--;
    }
    if (newRating) {
      if (newRating === 'like') anim.likes++;
      else if (newRating === 'superlike') anim.superlikes++;
      else if (newRating === 'dislike') anim.dislikes++;
    }

    const updatedAnims = [...animations];
    updatedAnims[animIndex] = anim;
    setAnimations(updatedAnims);

    const updatedRatings = { ...(currentProfile.ratings || {}) };
    if (newRating) updatedRatings[animationId] = newRating;
    else delete updatedRatings[animationId];
    updateCurrentUser({ ...currentProfile, ratings: updatedRatings });
  };

  const handlePlayVideo = (videoUrl: string, poster?: string) => setPlayingVideo({ url: videoUrl, poster });
  const handleClosePlayer = () => setPlayingVideo(null);

  const handlePlayFromCard = (animation: Animation) => {
    const url = animation.videoUrl || animation.trailerUrl || animation.seasons?.[0]?.episodes?.[0]?.videoUrl;
    if (url) {
      handlePlayVideo(url, animation.heroImageUrl || animation.thumbnailUrl);
      handleAddToWatchHistory(animation.id);
    }
  };
  
  if (isLoading) return <LoadingScreen />;
  if (!currentUser) return <AuthPage onLogin={handleLogin} onSignUp={handleSignUp} onBypass={handleBypassLogin} />;
  if (!currentProfile) return (
    <>
      <ProfileGate profiles={currentUser.profiles} onSelectProfile={handleSelectProfile} isManaging={isManagingProfiles} onManageProfiles={handleManageProfiles} onAddProfile={handleStartAddingProfile} onEditProfile={handleStartEditingProfile} />
      <EditProfileModal profile={editingProfile} onClose={() => setEditingProfile(null)} onSave={handleSaveProfile} onDelete={handleDeleteProfile} avatars={AVATARS} avatarSections={AVATAR_SECTIONS} canDelete={currentUser.profiles.length > 1} />
    </>
  );

  const handleNavigation = (newView: View) => {
    setPreviousView(view);
    window.location.hash = newView;
    window.scrollTo(0, 0);
  };

  const continueWatchingItems = (currentProfile?.watchHistory || [])
    .map(item => ({ animation: animations.find(anim => anim.id === item.animationId), progress: item.progress }))
    .filter((a): a is { animation: Animation, progress: number } => !!a.animation);
    
  const myListAnims = (currentProfile?.myList || []).map(id => animations.find(anim => anim.id === id)).filter((a): a is Animation => !!a);

  return (
    <div className="bg-slate-900 text-white min-h-screen">
      <Header onNavigate={handleNavigation} onSearchClick={() => setIsSearchOpen(true)} currentUser={currentUser} currentProfile={currentProfile} onSwitchProfile={handleSwitchProfile} onLogout={handleLogout} />
      <div key={view} className="animate-fade-in">
        {selectedAnimation ? (
           <ShowDetailView animation={animations.find(a => a.id === selectedAnimation.id) || selectedAnimation} onBack={() => window.location.hash = previousView} onAddToWatchHistory={handleAddToWatchHistory} onToggleMyList={handleToggleMyList} isInMyList={(currentProfile?.myList || []).includes(selectedAnimation.id)} onPlayVideo={handlePlayVideo} userRating={(currentProfile?.ratings || {})[selectedAnimation.id]} onRateAnimation={handleRateAnimation} />
        ) : view === 'home' ? (
          <>
            <HeroSection animations={animations} currentIndex={currentHeroIndex} onSelect={(a) => window.location.hash = `watch/${a.id}`} onNext={() => setCurrentHeroIndex((currentHeroIndex + 1) % animations.length)} onPrev={() => setCurrentHeroIndex((currentHeroIndex - 1 + animations.length) % animations.length)} onSetIndex={setCurrentHeroIndex} />
            <main className="container mx-auto px-4 md:px-12 py-8 space-y-12">
               {continueWatchingItems.length > 0 && <ContentCarousel title="Continue Watching" animations={continueWatchingItems.map(i => i.animation)} onSelectAnimation={(a) => window.location.hash = `watch/${a.id}`} progressMap={Object.fromEntries(continueWatchingItems.map(i => [i.animation.id, i.progress]))} />}
               {myListAnims.length > 0 && <ContentCarousel title="My List" animations={myListAnims} onSelectAnimation={(a) => window.location.hash = `watch/${a.id}`} />}
               <ContentCarousel title="Shows" animations={animations.filter(a => a.category === 'shows')} onSelectAnimation={(a) => window.location.hash = `watch/${a.id}`} />
               <ContentCarousel title="Short Films" animations={animations.filter(a => a.category === 'short-films')} onSelectAnimation={(a) => window.location.hash = `watch/${a.id}`} />
            </main>
          </>
        ) : view === 'shows' ? <ShowsGridPage animations={animations} onSelectAnimation={(a) => window.location.hash = `watch/${a.id}`} onPlayAnimation={handlePlayFromCard} />
        : view === 'short-films' ? <ShortFilmsPage animations={animations} onSelectAnimation={(a) => window.location.hash = `watch/${a.id}`} onPlayAnimation={handlePlayFromCard} />
        : view === 'news' ? <NewsPage articles={NEWS_ARTICLES} onSelectArticle={setSelectedArticle} />
        : view === 'my-list' ? <MyListPage animations={myListAnims} onSelectAnimation={(a) => window.location.hash = `watch/${a.id}`} onPlayAnimation={handlePlayFromCard} />
        : view === 'coming-soon' ? <ComingSoonPage />
        : view === 'about' ? <AboutPage />
        : view === 'careers' ? <CareersPage />
        : view === 'help' ? <HelpCenterPage />
        : view === 'account' ? <AccountPage user={currentUser} onManageProfiles={handleSwitchProfile} onNavigate={handleNavigation} />
        : view === 'terms' ? <TermsOfUsePage />
        : view === 'privacy' ? <PrivacyPolicyPage />
        : view === 'cookies' ? <CookiePreferencesPage />
        : view === 'contact' ? <ContactPage />
        : view === 'all-accounts' ? <AllAccountsPage onNavigate={handleNavigation} />
        : view === 'our-channels' ? <OurChannelsPage />
        : null}
      </div>
      <Footer onNavigate={handleNavigation} />
      <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} searchQuery={searchQuery} onSearchQueryChange={setSearchQuery} results={animations.filter(a => a.title.toLowerCase().includes(searchQuery.toLowerCase()))} onSelectAnimation={(a) => { window.location.hash = `watch/${a.id}`; setIsSearchOpen(false); }} onPlayAnimation={(a) => { handlePlayFromCard(a); setIsSearchOpen(false); }} />
      {selectedArticle && <NewsArticleModal article={selectedArticle} onClose={() => setSelectedArticle(null)} />}
      {playingVideo && <VideoPlayer videoUrl={playingVideo.url} poster={playingVideo.poster} onClose={handleClosePlayer} />}
    </div>
  );
};

export default App;