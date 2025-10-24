"use client";

import { useEffect, useRef } from "react";

export default function VideoPlayer({ src, poster }) {
  const ref = useRef(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    video.muted = true;

    const playPromise = video.play();
    if (playPromise && typeof playPromise.then === "function") {
      playPromise.catch((err) => {
        console.debug("Video autoplay prevented:", err);
      });
    }
  }, [src]);

  if (!src) return null;

  return (
    <div style={{ maxWidth: 900, margin: "1rem auto" }}>
      <video
        ref={ref}
        src={src}
        poster={poster}
        controls={true}
        autoPlay={true}
        loop={true}
        muted={true}
        playsInline
        style={{ width: "100%", height: "auto", display: "block", borderRadius: 8 }}
      >
        Sorry, your browser doesn't support embedded videos. You can download it <a href={src}>here</a>.
      </video>
    </div>
  );
}
