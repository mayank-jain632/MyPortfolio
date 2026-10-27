import { useCallback, useEffect, useState } from "react";

// Case studies live at #work/<slug>. Hash routing keeps deep links, back and forward working
// on any static host without a rewrite rule.
const PREFIX = "#work/";

function readSlug() {
  const { hash } = window.location;
  return hash.startsWith(PREFIX) ? decodeURIComponent(hash.slice(PREFIX.length)) : null;
}

export function caseStudyHref(slug) {
  return `${PREFIX}${slug}`;
}

/** @returns {{ slug: string | null, close: () => void }} */
export function useCaseStudyRoute() {
  const [slug, setSlug] = useState(readSlug);

  useEffect(() => {
    const onChange = () => setSlug(readSlug());
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);

  const close = useCallback(() => {
    window.location.hash = "work";
  }, []);

  return { slug, close };
}
