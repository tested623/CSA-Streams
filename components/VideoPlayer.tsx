import React, { useEffect, useState } from 'react';

interface VideoPlayerProps {
  videoUrl: string;
  poster?: string;
  onClose: () => void;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoUrl, poster, onClose }) => {
  const [useIframe, setUseIframe] = useState(false);
  const [videoSrc, setVideoSrc] = useState<string | null>(null);

  useEffect(() => {
    if (!videoUrl) return;

    // Check for YouTube or ScreenPal
    const isYt = videoUrl.includes('youtube.com') || videoUrl.includes('youtu.be');
    const isScreenPal = videoUrl.includes('screenpal.com');
    
    setUseIframe(isYt || isScreenPal);

    if (isYt) {
        try {
            const url = new URL(videoUrl);
            let videoId = url.searchParams.get('v');
            if (!videoId && videoUrl.includes('youtu.be')) {
                videoId = url.pathname.slice(1);
            }
            
            if (videoId) {
                 const params = new URLSearchParams({
                    enablejsapi: '1',
                    rel: '0',
                    modestbranding: '1',
                    playsinline: '1',
                    autoplay: '1',
                    origin: window.location.origin,
                    widget_referrer: window.location.origin
                 });
                 setVideoSrc(`https://www.youtube-nocookie.com/embed/${videoId}?${params.toString()}`);
            } else {
                 setVideoSrc(videoUrl);
            }
        } catch (e) {
            setVideoSrc(videoUrl);
        }
    } else if (isScreenPal) {
        // Use the URL directly for the iframe as provided by the user
        setVideoSrc(videoUrl);
    } else {
        // Native video
        setVideoSrc(videoUrl);
    }
  }, [videoUrl]);

  if (!videoSrc) return null;

  return (
    <div className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center backdrop-blur-md animate-fade-in p-4 md:p-12">
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-all z-50 backdrop-blur-sm"
        aria-label="Close video player"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <div className="relative w-full max-w-7xl aspect-video bg-black shadow-2xl rounded-xl overflow-hidden border border-slate-800">
        {useIframe ? (
          <iframe
            id="player"
            src={videoSrc}
            title="Video Player"
            width="100%"
            height="100%"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
            className="w-full h-full block border-0"
          ></iframe>
        ) : (
          <video 
            src={videoSrc}
            poster={poster}
            className="w-full h-full object-contain"
            controls
            autoPlay
            controlsList="nodownload"
            playsInline
          >
            Your browser does not support the video tag.
          </video>
        )}
      </div>
    </div>
  );
};

export default VideoPlayer;