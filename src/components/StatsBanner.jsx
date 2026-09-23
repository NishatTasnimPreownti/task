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

            <ellipse cx="120" cy="86" rx="105" ry="7" fill="rgba(0,0,0,0.18)" />

            <path
              d="M18 62c0-5 4-9 10-10l14-2 12-18c3-5 9-8 15-8h58c7 0 13 4 16 10l9 17 16 3c6 1 10 6 10 12v9c0 4-3 7-7 7H23c-3 0-5-2-5-5v-13Z"
              fill="url(#carBody)"
              stroke="#c4cddc"
              strokeWidth="1"
            />

            <path
              d="M60 42l10-15c2-3 5-5 9-5h50c4 0 8 2 10 6l8 14-3 1H61l-1-1Z"
              fill="url(#carGlass)"
            />
            <path d="M92 24h35c3 0 5 1 6 4l5 9H93l-1-13Z" fill="rgba(255,255,255,0.25)" />

            <rect x="86" y="41" width="3" height="18" fill="#c4cddc" />

            <circle cx="45" cy="34" r="3" fill="#ffe58a" />
            <circle cx="205" cy="38" r="3" fill="#ff8a8a" />

            <g className="stats__wheel" style={{ transformOrigin: "58px 70px" }}>
              <circle cx="58" cy="70" r="16" fill="#12151f" />
              <circle cx="58" cy="70" r="10" fill="url(#rim)" />
              <circle cx="58" cy="70" r="3" fill="#3a4050" />
            </g>
            <g className="stats__wheel" style={{ transformOrigin: "175px 70px" }}>
              <circle cx="175" cy="70" r="16" fill="#12151f" />
              <circle cx="175" cy="70" r="10" fill="url(#rim)" />
              <circle cx="175" cy="70" r="3" fill="#3a4050" />
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
}
