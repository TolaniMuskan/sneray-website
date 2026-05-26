import React, { useRef, useEffect } from 'react';

export default function RevealSection({ children, className = '', direction = 'up', delay = 0 }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    function reveal() {
      if (el.classList.contains('reveal-in')) return;
      el.classList.add('reveal-in');
      // stagger direct children
      const kids = el.querySelectorAll(':scope > *');
      kids.forEach((k, i) => {
        // preserve existing inline delay if present
        k.style.transitionDelay = `${delay + i * 80}ms`;
      });
    }

    if (!('IntersectionObserver' in window)) {
      reveal();
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            reveal();
            // once visible, unobserve to keep it visible
            obs.unobserve(el);
          }
        });
      },
      { threshold: 0.12 }
    );
    obs.observe(el);

    // safety fallback: reveal after 1500ms to avoid permanently hidden sections
    const fallback = setTimeout(() => reveal(), 1500 + delay);

    return () => {
      obs.disconnect();
      clearTimeout(fallback);
    };
  }, [delay]);

  return (
    <div
      ref={ref}
      data-dir={direction}
      className={`reveal ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
