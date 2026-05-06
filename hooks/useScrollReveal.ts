"use client";

import { useEffect, useRef } from "react";

/**
 * Attaches an IntersectionObserver to a container element.
 * Any child with class `reveal-up`, `reveal-left`, `reveal-right`,
 * `reveal-scale`, or `reveal-fade` will get `.active` added when
 * the container scrolls into view.
 *
 * Usage:
 *   const ref = useScrollReveal<HTMLElement>();
 *   <section ref={ref}>
 *     <h2 className="reveal-up">...</h2>
 *     <img className="reveal-left stagger-1" />
 *   </section>
 */
export function useScrollReveal<T extends Element = HTMLElement>(
  threshold = 0.12
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const selectors =
      ".reveal-up, .reveal-left, .reveal-right, .reveal-scale, .reveal-fade";

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target
              .querySelectorAll(selectors)
              .forEach((child) => child.classList.add("active"));
            // also activate the container itself if it has a reveal class
            if (entry.target.matches(selectors)) {
              entry.target.classList.add("active");
            }
          }
        });
      },
      { threshold }
    );

    obs.observe(el);
    // also observe direct children that are reveal elements
    el.querySelectorAll(selectors).forEach((child) => obs.observe(child));

    return () => obs.disconnect();
  }, [threshold]);

  return ref;
}
