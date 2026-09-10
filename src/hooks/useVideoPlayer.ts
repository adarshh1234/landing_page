import { useState, useRef, RefObject } from 'react';

export interface UseVideoPlayerReturn {
  videoRef: RefObject<HTMLVideoElement>;
  isPlaying: boolean;
  isMuted: boolean;
  progress: number;
  togglePlay: () => void;
  toggleMute: () => void;
  handleTimeUpdate: () => void;
}

export const useVideoPlayer = (initialPlaying: boolean = true, initialMuted: boolean = true): UseVideoPlayerReturn => {
  const [isPlaying, setIsPlaying] = useState(initialPlaying);
  const [isMuted, setIsMuted] = useState(initialMuted);
  const [progress, setProgress] = useState(30);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const current = videoRef.current.currentTime;
      const duration = videoRef.current.duration || 1;
      setProgress((current / duration) * 100);
    }
  };

  return {
    videoRef,
    isPlaying,
    isMuted,
    progress,
    togglePlay,
    toggleMute,
    handleTimeUpdate
  };
};
