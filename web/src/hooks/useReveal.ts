import { useEffect } from 'react';

const REVEAL_SELECTOR = '.reveal';

/** Menambah `is-visible` pada `.reveal` saat masuk layar. */
export function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' },
    );

    document.querySelectorAll(REVEAL_SELECTOR).forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);
}
