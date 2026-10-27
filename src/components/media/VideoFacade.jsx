import { useEffect, useRef, useState } from "react";

const EMBED_URL = {
  youtube: (id) => `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`,
  vimeo: (id) => `https://player.vimeo.com/video/${id}?autoplay=1&dnt=1`,
};

/**
 * Click-to-load video. Nothing loads from the video host until the visitor presses play.
 *
 * @param {object} props
 * @param {{ provider: "youtube" | "vimeo", id: string, title: string }} props.video
 * @param {string} [props.poster] root-relative image, otherwise a plain surface
 */
export function VideoFacade({ video, poster }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const frameRef = useRef(null);

  useEffect(() => {
    if (isLoaded) frameRef.current?.focus();
  }, [isLoaded]);

  return (
    <div className="relative aspect-video overflow-hidden rounded-md border border-hairline bg-surface">
      {isLoaded ? (
        <iframe
          ref={frameRef}
          src={EMBED_URL[video.provider](video.id)}
          title={video.title}
          allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
          allowFullScreen
          className="absolute inset-0 size-full"
        />
      ) : (
        <button
          type="button"
          onClick={() => setIsLoaded(true)}
          className="group absolute inset-0 flex size-full items-center justify-center"
        >
          {poster && (
            <img src={poster} alt="" loading="lazy" decoding="async" className="absolute inset-0 size-full object-cover" />
          )}
          <span className="sr-only">Play video: {video.title}</span>
          <span
            aria-hidden="true"
            className="relative flex size-16 items-center justify-center rounded-pill bg-accent text-accent-ink shadow-accent transition-transform duration-base ease-out-quart group-hover:scale-105 group-active:scale-95"
          >
            <svg viewBox="0 0 24 24" className="ml-1 size-6" fill="currentColor">
              <path d="M8 5.5v13l11-6.5z" />
            </svg>
          </span>
        </button>
      )}
    </div>
  );
}
