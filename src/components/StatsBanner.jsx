import "./StatsBanner.css";

const STATS = [
  { value: "300,000+", label: "Trip Requests" },
  { value: "850,000+", label: "Total Customers" },
  { value: "35,000+", label: "Active Drivers" },
  { value: "64", label: "District Covered" },
];

export default function StatsBanner() {
  return (
    <section className="stats">
      <div className="container stats__inner">
        <h2>
          From Everyday Rides to <br /> Meaningful Journeys
        </h2>

        <div className="stats__grid">
          {STATS.map((stat) => (
            <div className="stats__item" key={stat.label}>
              <span className="stats__value">{stat.value}</span>
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
