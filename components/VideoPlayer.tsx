import React, { useEffect, useState } from 'react';

interface VideoPlayerProps {
  videoUrl: string;
  onClose: () => void;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoUrl, onClose }) => {
  const [embedUrl, setEmbedUrl] = useState<string | null>(null);

  useEffect(() => {
    try {
      const url = new URL(videoUrl);
      const videoId = url.searchParams.get('v');
      if (videoId) {
        setEmbedUrl(`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`);
      }
    } catch (error) {
      console.error("Invalid YouTube URL:", videoUrl);
    }
  }, [videoUrl]);

  if (!embedUrl) {
    return null; // Or show an error message
  }

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-4xl aspect-video bg-black">
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white text-3xl font-bold z-10"
          aria-label="Close video player"
        >
          &times;
        </button>
        <iframe
          src={embedUrl}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      </div>
    </div>
  );
};

export default VideoPlayer;