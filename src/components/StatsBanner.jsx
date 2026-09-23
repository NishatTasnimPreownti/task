import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./StatsBanner.css";

gsap.registerPlugin(ScrollTrigger);

const STATS = [
  { to: 300000, suffix: "+", label: "Trip Requests" },
  { to: 850000, suffix: "+", label: "Total Customers" },
  { to: 35000, suffix: "+", label: "Active Drivers" },
  { to: 64, suffix: "", label: "District Covered" },
];

export default function StatsBanner() {
  const gridRef = useRef(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const valueEls = grid.querySelectorAll(".stats__value");

    const ctx = gsap.context(() => {
      valueEls.forEach((el, i) => {
        const stat = STATS[i];
        const counter = { value: 0 };

        ScrollTrigger.create({
          trigger: grid,
          start: "top 85%",
          once: true,
          onEnter: () =>
            gsap.to(counter, {
              value: stat.to,
              duration: 1.6,
              ease: "power2.out",
              onUpdate: () => {
                el.textContent =
                  Math.round(counter.value).toLocaleString("en-US") +
                  stat.suffix;
              },
            }),
        });
      });
    }, grid);

    return () => ctx.revert();
  }, []);

  return (
    <section className="stats">
      <div className="container stats__inner">
        <h2>
          From Everyday Rides to <br /> Meaningful Journeys
        </h2>

        <div className="stats__grid" ref={gridRef}>
          {STATS.map((stat) => (
            <div className="stats__item" key={stat.label}>
              <span className="stats__value">0{stat.suffix}</span>
              <span className="stats__label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="stats__skyline" aria-hidden="true">
        <svg viewBox="0 0 1200 160" preserveAspectRatio="none">
          <rect x="0" y="60" width="60" height="100" fill="rgba(255,255,255,0.08)" />
          <rect x="70" y="30" width="50" height="130" fill="rgba(255,255,255,0.1)" />
          <rect x="130" y="80" width="40" height="80" fill="rgba(255,255,255,0.07)" />
          <rect x="180" y="10" width="55" height="150" fill="rgba(255,255,255,0.1)" />
          <rect x="250" y="55" width="45" height="105" fill="rgba(255,255,255,0.08)" />
          <rect x="310" y="20" width="60" height="140" fill="rgba(255,255,255,0.1)" />
          <rect x="1000" y="20" width="60" height="140" fill="rgba(255,255,255,0.1)" />
          <rect x="1070" y="55" width="45" height="105" fill="rgba(255,255,255,0.08)" />
          <rect x="1130" y="10" width="55" height="150" fill="rgba(255,255,255,0.1)" />
          <circle cx="150" cy="200" r="0" />
        </svg>
        <svg className="stats__car" viewBox="0 0 200 90" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="40" width="150" height="30" rx="8" fill="#fff" />
          <path d="M35 40 L55 15 L120 15 L140 40 Z" fill="#fff" />
          <path d="M55 20 L65 38 L112 38 L120 20 Z" fill="#8fb3ff" />
          <circle cx="45" cy="70" r="14" fill="#0e1420" />
          <circle cx="45" cy="70" r="6" fill="#c7d3f0" />
          <circle cx="130" cy="70" r="14" fill="#0e1420" />
          <circle cx="130" cy="70" r="6" fill="#c7d3f0" />
        </svg>
      </div>
    </section>
  );
}
