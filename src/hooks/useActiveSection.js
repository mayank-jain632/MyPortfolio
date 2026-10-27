import { useEffect, useState } from "react";

// A section counts as active while it crosses a band just above the middle of the viewport.
const ACTIVE_BAND = "-40% 0px -55% 0px";

/**
 * Id of the section currently in the reading band, or null above the first one.
 * @param {string[]} ids section element ids, in page order
 * @returns {string | null}
 */
export function useActiveSection(ids) {
  const [activeId, setActiveId] = useState(null);
  const idsKey = ids.join("|");

  useEffect(() => {
    const elements = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (elements.length === 0) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const hit = entries.find((entry) => entry.isIntersecting);
        if (hit) {
          setActiveId(hit.target.id);
          return;
        }
        // Scrolled back above the first section: nothing is active.
        const firstTop = elements[0].getBoundingClientRect().top;
        if (firstTop > window.innerHeight * 0.4) setActiveId(null);
      },
      { rootMargin: ACTIVE_BAND }
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
    // idsKey stands in for the ids array.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idsKey]);

  return activeId;
}

/**
 * Whether the element with this id intersects the viewport. True until measured.
 * @param {string} id
 * @returns {boolean}
 */
export function useElementInView(id) {
  const [isInView, setIsInView] = useState(true);

  useEffect(() => {
    const element = document.getElementById(id);
    if (!element) return undefined;
    const observer = new IntersectionObserver(([entry]) => setIsInView(entry.isIntersecting));
    observer.observe(element);
    return () => observer.disconnect();
  }, [id]);

  return isInView;
}
