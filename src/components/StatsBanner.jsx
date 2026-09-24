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

const BUILDINGS = [
  { x: 0, y: 60, w: 60, h: 100, roof: false },
  { x: 70, y: 30, w: 50, h: 130, roof: true },
  { x: 130, y: 80, w: 40, h: 80, roof: false },
  { x: 180, y: 10, w: 55, h: 150, roof: true },
  { x: 250, y: 55, w: 45, h: 105, roof: false },
  { x: 310, y: 20, w: 60, h: 140, roof: true },
  { x: 400, y: 65, w: 50, h: 95, roof: false },
  { x: 470, y: 35, w: 45, h: 125, roof: true },
  { x: 540, y: 75, w: 40, h: 85, roof: false },
  { x: 610, y: 25, w: 55, h: 135, roof: true },
  { x: 690, y: 60, w: 45, h: 100, roof: false },
  { x: 760, y: 15, w: 55, h: 145, roof: true },
  { x: 840, y: 70, w: 40, h: 90, roof: false },
  { x: 900, y: 40, w: 50, h: 120, roof: true },
  { x: 1000, y: 20, w: 60, h: 140, roof: true },
  { x: 1070, y: 55, w: 45, h: 105, roof: false },
  { x: 1130, y: 10, w: 55, h: 150, roof: true },
];

const LAMP_X = [40, 100, 150, 210, 270, 335, 390, 450, 510, 570, 630, 690, 750, 810, 870, 930, 990, 1050, 1110, 1170];

function windowRows(building) {
  const rows = [];
  const cols = Math.max(2, Math.floor(building.w / 14));
  const rowCount = Math.max(2, Math.floor(building.h / 16));
  for (let r = 0; r < rowCount; r++) {
    for (let c = 0; c < cols; c++) {
      rows.push({
        x: building.x + 6 + c * 14,
        y: building.y + 10 + r * 16,
      });
    }
  }
  return rows;
}

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
          {/* street lamp posts */}
          {LAMP_X.map((x) => (
            <g key={`lamp-${x}`}>
              <line
                x1={x}
                y1="150"
                x2={x}
                y2="160"
                stroke="rgba(255,255,255,0.22)"
                strokeWidth="2"
              />
              <circle cx={x} cy="147" r="3" fill="rgba(255,255,255,0.3)" />
            </g>
          ))}

          {BUILDINGS.map((b) => (
            <g key={`${b.x}-${b.y}`}>
              <rect
                x={b.x}
                y={b.y}
                width={b.w}
                height={b.h}
                fill="rgba(255,255,255,0.09)"
              />
              {b.roof && (
                <>
                  <rect
                    x={b.x + b.w / 2 - 5}
                    y={b.y - 14}
                    width="10"
                    height="14"
                    fill="rgba(255,255,255,0.12)"
                  />
                  <line
                    x1={b.x + b.w / 2}
                    y1={b.y - 14}
                    x2={b.x + b.w / 2}
                    y2={b.y - 24}
                    stroke="rgba(255,255,255,0.25)"
                    strokeWidth="1.5"
                  />
                  <circle
                    cx={b.x + b.w / 2}
                    cy={b.y - 25}
                    r="2"
                    fill="rgba(255,255,255,0.35)"
                  />
                </>
              )}
              {windowRows(b).map((w, i) => (
                <rect
                  key={i}
                  x={w.x}
                  y={w.y}
                  width="5"
                  height="7"
                  fill="rgba(255,255,255,0.18)"
                />
              ))}
            </g>
          ))}
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

            {/* cabin / windows — shifted toward the rear so the hood (front,
                headlight side) reads as longer than the trunk overhang */}
            <path
              d="M60 55 L74 27 Q77 22 83 22 L137 22 Q143 22 146 27 L160 55 Z"
              fill="url(#carGlass)"
              stroke="#c4cddc"
              strokeWidth="1"
            />
            <line x1="109" y1="23" x2="109" y2="55" stroke="#e9edf6" strokeWidth="3" />

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
