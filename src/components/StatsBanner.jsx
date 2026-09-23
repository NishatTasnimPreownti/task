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
        <svg
          className="stats__skyline-art"
          viewBox="0 0 1200 160"
          preserveAspectRatio="none"
        >
          <rect x="0" y="60" width="60" height="100" fill="rgba(255,255,255,0.08)" />
          <rect x="70" y="30" width="50" height="130" fill="rgba(255,255,255,0.1)" />
          <rect x="130" y="80" width="40" height="80" fill="rgba(255,255,255,0.07)" />
          <rect x="180" y="10" width="55" height="150" fill="rgba(255,255,255,0.1)" />
          <rect x="250" y="55" width="45" height="105" fill="rgba(255,255,255,0.08)" />
          <rect x="310" y="20" width="60" height="140" fill="rgba(255,255,255,0.1)" />
          <rect x="400" y="65" width="50" height="95" fill="rgba(255,255,255,0.08)" />
          <rect x="470" y="35" width="45" height="125" fill="rgba(255,255,255,0.09)" />
          <rect x="540" y="75" width="40" height="85" fill="rgba(255,255,255,0.07)" />
          <rect x="610" y="25" width="55" height="135" fill="rgba(255,255,255,0.1)" />
          <rect x="690" y="60" width="45" height="100" fill="rgba(255,255,255,0.08)" />
          <rect x="760" y="15" width="55" height="145" fill="rgba(255,255,255,0.1)" />
          <rect x="840" y="70" width="40" height="90" fill="rgba(255,255,255,0.07)" />
          <rect x="900" y="40" width="50" height="120" fill="rgba(255,255,255,0.09)" />
          <rect x="1000" y="20" width="60" height="140" fill="rgba(255,255,255,0.1)" />
          <rect x="1070" y="55" width="45" height="105" fill="rgba(255,255,255,0.08)" />
          <rect x="1130" y="10" width="55" height="150" fill="rgba(255,255,255,0.1)" />
        </svg>

        <div className="stats__car-wrap">
          <svg
            className="stats__car"
            viewBox="0 0 240 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="carBody" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="100%" stopColor="#dbe3f2" />
              </linearGradient>
              <linearGradient id="carGlass" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#5f7fd6" />
                <stop offset="100%" stopColor="#2c3e70" />
              </linearGradient>
              <radialGradient id="rim" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#e7ebf3" />
                <stop offset="70%" stopColor="#9aa3b8" />
                <stop offset="100%" stopColor="#5b6172" />
              </radialGradient>
            </defs>

            <ellipse cx="120" cy="90" rx="100" ry="6" fill="rgba(0,0,0,0.18)" />

            {/* body */}
            <rect
              x="25"
              y="55"
              width="190"
              height="24"
              rx="12"
              fill="url(#carBody)"
              stroke="#c4cddc"
              strokeWidth="1"
            />

            {/* cabin / windows */}
            <path
              d="M85 55 L99 27 Q102 22 108 22 L162 22 Q168 22 171 27 L185 55 Z"
              fill="url(#carGlass)"
              stroke="#c4cddc"
              strokeWidth="1"
            />
            <line x1="134" y1="23" x2="134" y2="55" stroke="#e9edf6" strokeWidth="3" />

            {/* lights: taillight (rear, left) + headlight (front, right) */}
            <circle cx="32" cy="64" r="3" fill="#ff8a8a" />
            <circle cx="208" cy="64" r="3" fill="#ffe58a" />

            <g className="stats__wheel">
              <circle cx="70" cy="80" r="15" fill="#12151f" />
              <circle cx="70" cy="80" r="9" fill="url(#rim)" />
              <circle cx="70" cy="80" r="3" fill="#3a4050" />
            </g>
            <g className="stats__wheel">
              <circle cx="195" cy="80" r="15" fill="#12151f" />
              <circle cx="195" cy="80" r="9" fill="url(#rim)" />
              <circle cx="195" cy="80" r="3" fill="#3a4050" />
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
}
