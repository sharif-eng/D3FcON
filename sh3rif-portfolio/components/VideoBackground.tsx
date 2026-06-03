"use client";

import { useEffect, useRef, useState } from "react";

interface VideoBackgroundProps {
  videoUrl?: string;
  opacity?: number;
  overlay?: boolean;
}

export default function VideoBackground({ 
  videoUrl = "/videos/cyber-bg.mp4",
  opacity = 0.4,
  overlay = true 
}: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoSrc, setVideoSrc] = useState<string | null>(null);

  useEffect(() => {
    // We know the file exists in public/videos/cyber-bg.mp4
    setVideoSrc(videoUrl || "/videos/cyber-bg.mp4");
  }, [videoUrl]);

  useEffect(() => {
    if (videoRef.current && videoSrc) {
      videoRef.current.play().catch(err => {
        console.log("Video autoplay failed:", err);
      });
    }
  }, [videoSrc]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Video (render only when a source is found) */}
      {videoSrc && (
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity }}
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

      {/* Dark overlay for better text readability */}
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-900/90" />
      )}

      {/* Optional: Animated scanline effect for hacker feel */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent animate-scan" />
      </div>
    </div>
  );
}
