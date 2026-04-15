"use client";

import { useState } from "react";

interface VideoPlayerProps {
  videos?: string[];
}

const defaultVideos = ["/Vidio produk hikaru.mp4", "/Vidio produk kyohikari.mp4"];

export default function VideoPlayer({ videos = defaultVideos }: VideoPlayerProps) {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [hasError, setHasError] = useState(false);

  const handleVideoEnd = () => {
    setCurrentVideo((prev) => (prev + 1) % videos.length);
  };

  if (hasError) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-emerald-100 to-stone-100 px-6 text-center text-stone-700">
        <p>
          Video belum tersedia. Pastikan file ada di folder public dengan nama:
          Vidio produk hikaru.mp4 dan Vidio produk kyohikari.mp4.
        </p>
      </div>
    );
  }

  return (
    <video
      className="h-full w-full object-cover"
      autoPlay
      controls
      muted
      playsInline
      preload="metadata"
      onEnded={handleVideoEnd}
      onError={() => setHasError(true)}
    >
      <source src={videos[currentVideo]} type="video/mp4" />
      Browser Anda tidak mendukung video HTML5.
    </video>
  );
}
