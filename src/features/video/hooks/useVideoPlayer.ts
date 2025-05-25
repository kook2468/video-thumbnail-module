import { useRef } from "react";

export const useVideoPlayer = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const pause = () => {
    videoRef.current?.pause();
  };

  const getCurrentFrame = () => {
    const video = videoRef.current;
    if (!video) return null;

    const canvas = document.createElement("canvas");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const ctx = canvas.getContext("2d");
    if (!ctx) return null;

    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    const src = canvas.toDataURL("image/jpeg");

    return {
      src,
      time: video.currentTime,
    };
  };

  return {
    videoRef,
    pause,
    getCurrentFrame,
  };
};
