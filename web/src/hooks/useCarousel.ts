import { type RefObject, useCallback, useEffect, useState } from 'react';

type Direction = -1 | 1;

// Toleransi pembulatan subpiksel di tepi track.
const EDGE_TOLERANCE = 2;

/** Kontrol geser untuk track horizontal ber-scroll-snap. */
export function useCarousel(trackRef: RefObject<HTMLElement | null>) {
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const updateEdges = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const maxScroll = track.scrollWidth - track.clientWidth;
    setCanPrev(track.scrollLeft > EDGE_TOLERANCE);
    setCanNext(track.scrollLeft < maxScroll - EDGE_TOLERANCE);
  }, [trackRef]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    updateEdges();
    track.addEventListener('scroll', updateEdges, { passive: true });
    window.addEventListener('resize', updateEdges);
    return () => {
      track.removeEventListener('scroll', updateEdges);
      window.removeEventListener('resize', updateEdges);
    };
  }, [trackRef, updateEdges]);

  const scrollByCard = useCallback(
    (direction: Direction) => {
      const track = trackRef.current;
      const card = track?.firstElementChild as HTMLElement | null;
      if (!track || !card) return;
      const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
      track.scrollBy({ left: direction * (card.offsetWidth + gap), behavior: 'smooth' });
    },
    [trackRef],
  );

  return { canPrev, canNext, scrollByCard };
}
