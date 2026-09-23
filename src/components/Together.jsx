import "./Together.css";

const CARDS = [
  {
    title: "Freedom",
    desc: "Choose your fare, vehicle and driver.",
    icon: "🧭",
  },
  {
    title: "Safe travel",
    desc: "Choose your fare, vehicle and driver.",
    icon: "🛡️",
  },
  {
    title: "Choose Your Preferred Car",
    desc: "Pick a ride that matches your comfort and budget.",
    icon: "🚘",
  },
];

export default function Together() {
  return (
    <section className="together section">
      <div className="container">
        <h2 className="section-title">
          More Than Miles &mdash; <br /> We Bring People Together
        </h2>

        <div className="together__grid">
          {CARDS.map((card) => (
            <div className="together__card" key={card.title}>
              <span className="together__icon">{card.icon}</span>
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
