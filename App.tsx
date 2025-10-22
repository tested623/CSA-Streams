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
import { ANIMATION_CATEGORIES, ANIMATIONS, NEWS_ARTICLES, PROFILES, AVATARS } from './constants';
import type { Animation, AnimationCategory, NewsArticle, Profile } from './types';

type View = 'home' | 'shows' | 'short-films' | 'news' | 'coming-soon';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [view, setView] = useState<View>('home');
  const [previousView, setPreviousView] = useState<View>('home');
  const [selectedAnimation, setSelectedAnimation] = useState<Animation | null>(null);
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(null);

  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [currentProfile, setCurrentProfile] = useState<Profile | null>(null);
  const [isManagingProfiles, setIsManagingProfiles] = useState(false);
  const [editingProfile, setEditingProfile] = useState<Profile | 'new' | null>(null);

  // Load profiles from localStorage on initial app load
  useEffect(() => {
    const loadData = () => {
      try {
        const savedProfiles = localStorage.getItem('chickensoup_profiles');
        if (savedProfiles) {
          const parsedProfiles = JSON.parse(savedProfiles);
          if (Array.isArray(parsedProfiles) && parsedProfiles.length > 0) {
            setProfiles(parsedProfiles);
          } else {
            setProfiles(PROFILES); // Fallback if stored data is invalid
          }
        } else {
          setProfiles(PROFILES); // First-time user
        }
      } catch (error) {
        console.error("Failed to load profiles from localStorage", error);
        setProfiles(PROFILES); // Fallback on error
      }
    };
    
    loadData();

    // Simulate initial asset loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200); // Show loading screen for 1.2 seconds

    return () => clearTimeout(timer);
  }, []);

  // Save profiles to localStorage whenever they change
  useEffect(() => {
    // Don't save the initial empty array. Only start saving once profiles have been populated.
    if (profiles.length > 0) {
      try {
        localStorage.setItem('chickensoup_profiles', JSON.stringify(profiles));
      } catch (error) {
        console.error("Failed to save profiles to localStorage", error);
      }
    }
  }, [profiles]);

  useEffect(() => {
    if (view === 'home') {
      const timer = setInterval(() => {
        setCurrentHeroIndex(prevIndex => (prevIndex + 1) % ANIMATIONS.length);
      }, 5000); // Change slide every 5 seconds
      return () => clearInterval(timer);
    }
  }, [view]);
  
  // Profile Handlers
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
  
  const handleCancelEditProfile = () => {
    setEditingProfile(null);
  };
  
  const handleSaveProfile = (profileData: { id?: number; name: string; avatarUrl: string }) => {
    if (profileData.id) { // Editing existing
      setProfiles(profiles.map(p => p.id === profileData.id ? { ...p, ...profileData } : p));
    } else { // Adding new
      const newProfile: Profile = {
        id: Date.now(),
        name: profileData.name,
        avatarUrl: profileData.avatarUrl,
        watchHistory: [],
      };
      setProfiles([...profiles, newProfile]);
    }
    setEditingProfile(null);
  };
  
  const handleDeleteProfile = (profileId: number) => {
    setProfiles(profiles.filter(p => p.id !== profileId));
    setEditingProfile(null);
    if (profiles.length <= 2) {
       setIsManagingProfiles(false);
    }
  };

  const handleAddToWatchHistory = (animationId: number) => {
    if (!currentProfile) return;

    const updatedHistory = [
      animationId,
      ...(currentProfile.watchHistory || []).filter(id => id !== animationId)
    ];

    const updatedProfile = { ...currentProfile, watchHistory: updatedHistory };
    setCurrentProfile(updatedProfile);
    setProfiles(profiles.map(p => p.id === updatedProfile.id ? updatedProfile : p));
  };


  const handleSelectAnimation = (animation: Animation) => {
    setPreviousView(view);
    setSelectedAnimation(animation);
    setIsSearchOpen(false);
    setSearchQuery('');
  };
  
  const handleHomeClick = () => {
    setView('home');
    setSelectedAnimation(null);
  }

  const handleShowsClick = () => {
    setView('shows');
    setSelectedAnimation(null);
  };
  
  const handleShortFilmsClick = () => {
    setView('short-films');
    setSelectedAnimation(null);
  };
  
  const handleNewsClick = () => {
    setView('news');
    setSelectedAnimation(null);
  };

  const handleComingSoonClick = () => {
    setView('coming-soon');
    setSelectedAnimation(null);
  };

  const handleBackToBrowse = () => {
    setView(previousView);
    setSelectedAnimation(null);
  };

  const handleNextHero = () => {
    setCurrentHeroIndex(prevIndex => (prevIndex + 1) % ANIMATIONS.length);
  };

  const handlePrevHero = () => {
    setCurrentHeroIndex(prevIndex => (prevIndex - 1 + ANIMATIONS.length) % ANIMATIONS.length);
  };
  
  const handleSetHeroIndex = (index: number) => {
    setCurrentHeroIndex(index);
  }

  const handleSearchOpen = () => {
    setIsSearchOpen(true);
  };

  const handleSearchClose = () => {
    setIsSearchOpen(false);
    setSearchQuery('');
  };

  const handleSelectArticle = (article: NewsArticle) => {
    setSelectedArticle(article);
  };
  
  const handleCloseArticle = () => {
    setSelectedArticle(null);
  };

  const searchResults = searchQuery
    ? ANIMATIONS.filter(anim =>
        anim.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];
    
  const continueWatchingAnimations = currentProfile?.watchHistory
    ?.map(id => ANIMATIONS.find(anim => anim.id === id))
    .filter((anim): anim is Animation => !!anim) || [];

  const renderContent = () => {
    switch(view) {
      case 'home':
        return (
          <>
            <HeroSection 
              animations={ANIMATIONS} 
              currentIndex={currentHeroIndex}
              onSelect={handleSelectAnimation}
              onNext={handleNextHero}
              onPrev={handlePrevHero}
              onSetIndex={handleSetHeroIndex}
            />
            <div className="relative z-10 -mt-24 px-4 md:px-12 space-y-12 pb-8 md:pb-16">
              {continueWatchingAnimations.length > 0 && (
                 <ContentCarousel 
                    title="Continue Watching" 
                    animations={continueWatchingAnimations}
                    onSelectAnimation={handleSelectAnimation}
                  />
              )}
              {ANIMATION_CATEGORIES.map((category: AnimationCategory) => {
                const categoryAnimations = ANIMATIONS.filter(
                  (animation) => animation.category === category.id
                );
                return (
                  <ContentCarousel 
                    key={category.id} 
                    title={category.title} 
                    animations={categoryAnimations}
                    onSelectAnimation={handleSelectAnimation}
                  />
                );
              })}
            </div>
          </>
        );
      case 'shows':
        return (
          <ShowsGridPage 
            animations={ANIMATIONS}
            onSelectAnimation={handleSelectAnimation}
          />
        );
      case 'short-films':
        return <ShortFilmsPage animations={ANIMATIONS} onSelectAnimation={handleSelectAnimation} />;
      case 'news':
        return <NewsPage articles={NEWS_ARTICLES} onSelectArticle={handleSelectArticle} />;
      case 'coming-soon':
        return <ComingSoonPage />;
      default:
        return null;
    }
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (!currentProfile) {
    return (
      <div className="bg-slate-900 text-white min-h-screen">
        <ProfileGate 
          profiles={profiles}
          onSelectProfile={handleSelectProfile}
          onManageProfiles={handleManageProfiles}
          isManaging={isManagingProfiles}
          onAddProfile={handleStartAddingProfile}
          onEditProfile={handleStartEditingProfile}
        />
        {editingProfile && (
          <EditProfileModal 
            profile={editingProfile}
            onClose={handleCancelEditProfile}
            onSave={handleSaveProfile}
            onDelete={handleDeleteProfile}
            avatars={AVATARS}
            canDelete={profiles.length > 1}
          />
        )}
      </div>
    );
  }


  if (selectedAnimation) {
    return (
      <div className="bg-slate-900 text-white min-h-screen">
        <Header 
          onHomeClick={handleHomeClick} 
          onShowsClick={handleShowsClick}
          onShortFilmsClick={handleShortFilmsClick}
          onNewsClick={handleNewsClick}
          onComingSoonClick={handleComingSoonClick}
          onSearchClick={handleSearchOpen}
          currentProfile={currentProfile}
          onSwitchProfile={handleSwitchProfile}
        />
        <ShowDetailView 
          animation={selectedAnimation} 
          onBack={handleBackToBrowse}
          onAddToWatchHistory={handleAddToWatchHistory}
        />
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-slate-900 text-white min-h-screen">
      <Header 
        onHomeClick={handleHomeClick} 
        onShowsClick={handleShowsClick}
        onShortFilmsClick={handleShortFilmsClick}
        onNewsClick={handleNewsClick}
        onComingSoonClick={handleComingSoonClick}
        onSearchClick={handleSearchOpen}
        currentProfile={currentProfile}
        onSwitchProfile={handleSwitchProfile}
      />
      <main>
        {renderContent()}
      </main>
      <SearchOverlay
        isOpen={isSearchOpen}
        onClose={handleSearchClose}
        searchQuery={searchQuery}
        onSearchQueryChange={setSearchQuery}
        results={searchResults}
        onSelectAnimation={handleSelectAnimation}
      />
      {selectedArticle && <NewsArticleModal article={selectedArticle} onClose={handleCloseArticle} />}
      <Footer />
    </div>
  );
};

export default App;