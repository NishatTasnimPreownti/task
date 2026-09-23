import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Fades/slides a group of elements in as they scroll into view.
 * Pass a selector for the items to animate within the returned ref's container.
 */
export function useScrollReveal(itemSelector, options = {}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const items = container.querySelectorAll(itemSelector);
    if (!items.length) return;

    const ctx = gsap.context(() => {
      gsap.set(items, { opacity: 0, y: options.y ?? 36 });

      ScrollTrigger.batch(items, {
        start: "top 85%",
        once: true,
        onEnter: (batch) =>
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            duration: options.duration ?? 0.7,
            ease: "power2.out",
            stagger: options.stagger ?? 0.12,
          }),
      });
    }, container);

    return () => ctx.revert();
  }, [itemSelector, options.duration, options.stagger, options.y]);

  return containerRef;
}
