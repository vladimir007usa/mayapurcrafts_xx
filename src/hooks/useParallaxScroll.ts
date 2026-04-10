import { useEffect, useRef, useState, useCallback } from "react";

/**
 * Custom hook that tracks how far a section has scrolled through the viewport
 * and returns a progress value from 0 (not yet visible) to 1 (fully scrolled through).
 * Used to drive scroll-reveal animations like clip-path reveals.
 */
export const useParallaxScroll = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const rafId = useRef<number>(0);

  const handleScroll = useCallback(() => {
    if (rafId.current) cancelAnimationFrame(rafId.current);

    rafId.current = requestAnimationFrame(() => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate how far the section has scrolled through the viewport.
      // progress = 0 when the top of the section hits the bottom of the viewport.
      // progress = 1 when the bottom of the section reaches the top of the viewport.
      const sectionHeight = rect.height;
      const totalScrollDistance = sectionHeight + windowHeight;
      const scrolled = windowHeight - rect.top;

      const rawProgress = scrolled / totalScrollDistance;
      const clampedProgress = Math.min(1, Math.max(0, rawProgress));

      setProgress(clampedProgress);
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    // Initial calculation
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [handleScroll]);

  return { ref, progress };
};
